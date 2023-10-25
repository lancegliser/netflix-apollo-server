import {
  DatabaseNotFoundError,
  DatabaseWriteError,
  PostgresRepo,
  PostgresScalar,
} from "../../utilities/postgres";
import { Pool, PoolClient } from "pg";
import { getPostgresConnectionPool, schema } from "../../config/postgres";
import { AccessRecord } from "../../generated/types";
import { v4 } from "uuid";

export const getAccessRepo = () => {
  const pool = getPostgresConnectionPool();
  return new AccessRepo(pool, schema);
};

export class AccessRepo extends PostgresRepo {
  private readonly schema: string;
  static accessTrackingTableName = "access_tracking";

  constructor(pool: Pool, schema: string) {
    super(pool);
    this.schema = schema;
  }

  async put(
    access: Pick<
      AccessRecord,
      "accessorId" | "objectType" | "objectId" | "operation"
    > &
      Partial<Pick<AccessRecord, "id">>,
  ): Promise<AccessRecord> {
    try {
      const results = await this.pool.query<Pick<AccessRow, "id">>(
        `
        INSERT INTO ${this.schema}.${AccessRepo.accessTrackingTableName}(
            id, accessor_id, object_type, object_id, operation)
            VALUES ($1, $2, $3, $4, $5)
        ON CONFLICT (id)
        DO UPDATE SET
            id = $1,
            accessor_id = $2,
            object_type = $3,
            object_id = $4,
            operation = $5,
            "timestamp" = CURRENT_TIMESTAMP
        RETURNING (id);
`,
        [
          access.id || v4(),
          access.accessorId,
          access.objectType,
          access.objectId,
          access.operation,
        ],
      );

      const row = results.rows.at(0);
      if (!row) {
        throw new DatabaseWriteError(
          `Failed to write access tracking ${[
            access.id,
            access.accessorId,
            access.objectType,
            access.objectId,
            access.operation,
          ].join(", ")}`,
        );
      }

      return await this.get(row.id);
    } catch (reason) {
      if (reason instanceof Error) {
        throw reason;
      }
      throw new Error(`${reason}`);
    }
  }

  /** Returns an access record by its id */
  async get(id: string): Promise<AccessRecord> {
    try {
      const results = await this.pool.query<AccessRow>(
        `
        SELECT id, accessor_id, object_type, object_id, operation, "timestamp"
        FROM ${this.schema}.${AccessRepo.accessTrackingTableName}
        WHERE id = $1;
      `,
        [id],
      );

      const row = results.rows.at(0);
      if (!row) {
        throw new DatabaseNotFoundError(`Access id ${id} not found`);
      }

      return getAccessRecordFromRow(row);
    } catch (reason) {
      if (reason instanceof Error) {
        throw reason;
      }
      throw new Error(`${reason}`);
    }
  }

  async delete(id: string): Promise<AccessRecord | undefined> {
    try {
      const release = await this.get(id);

      await this.pool.query(
        `
      DELETE FROM ${this.schema}.${AccessRepo.accessTrackingTableName}
      WHERE id = $1;`,
        [id],
      );

      return release;
    } catch (reason) {
      // Great! Our job was already done.
      if (reason instanceof DatabaseNotFoundError) {
        return undefined;
      }

      if (reason instanceof Error) {
        throw reason;
      }
      throw new Error(`${reason}`);
    }
  }

