import { ContentItem } from "../../../generated/types";
import { GraphQLContext } from "../../context";

// A convince layer around what will eventually be in Redis.
// Signatures are planned based on https://www.npmjs.com/package/redis
const keySeparator = ":";

type ContentItemCacheIds = {
  id: string;
};

/** Saves a copy of the object into the cache and returns the copy */
export const setContentItemCache = async (
  context: GraphQLContext,
  ids: ContentItemCacheIds,
  node: ContentItem,
): Promise<ContentItem> => {
  const key = getContentItemCacheKey(ids);
  context.cache[key] = {
    ...node,
    cachedAt: new Date().toISOString(),
  } satisfies ContentItem;

  return context.cache[key];
};

/** Returns a copy of the object into the cache and returns the copy */
export const getContentItemCache = async (
  context: GraphQLContext,
  ids: ContentItemCacheIds,
): Promise<ContentItem | undefined> => {
  const key = getContentItemCacheKey(ids);

  return context.cache[key] ? { ...context.cache[key] } : undefined;
};

export const deleteContentItemCache = async (
  context: GraphQLContext,
  ids: ContentItemCacheIds,
): Promise<ContentItem | undefined> => {
  const cached = await getContentItemCache(context, ids);
  const key = getContentItemCacheKey(ids);
  delete context.cache[key];

  return cached;
};

const getContentItemCacheKey = (ids: ContentItemCacheIds): string =>
  ["content", ids.id].join(keySeparator);
const getContentItemCacheComponents = (key: string): ContentItemCacheIds => {
  const [, id] = key.split(keySeparator);
  return { id };
};

export type ContentItemCacheIndex = Record<
  ContentItem["id"],
  ContentItem | undefined
>;
export const getContentItemsCacheIndex = async (
  context: GraphQLContext,
  ids: ContentItemCacheIds[],
): Promise<ContentItemCacheIndex> => {
  const cacheResults = await Promise.allSettled(
    ids.map(async (ids) => {
      try {
        const node = await getContentItemCache(context, ids);
        return {
          ...ids,
          node,
        };
      } catch (reason) {
        context.logger.warning(`Failed to get node ${ids.id}: ${reason}`);
        return {
          ...ids,
          node: undefined,
        };
      }
    }),
  );

  return cacheResults.reduce((index, result) => {
    if (result.status === "fulfilled") {
      index[result.value.id] = result.value.node;
    }
    return index;
  }, {} as ContentItemCacheIndex);
};

/** Returns an array of ids that were undefined in the index */
export const getContentItemsCacheIndexMisses = (
  index: ContentItemCacheIndex,
): ContentItemCacheIds[] => {
  const misses: ContentItemCacheIds[] = [];
  Object.entries(index).forEach(([id, item]) => {
    if (item) {
      return;
    }
    misses.push({ id });
  });
  return misses;
};
