import {
  ContentResolvers,
  ContentSuggestions,
  ContentSuggestionsResolvers,
  Resolvers,
} from "../../../generated/types";
import {
  getDynamicSuggestionsSets,
  getRecentSuggestionsSet,
  getSavedSuggestionsSet,
  SuggestionsSetsOptions,
} from "./suggestions.utils";

export const addContentSuggestionResolvers = (
  resolvers: Resolvers,
): Resolvers => {
  resolvers.Content = { ...resolvers.Content, ...content };
  resolvers.ContentSuggestions = contentSuggestions;
  return resolvers;
};

const content: ContentResolvers = {
  suggestions: async (_, args, context) => {
    context.cache.contentSuggestions = {
      options: {
        limit: args.limit || 30,
        preload: args.preload || undefined,
        preloadLast: args.preloadLast || false,
      } satisfies SuggestionsSetsOptions,
    };
    // We'll fill this in with resolvers below on demand
    return {} as ContentSuggestions;
  },
};

const contentSuggestions: ContentSuggestionsResolvers = {
  dynamic: (parent, args, context) =>
    getDynamicSuggestionsSets(
      context,
      context.cache.contentSuggestions.options,
    ),
  recent: (parent, args, context) =>
    getRecentSuggestionsSet(context, context.cache.contentSuggestions.options),
  saved: (parent, args, context) =>
    getSavedSuggestionsSet(context, context.cache.contentSuggestions.options),
};
