import pg, { Pool } from "pg";
import logger from "../server/logger";

// Force timestamps to return as ISO 8601 format. See the tests for edge cases.
export const timestampWithoutValuesFormatter = (timestamp: string): string => {
  const [date, time] = timestamp.replace(/Z$/, "").split(" ");
  const [year, month, day] = date.split("-");
  const [hour, minute, combinedSeconds] = time.split(":");
  const [seconds, fractionalSeconds] = combinedSeconds.split(".");
  const fractionalSecondsInt = parseInt(fractionalSeconds);
  const fractionalSecondsFloat =
    fractionalSecondsInt / 10 ** fractionalSeconds.length;

  return [
    [year, month, day].join("-"),
    "T",
    [hour, minute, seconds].join(":"),
    ".",
    fractionalSecondsFloat.toFixed(3).split(".").at(1),
    "Z",
  ].join("");
};
pg.types.setTypeParser(
  pg.types.builtins.TIMESTAMP,
  timestampWithoutValuesFormatter,
);
pg.types.setTypeParser(
  pg.types.builtins.TIMESTAMPTZ,
  timestampWithoutValuesFormatter,
);
pg.types.setTypeParser(pg.types.builtins.NUMERIC, parseFloat);

let pool: Pool | undefined;

/**
 * Returns a connection pool for use.
 *
 * With simple queries, there is no need for a connection checkout and return loop.
 * The .query() utility method uses a spare connection internally and releases.
 *
 * @example
 * try {
 *   const result = await pool.query('SELECT * FROM users WHERE id = $1', [1]);
 * } catch (err) {
 *   // Whatever you have to do
 * }
 *
 * For transactions, you need to checkout a connection to ensure it applies in a single go:
 * const client = await pool.connect();
 *
 * @example
 * try {
 *   await client.query('BEGIN');
 *   const result = await client.query('SELECT * FROM users WHERE id = $1', [1]);
 *   await client.query('COMMIT');
 * } catch(reason) {
 *   await client.query('ROLLBACK');
 *   throw reason;
 * } finally {
 *   // You must release the client, no matter what.
 *   client.release();
 * }
 */
export const getPostgresConnectionPool = (): Pool => {
  if (!pool) {
    validatePostgres();

    // Uses https://www.postgresql.org/docs/12/libpq-envars.html
    pool = new Pool();
    // the pool will emit an error on behalf of any idle clients
    // it contains if a backend error or network partition happens
    pool.on("error", (err, client) => {
      logger.error(`Postgres error on idle client: ${err.message}`, {
        err,
        event: {
          extras: { client },
        },
      });
      // This will crash the instance
      process.exit(-1);
    });
  }
  return pool;
};

export const schema = (
  process.env.PGSCHEMA || "netflix-apollo-graphql"
).replaceAll("-", "_");

export const validatePostgres = () => {
  if (!process.env.PGUSER) {
    throw new Error("process.env.PGUSER is undefined.");
  }
  if (!process.env.PGDATABASE) {
    throw new Error("process.env.PGDATABASE is undefined.");
  }
  if (!process.env.PGHOST) {
    throw new Error("process.env.PGHOST is undefined.");
  }
};