  /**
   * Searches for absolute access records state. Duplicates of an object are likely.
   * Consider queryDistinctAccessObjects() in many cases
   */
  async query(parameters: QueryParameters): Promise<AccessRecord[]> {
    const {
      accessorIds: accessor_id,
      objectTypes: object_type,
      objectIds: object_id,
      operations: operation,
      sortMethod = "timestamp asc",
      offset = 0,
      limit = 50,
    } = parameters;
    const client = await this.pool.connect();

    try {
      const conditions = [
        getNamedCondition(client, "accessor_id", accessor_id),
        getNamedCondition(client, "object_type", object_type),
        getNamedCondition(client, "object_id", object_id),
        getNamedCondition(client, "operation", operation),
      ].filter(Boolean);
      const { query, values } = this.convertNamedParameters(
        `
        SELECT id, accessor_id, object_type, object_id, operation, "timestamp"
        FROM ${this.schema}.${AccessRepo.accessTrackingTableName}
        WHERE ${conditions.map((condition) => condition!.sql).join(`\nAND `)}
        ORDER BY "timestamp" ${sortMethod === "timestamp asc" ? "ASC" : "DESC"}
        LIMIT :limit
        OFFSET :offset;
      `,
        {
          ...conditions.reduce(
            (conditions, condition) => {
              conditions[condition!.field] = condition!.value;
              return conditions;
            },
            {} as Record<string, unknown>,
          ),
          limit,
          offset,
        },
      );

      const results = await this.pool.query<AccessRow>(query, values);
      return results.rows.map(getAccessRecordFromRow);
    } finally {
      client.release();
    }
  }

  async queryDistinctAccessObjects(
    parameters: QueryParameters,
  ): Promise<Omit<AccessRecord, "id">[]> {
    const {
      accessorIds: accessor_id,
      objectTypes: object_type,
      objectIds: object_id,
      operations: operation,
      sortMethod = "timestamp asc",
      offset = 0,
      limit = 50,
    } = parameters;
    const client = await this.pool.connect();

    try {
      const conditions = [
        getNamedCondition(client, "accessor_id", accessor_id),
        getNamedCondition(client, "object_type", object_type),
        getNamedCondition(client, "object_id", object_id),
        getNamedCondition(client, "operation", operation),
      ].filter(Boolean);
      const { query, values } = this.convertNamedParameters(
        `
        SELECT accessor_id, object_type, object_id, operation, MAX("timestamp") as "timestamp"
        FROM ${this.schema}.${AccessRepo.accessTrackingTableName}
        WHERE ${conditions.map((condition) => condition!.sql).join(`\nAND `)}
        GROUP BY accessor_id, object_type, object_id, operation
        ORDER BY "timestamp" ${sortMethod === "timestamp asc" ? "ASC" : "DESC"}
        LIMIT :limit
        OFFSET :offset;
      `,
        {
          ...conditions.reduce(
            (conditions, condition) => {
              conditions[condition!.field] = condition!.value;
              return conditions;
            },
            {} as Record<string, unknown>,
          ),
          limit,
          offset,
        },
      );

      const results = await this.pool.query<AccessRow>(query, values);
      return results.rows.map(getAccessRecordFromRow);
    } finally {
      client.release();
    }
  }
}

type QueryParameters = {
  accessorIds?: string | string[];
  objectTypes?: string | string[];
  objectIds?: string | string[];
  operations?: string | string[];
  sortMethod?: "timestamp asc" | "timestamp desc";
  limit?: number;
  offset?: number;
};
type ConditionValue = undefined | string | string[];
type Condition = {
  field: string;
  sql: string;
  value: ConditionValue;
};

const getNamedCondition = (
  client: PoolClient,
  field: string,
  values: ConditionValue,
): Condition | undefined => {
  if (!values || (Array.isArray(values) && !values.length)) {
    return undefined;
  }

  const arrayValues = Array.isArray(values) ? values : [values];
  const sql = `${client.escapeIdentifier(field)} = ${
    arrayValues.length > 1 ? `ANY(:${field})` : `:${field}`
  }`;
  return {
    field,
    sql,
    value: arrayValues.length > 1 ? arrayValues : arrayValues[0],
  };
};

type AccessRow = {
  /** PK */
  id: PostgresScalar["uuid"];
  accessor_id: PostgresScalar["varchar"]["512"];
  object_type: PostgresScalar["varchar"]["512"];
  object_id: PostgresScalar["varchar"]["512"];
  operation: PostgresScalar["varchar"]["128"];
  timestamp: PostgresScalar["timestamp"]["with_time_zone"];
};

const getAccessRecordFromRow = ({
  accessor_id,
  object_type,
  object_id,
  ...row
}: AccessRow): AccessRecord => ({
  accessorId: accessor_id,
  objectType: object_type,
  objectId: object_id,
  ...row,
});
