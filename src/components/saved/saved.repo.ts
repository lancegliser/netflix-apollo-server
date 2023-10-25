import {
  DatabaseNotFoundError,
  DatabaseWriteError,
  PostgresRepo,
  PostgresScalar,
} from "../../utilities/postgres";
import { Pool } from "pg";
import { getPostgresConnectionPool, schema } from "../../config/postgres";
import { SavedRecord } from "../../generated/types";
import { v4 } from "uuid";

export const getSavedRepo = () => {
  const pool = getPostgresConnectionPool();
  return new SavedRepo(pool, schema);
};

export class SavedRepo extends PostgresRepo {
  private readonly schema: string;
  static SavedRecordTableName = "saved_objects";

  constructor(pool: Pool, schema: string) {
    super(pool);
    this.schema = schema;
  }

  async save(
    record: Partial<SavedRecord> &
      Pick<SavedRecord, "createdBy" | "objectType" | "objectId">,
  ): Promise<SavedRecord> {
    try {
      const results = await this.pool.query<Pick<SavedRow, "id">>(
        `
        INSERT INTO ${this.schema}.${SavedRepo.SavedRecordTableName}(
            id, created_at, created_by, object_type, object_id)
            VALUES ($1, $2, $3, $4, $5)
        ON CONFLICT (created_by, object_type, object_id)
        DO UPDATE SET
            created_at = CURRENT_TIMESTAMP
        RETURNING (id);
`,
        [
          record.id || v4(),
          record.createdAt || new Date().toISOString(),
          record.createdBy,
          record.objectType,
          record.objectId,
        ],
      );

      const row = results.rows.at(0);
      if (!row) {
        throw new DatabaseWriteError(
          `Failed to write saved object ${[
            record.id,
            record.createdAt,
            record.createdAt,
            record.objectType,
            record.objectId,
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

  /** Returns an Saved record by its id */
  async get(id: string): Promise<SavedRecord> {
    try {
      const results = await this.pool.query<SavedRow>(
        `
        SELECT id, created_at, created_by, object_type, object_id
        FROM ${this.schema}.${SavedRepo.SavedRecordTableName}
        WHERE id = $1;
      `,
        [id],
      );

      const row = results.rows.at(0);
      if (!row) {
        throw new DatabaseNotFoundError(`Saved id ${id} not found`);
      }

      return getSavedRecordFromRow(row);
    } catch (reason) {
      if (reason instanceof Error) {
        throw reason;
      }
      throw new Error(`${reason}`);
    }
  }

  async delete(id: string): Promise<SavedRecord | undefined> {
    try {
      const release = await this.get(id);

      await this.pool.query(
        `
      DELETE FROM ${this.schema}.${SavedRepo.SavedRecordTableName}
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

  async query(parameters: {
    createdBys?: string | string[];
    objectTypes?: string | string[];
    objectIds?: string | string[];
    sortMethod?: "created_at asc" | "created_at desc";
    limit?: number;
    offset?: number;
  }): Promise<SavedRecord[]> {
    const {
      createdBys: created_by,
      objectTypes: object_type,
      objectIds: object_id,
      sortMethod = "created_at asc",
      offset = 0,
      limit = 50,
    } = parameters;
    const client = await this.pool.connect();

    type ConditionValue = undefined | string | string[];
    type Condition = {
      field: string;
      sql: string;
      value: ConditionValue;
    };
    const getNamedCondition = (
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

    const conditions = [
      getNamedCondition("created_by", created_by),
      getNamedCondition("object_type", object_type),
      getNamedCondition("object_id", object_id),
    ].filter(Boolean);
    const { query, values } = this.convertNamedParameters(
      `
        SELECT id, created_at, created_by, object_type, object_id
        FROM ${this.schema}.${SavedRepo.SavedRecordTableName}
        WHERE ${conditions.map((condition) => condition!.sql).join(`\nAND `)}
        ORDER BY created_at ${sortMethod === "created_at asc" ? "ASC" : "DESC"}
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

    client.release();
    const results = await this.pool.query<SavedRow>(query, values);
    return results.rows.map(getSavedRecordFromRow);
  }
}

type SavedRow = {
  /** PK */
  id: PostgresScalar["uuid"];
  created_at: PostgresScalar["timestamp"]["with_time_zone"];
  created_by: PostgresScalar["varchar"]["512"];
  object_type: PostgresScalar["varchar"]["512"];
  object_id: PostgresScalar["varchar"]["512"];
};
const getSavedRecordFromRow = ({
  created_at,
  created_by,
  object_type,
  object_id,
  ...row
}: SavedRow): SavedRecord => ({
  createdAt: created_at,
  createdBy: created_by,
  objectType: object_type,
  objectId: object_id,
  ...row,
});
