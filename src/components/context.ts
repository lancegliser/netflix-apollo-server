import logger, { getECSContextualLogger } from "../server/logger";
import { SystemContext } from "../server/systemContext";
import { AuthenticationContext } from "../server/authentication";
import { GraphQLError } from "graphql";
import { ExpressContextFunctionArgument } from "@apollo/server/express4";

export interface GraphQLContext
  extends SystemContext,
    ExpressContextFunctionArgument {
  authentication?: AuthenticationContext;
  /**
   * Allows resolvers to store data for use in other resolvers.
   * Care must be taken as operations can be destructive.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  cache: Record<string, any>;
}

export type TGetGraphQLContextAdditions = (
  context: ExpressContextFunctionArgument,
) => Promise<GraphQLContext>;
/** Adds any context additions required by resolvers based on the incoming request */
export const getGraphQLContextAdditions: TGetGraphQLContextAdditions = async (
  context,
) => {
  const { req } = context;
  if (!req.locals?.system) {
    throw new GraphQLError("req.locals.system is undefined");
  }
  const { identity } = req.locals.authentication || {};

  return {
    ...context,
    ...req.locals.system,
    authentication: req.locals.authentication,
    cache: {},
    logger: getECSContextualLogger(logger, {
      req: context.req,
      res: context.res,
      "user.full_name": identity?.displayName || undefined,
      "user.email": identity?.email || undefined,
    }),
  };
};
