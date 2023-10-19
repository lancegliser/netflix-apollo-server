// TODO this might should be a sub folder
import { ContentMutationsResolvers, Resolvers } from "../../../generated/types";
import {
  getContentSourceObjectAccessTrackingId,
  contentSourceAccessTrackingType,
  trackContentObjectAccess,
} from "./access.utils";

export const addContentAccessResolvers = (resolvers: Resolvers): Resolvers => {
  resolvers.ContentMutations = {
    ...resolvers.ContentMutations,
    ...contentMutations,
  };
  return resolvers;
};

const contentMutations: ContentMutationsResolvers = {
  trackSourceObjectAccess: (_, args, context) =>
    trackContentObjectAccess(
      "ContentItem",
      getContentSourceObjectAccessTrackingId(),
      args.operation,
      context,
    ),
};
