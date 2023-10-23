import {
  ContentItem,
  ContentSuggestionsArgs,
  ContentSuggestionsItem,
  ContentSuggestionsSet,
} from "../../../generated/types";
import { GraphQLContext } from "../../context";
import { getContentItemLatestReadAccesses } from "../access/access.utils";
import { mockItems } from "../content.mock";
import { getItems } from "../content.utils";

export type SuggestionsSetsOptions = {
  limit: number;
  preload: number | undefined;
  preloadLast: boolean;
};

/**
 * Returns suggestion items based the user's recent access history.
 * Access records will be cross source, and id only references.
 */
export const getSavedSuggestionsSet = async (
  context: GraphQLContext,
  options: SuggestionsSetsOptions,
): Promise<ContentSuggestionsSet> => {
  // Get the user's access records to obtain source and ids for items
  if (!context.authentication?.identity?.id) {
    throw new Error("context.authentication?.identity?.id is undefined");
  }

  const savedRecords = await context.savedRepo.query({
    createdBys: context.authentication.identity.id,
    objectTypes: "ContentItem",
    limit: options.limit,
  });

  const ids = savedRecords.map((savedRecord) => savedRecord.objectId);
  if (!ids.length) {
    return {
      displayName: "Saved",
      items: [],
    };
  }

  const items = await getItems(context, { ids });
  const mockedSuggestions = items.map(getContentSuggestionItemFromContentItem);

  // Since we've already preloaded these due to mock, we need to modify them a bit.
  // If items aren't _suppose_ to be preloaded,
  // we need to strip out `displayImageUrl` to allow it lazy loading.
  const preloadIndex = getPreloadSuggestionIdsIndex(mockedSuggestions, options);
  const preloadIds = preloadIndex?.size
    ? Array.from(preloadIndex.values())
    : undefined;
  const suggestions = mockedSuggestions.map((item) => {
    const shouldPreload = preloadIds?.includes(item.id);

    return {
      ...item,
      preloaded: !!shouldPreload,
      displayImageUrl: shouldPreload ? item.displayImageUrl : undefined,
    };
  });

  return {
    displayName: "Saved",
    items: suggestions,
  };
};

/**
 * Returns suggestion items based the user's recent access history.
 * Access records will be cross source, and id only references.
 */
export const getRecentSuggestionsSet = async (
  context: GraphQLContext,
  options: SuggestionsSetsOptions,
): Promise<ContentSuggestionsSet> => {
  // Get the user's access records to obtain source and ids for items
  const accesses = await getContentItemLatestReadAccesses(context, {
    limit: options.limit,
  });
  const ids = accesses.map((access) => access.objectId);
  if (!ids.length) {
    return {
      displayName: "Recent",
      items: [],
    };
  }

  const items = await getItems(context, { ids });
  const mockedSuggestions = items.map(getContentSuggestionItemFromContentItem);

  // Since we've already preloaded these due to mock, we need to modify them a bit.
  // If items aren't _suppose_ to be preloaded,
  // we need to strip out `displayImageUrl` to allow it lazy loading.
  const preloadIndex = getPreloadSuggestionIdsIndex(mockedSuggestions, options);
  const preloadIds = preloadIndex?.size
    ? Array.from(preloadIndex.values())
    : undefined;
  const suggestions = mockedSuggestions.map((item) => {
    const shouldPreload = preloadIds?.includes(item.id);

    return {
      ...item,
      preloaded: !!shouldPreload,
      displayImageUrl: shouldPreload ? item.displayImageUrl : undefined,
    };
  });

  return {
    displayName: "Recent",
    items: suggestions,
  };
};

export const getContentSuggestionItemFromContentItem = (
  item: ContentItem,
): ContentSuggestionsItem => ({
  displayImageUrl: item.displayImageUrl,
  id: item.id,
  preloaded: true,
  primary: item.displayName,
  secondary: item.id,
});

export const getDynamicSuggestionsSets = async (
  context: GraphQLContext,
  options: SuggestionsSetsOptions,
): Promise<ContentSuggestionsSet[]> => {
  try {
    // Gather genres
    const genresSet = new Set<string>();
    mockItems.forEach((item) => {
      if (!item.genres?.length) {
        return;
      }

      item.genres.forEach((genre) => genresSet.add(genre));
    });
    // Select 'some' for display
    const displayGenres: string[] = [];
    Array.from(genresSet).forEach((genre) => {
      if (displayGenres.length >= 4 || Math.random() >= 0.5) {
        return;
      }

      displayGenres.push(genre);
    });

    // Build an index of genres and full content items
    const genresFullItemIndex = displayGenres.reduce(
      (index, genre) => {
        index[genre] = [];
        mockItems.forEach((item) => {
          if (
            index[genre].length >= options.limit ||
            !item.genres?.includes(genre)
          ) {
            return;
          }
          index[genre].push(item);
        });
        return index;
      },
      {} as Record<string, ContentItem[]>,
    );

    // Translate the full content items into suggestions
    // ☣️ This probably should be done in one step to avoid memory, but it's minor.
    const genresSuggestionItemIndex = Object.entries(
      genresFullItemIndex,
    ).reduce(
      (index, [genre, items]) => {
        index[genre] = [];
        items.map((item) => {
          index[genre].push(getContentSuggestionItemFromContentItem(item));
        });

        return index;
      },
      {} as Record<string, ContentSuggestionsItem[]>,
    );

    return Object.entries(genresSuggestionItemIndex).map(([genre, items]) => {
      // Since we've already preloaded these due to mock, we need to modify them a bit.
      // If items aren't _suppose_ to be preloaded,
      // we need to strip out `displayImageUrl` to allow it lazy loading.
      const preloadIndex = getPreloadSuggestionIdsIndex(items, options);
      const preloadIds = preloadIndex?.size
        ? Array.from(preloadIndex.values())
        : undefined;

      return {
        displayName: genre.toLocaleUpperCase(),
        items: items.map((item) => {
          const shouldPreload = preloadIds?.includes(item.id);

          return {
            ...item,
            preloaded: !!shouldPreload,
            displayImageUrl: shouldPreload ? item.displayImageUrl : undefined,
          };
        }),
      };
    });
  } catch (reason) {
    context.logger.error(`getDynamicSuggestionsSets for failed: ${reason}`);
    throw reason;
  }
};

/**
 * Returns an index source Sets that identify which items should be preloaded.
 * This says nothing about if they are or are not already preload.
 */
const getPreloadSuggestionIdsIndex = (
  items: ContentSuggestionsItem[],
  options: Pick<ContentSuggestionsArgs, "preload" | "preloadLast">,
): Set<ContentItem["id"]> =>
  items.reduce((idsIndex) => {
    if (options.preload) {
      items.slice(0, options.preload).forEach(({ id }) => {
        if (id) {
          idsIndex ||= new Set<ContentItem["id"]>();
          idsIndex.add(id);
        }
      });
    }
    if (options.preloadLast) {
      const lastItem = items[items.length - 1];
      if (lastItem?.id) {
        idsIndex.add(lastItem.id);
      }
    }
    return idsIndex;
  }, new Set<ContentItem["id"]>());
