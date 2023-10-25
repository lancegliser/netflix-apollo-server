// TODO this might should be a sub folder
import { ContentMutationsResolvers, Resolvers } from "../../../generated/types";
import { trackContentObjectAccess } from "./access.utils";

export const addContentAccessResolvers = (resolvers: Resolvers): Resolvers => {
  resolvers.ContentMutations = {
    ...resolvers.ContentMutations,
    ...contentMutations,
  };
  return resolvers;
};

const contentMutations: ContentMutationsResolvers = {
  trackItemAccess: (_, args, context) =>
    trackContentObjectAccess(
      "ContentItem",
      args.objectId,
      args.operation,
      context,
    ),
};
