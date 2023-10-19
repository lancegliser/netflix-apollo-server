import { ContentResolvers, Resolvers } from "../../generated/types";
import { getItem, getItems } from "./content.utils";
import { addContentSuggestionResolvers } from "./suggestions/suggestions.resolvers";
import { addContentAccessResolvers } from "./access/access.resolvers";
import { addContentSavedObjectResolvers } from "./saved/saved.resolvers";

export const addContentResolvers = (resolvers: Resolvers): Resolvers => {
  resolvers.Query = {
    ...resolvers.Query,
    // @ts-expect-error Just creating the namespace
    content: () => ({}),
  };
  resolvers.Mutation = {
    ...resolvers.Mutation,
    // @ts-expect-error Just creating the namespace
    content: () => ({}),
  };
  resolvers.Content = content;
  resolvers.ContentMutations = {};
  addContentAccessResolvers(resolvers);
  addContentSavedObjectResolvers(resolvers);
  addContentSuggestionResolvers(resolvers);
  return resolvers;
};

const content: ContentResolvers = {
  item: async (_, args, context) => getItem(context, args),
  items: async (_, args, context) => getItems(context, args),
};
