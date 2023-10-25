import {
  ContentMutationsResolvers,
  ContentItemResolvers,
  Resolvers,
} from "../../../generated/types";
import {
  addContentSavedObject,
  deleteContentSavedObject,
  getContentSavedObject,
} from "./saved.utils";

export const addContentSavedObjectResolvers = (
  resolvers: Resolvers,
): Resolvers => {
  resolvers.ContentMutations = {
    ...resolvers.ContentMutations,
    ...contentMutations,
  };
  resolvers.ContentItem = { ...resolvers.ContentItem, ...contentItemResolvers };
  return resolvers;
};

const contentMutations: ContentMutationsResolvers = {
  addSavedItem: (_, args, context) => {
    return addContentSavedObject(context, args.objectId);
  },
  deleteSavedObject: async (_, args, context) =>
    deleteContentSavedObject(context, args.id),
};

const contentItemResolvers: ContentItemResolvers = {
  saved: (parent, args, context) => {
    return getContentSavedObject(context, parent.id);
  },
};
