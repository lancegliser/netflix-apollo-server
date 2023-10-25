# Netflix Apollo Server

> Provides a working API for a Netflix like interface demonstration

## Upstream v1.2.0

```bash
git remote add upstream git@github.com:lancegliser/node-express-apollo-graphql.git
```

## GraphQL Playground

Once server is running (`npm run-script dev:watch`)
You may load and interact with data through the
[playground](http://localhost:5000/api/graphql).

## Configuration

You'll need to install Postgres. A simple `docker-compose.yaml`[./docker-compose.yaml] file
includes a instance and admin.

### Databbase

```bash
docker compose up -d
```

This will create the postgres DB as well as a browser interface (pgadmin) where you can
view and maintain your data.

Go to [http://127.0.0.1:15432](http://127.0.0.1:15432) and log in with the credentials:

username: user@example.com
password: postgres

You will need to connect the pgadmin tool to your running instance by clicking `Add New Server`
(you're actually creating a _connection_ to your existing server).

Under the `General` tab:
name: db

Under the `Connection` tab:
hostname: 10.5.0.4
user: postgres
password: postgres

#### Connecting via postgres client (i.e. outside the running container)

Use `0.0.0.0:5432` to connect using a client inside a codebase, or from your terminal with `psql`
commands.

## Code generation and work flow

This API works from a GraphQL first approach.
Each component you wish to write starts with a `.graphql` file.
The types in it will cause typescript code to be generated
by running the following command:

```
npm run graphql-codegen
```

The generated classes are created at:

```
src/generated/types.ts
```

You can import those types in your own resolver,
providing you strong contracts and stub implementations.

## Testing

Integration tests are run using [Jest](https://jestjs.io/) to create an
instance of the API on a random port using Node. Testing supplies
its own user context.

Jest can use a local `.env` file for process environment variables.
