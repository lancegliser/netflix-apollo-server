import { Pool } from "pg";

export class PostgresRepo {
  protected pool: Pool;

  constructor(pool: Pool) {
    this.pool = pool;
  }

  /**
   * Reshaped named parameters in a SQL string with $1, $2, etc and an array of values for them
   */
  protected convertNamedParameters(
    sql: string,
    params: Record<string, unknown>,
  ) {
    const [query, values] = Object.entries(params).reduce(
      ([sql, array, index], [key, value]) =>
        [
          sql.replace(`:${key}`, `$${index}`),
          [...array, value],
          index + 1,
        ] as QueryReducerArray,
      [sql, [], 1] as QueryReducerArray,
    );
    return { query, values };
  }

  private getError(message: string) {
    return new DatabaseError(message);
  }
  private getNotFoundError(message: string) {
    return new DatabaseNotFoundError(message);
  }
  private getDatabaseInsertError(message: string) {
    return new DatabaseInsertError(message);
  }
  private getDatabaseUpdateError(message: string) {
    return new DatabaseUpdateError(message);
  }
}
type QueryReducerArray = [string, (string | number)[], number];

export type PostgresScalar = {
  uuid: string;
  varchar: {
    128: string;
    256: string;
    512: string;
  };
  text: string;
  timestamp: {
    with_time_zone: string;
  };
};

export type PostgresCreatedProperties = {
  created_at: PostgresScalar["varchar"]["256"];
  created_by: PostgresScalar["varchar"]["256"];
};

export class DatabaseError extends Error {}
export class DatabaseNotFoundError extends DatabaseError {}
export class DatabaseWriteError extends DatabaseError {}
export class DatabaseInsertError extends DatabaseWriteError {}
export class DatabaseUpdateError extends DatabaseWriteError {}
