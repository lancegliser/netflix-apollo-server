import {
  ContentResolvers,
  ContentSuggestions,
  Resolvers,
} from "../../../generated/types";
import { getSources, getSourcesIndex } from "../content.utils";
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
  return resolvers;
};

const content: ContentResolvers = {
  suggestions: async (_, args, context) => {
    const options: SuggestionsSetsOptions = {
      limit: args.limit || 30,
      preload: args.preload || undefined,
      preloadLast: args.preloadLast || false,
    };

    // Get the sources, we'll need them shared throughout the other resolvers
    const sources = await getSources(context);
    const sourcesIndex = getSourcesIndex(sources);

    // Be real careful about order here...
    const [dynamicResult, recentResult, savedResult] = await Promise.allSettled(
      [
        // There is some concern that the promises here may all overlap for a particular node id.
        // A redis cache backing `getNodes` would ameliorate much of the concern, pre-optimizations stalled.
        getDynamicSuggestionsSets(context, sourcesIndex, options),
        getRecentSuggestionsSet(context, sourcesIndex, options),
        getSavedSuggestionsSet(context, sourcesIndex, options),
      ],
    );
    return {
      dynamic:
        dynamicResult.status === "fulfilled" ? dynamicResult.value : null,
      recent: recentResult.status === "fulfilled" ? recentResult.value : null,
      saved: savedResult.status === "fulfilled" ? savedResult.value : null,
    } as ContentSuggestions;
  },
};
