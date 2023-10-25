import {
  ContentItem,
  ContentItemArgs,
  ContentItemsArgs,
} from "../../generated/types";
import { GraphQLContext } from "../context";
import {
  getContentItemsCacheIndex,
  getContentItemsCacheIndexMisses,
  setContentItemCache,
} from "./cache/cache.utils";
import { ValidationError } from "../../utilities/graphqlErrors";
import { mockItems } from "./content.mock";

/**
 * Returns full Content items.
 * If present in caches, it is returned from that location first.
 */
export const getItems = async (
  context: GraphQLContext,
  { ids }: ContentItemsArgs,
): Promise<ContentItem[]> => {
  if (!ids.length) {
    throw new ValidationError("At least one id must be supplied");
  }

  // Get those already cached
  const itemIndex = await getContentItemsCacheIndex(
    context,
    ids.map((id) => ({
      id,
    })),
  );
  const cacheMisses = getContentItemsCacheIndexMisses(itemIndex);
  // Nothing was a cache miss! Let's return it.
  if (!cacheMisses.length) {
    return Object.values(itemIndex).filter(Boolean) as ContentItem[];
  }

  // Store those objects into the cache and update our index to return
  await Promise.all(
    cacheMisses.map(async ({ id }) => {
      const fullItem = mockItems.find((item) => item.id === id);
      if (!fullItem) {
        throw new Error(`Content ${id} could not be found`);
      }
      const cached = await setContentItemCache(
        context,
        { id: fullItem.id },
        fullItem,
      );
      if (!cached) {
        throw new Error(`Failed to cache ${fullItem.id}`);
      }

      itemIndex[cached.id] = cached;
    }),
  );

  return Object.values(itemIndex) as ContentItem[];
};

/**
 * Returns a full Content item.
 * A singular convince wrapper around getItems.
 */
export const getItem = async (
  context: GraphQLContext,
  { id }: ContentItemArgs,
): Promise<ContentItem> => {
  if (!id) {
    throw new ValidationError("An id must be supplied");
  }

  const items = await getItems(context, { ids: [id] });
  const item = items.at(0);
  if (!item) {
    throw new Error(`item ${id} not found`);
  }

  return item;
};

export const getItemsIndex = (
  items: ContentItem[],
): Record<ContentItem["id"], ContentItem> =>
  items.reduce(
    (index, source) => {
      index[source.id] = source;
      return index;
    },
    {} as ReturnType<typeof getItemsIndex>,
  );
