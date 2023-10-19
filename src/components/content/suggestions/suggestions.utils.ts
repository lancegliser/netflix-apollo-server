import {
  ContentAccessOperation,
  ContentItem,
  ContentSuggestionsArgs,
  ContentSuggestionsItem,
  ContentSuggestionsSet,
} from "../../../generated/types";
import { getItems, getItemsIndex } from "../content.utils";
import { GraphQLContext } from "../../context";
import {
  getContentItemLatestReadAccesses,
  getContentSourceObjectAccessTrackingIdComponents,
  contentSourceAccessTrackingType,
  trackContentObjectAccess,
} from "../access/access.utils";
import { getContentSourceObjectSavedRecordIdComponents } from "../saved/saved.utils";

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
  // Get the user's access records to obtain source and ids for nodes
  if (!context.authentication?.identity?.id) {
    throw new Error("context.authentication?.identity?.id is undefined");
  }

  const savedRecords = await context.savedRepo.query({
    createdBys: context.authentication.identity.id,
    limit: options.limit,
  });

  const sourceNodeIndex = savedRecords
    .map((savedRecord) =>
      getContentSourceObjectSavedRecordIdComponents(savedRecord.objectId),
    )
    .reduce(getSourceObjectIndex, {} as ItemIndex<ContentItem>);

  return {
    displayName: "Saved",
    items: await getContentSuggestionItemsFromSourceNodeIndex(
      context,
      sourceNodeIndex,
    ),
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
  // Get the user's access records to obtain source and ids for nodes
  const accesses = await getContentItemLatestReadAccesses(context, {
    limit: options.limit,
  });
  const sourceNodeIndex = accesses
    .map((access) =>
      getContentSourceObjectAccessTrackingIdComponents(access.objectId),
    )
    .reduce(getSourceObjectIndex, {} as ItemIndex<ContentItem>);

  return {
    displayName: "Pick up where you left off",
    items: await getContentSuggestionItemsFromSourceNodeIndex(
      context,
      sourceNodeIndex,
    ),
  };
};

type ItemIndex<T> = Record<ContentItem["id"], T | undefined>;
const getSourceObjectIndex = <T>(
  index: ItemIndex<T>,
  { objectId }: { objectId: string },
): ItemIndex<T> => {
  index ||= {};
  index[objectId] = undefined;
  return index;
};

const getContentSuggestionItemsFromSourceNodeIndex = async (
  context: GraphQLContext,
  sourceNodeIndex: ItemIndex<ContentItem>,
): Promise<ContentSuggestionsItem[]> => {
  const getNodeResults = await Promise.allSettled(
    getNodesPromisesForSourceNodeIndex(context, sourceNodeIndex),
  );
  getNodeResults.forEach((result) => {
    if (result.status === "rejected") {
      return;
    }

    result.value.nodes.forEach((node) => {
      sourceNodeIndex[node.id] = node;
    });
  });

  return Object.entries(sourceNodeIndex).reduce((items, [id, item]) => {
    const newItems = Object.values(items)
      .filter(Boolean)
      .map((item) => {
        if (!item) {
          throw new Error("item is undefined");
        }

        return getContentSuggestionItemFromContentItem(item);
      });

    return [...items, ...newItems];
  }, [] as ContentSuggestionsItem[]);
};

const getNodesPromisesForSourceNodeIndex = (
  context: GraphQLContext,
  itemIndex: ItemIndex<ContentItem>,
): Promise<ContentItem[]>[] =>
  getItems(context, {
    ids: Object.keys(itemIndex),
  });

export const getContentSuggestionItemFromContentItem = (
  item: ContentItem,
): ContentSuggestionsItem => ({
  displayImageUrl: item.displayImageUrl,
  format: item.format,
  nodeId: item.id,
  preloaded: true,
  primary: item.displayName,
  searchId: item.displayName,
  secondary: undefined,
});

export const getDynamicSuggestionsSets = async (
  context: GraphQLContext,
  options: SuggestionsSetsOptions,
): Promise<ContentSuggestionsSet[]> => {
  return getCategorySuggestionsSets(context, options);
};

type SourceSuggestionSetReturn = {
  set: ContentSuggestionsSet;
  access: number;
};
export const getCategorySuggestionsSets = async (
  context: GraphQLContext,
  options: SuggestionsSetsOptions,
): Promise<SourceSuggestionSetReturn[]> => {
  try {
    const predictions = await getPredictions(context, {
      maxResults: options.limit,
      // threshold: undefined,
    });

    const items = predictions.results.map(
      (prediction): ContentSuggestionsItem => ({
        format: prediction.format,
        preloaded: false, // See preloadSuggestions()
        primary: prediction.displayName,
        secondary: undefined,
        nodeId: prediction.entityId,
      }),
    );

    // Since we've already preloaded these, we need to modify them a bit.
    // If items aren't _suppose_ to be preloaded,
    // we need to strip out `displayImageUrl` to allow it lazy loading.
    const preloadIndex = getPreloadSuggestionIdsIndex(items, options);
    const preloadIds = preloadIndex?.size
      ? Array.from(preloadIndex.values())
      : undefined;

    const nodes = preloadIds?.length
      ? await getItems(context, {
          ids: preloadIds,
        })
      : undefined;
    const nodesIndex = nodes ? getItemsIndex(nodes) : {};

    const preloadedItems = items.map((item) =>
      item.nodeId && nodesIndex[item.nodeId]
        ? {
            ...item,
            displayImageUrl: nodesIndex[item.nodeId].displayImageUrl,
            preloaded: true,
          }
        : item,
    );

    return [
      {
        access: (access?.timestamp
          ? new Date(access.timestamp)
          : new Date()
        ).getTime(),
        set: {
          displayName: source.displayName,
          items: preloadedItems,
        },
      },
    ];
  } catch (reason) {
    context.logger.error(`getSourceSuggestionsSets for failed: ${reason}`);
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
