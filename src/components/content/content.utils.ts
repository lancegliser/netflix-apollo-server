import {
  ContentItem,
  ContentItemArgs,
  ContentItemsArgs,
} from "../../generated/types";
import { GraphQLContext } from "../context";
import { getAuthorizationHeadersFromContext } from "../auth/auth.utils";
import {
  getContentItemsCacheIndex,
  getContentItemsCacheIndexMisses,
  setContentItemCache,
} from "./cache/cache.utils";
import { ValidationError } from "../../utilities/graphqlErrors";

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
  const nodeIndex = await getContentItemsCacheIndex(
    context,
    ids.map((id) => ({
      id,
    })),
  );
  const cacheMisses = getContentItemsCacheIndexMisses(nodeIndex);
  // Nothing was a cache miss! Let's return it.
  if (!cacheMisses.length) {
    return Object.values(nodeIndex).filter(Boolean) as ContentItem[];
  }

  const response = await fetch(
    [sourceUrl, `/content/data/graph/nodes`].join(""),
    {
      ...getPostDefaults(context),
      body: JSON.stringify({
        nodeIds: requestIds,
      }),
    },
  );
  const contents = (await response.json()) as ContentResponse<{
    nodes: ContentItem[];
    sourceId: string;
  }>;
  throwContentResponseErrors(contents);

  // Store those objects into the cache and update our index to return
  await Promise.all(
    contents.result.nodes.map(async (item) => {
      const cached = await setContentItemCache(context, { id: item.id }, item);
      if (!cached) {
        throw new Error(`Failed to cache ${item.id}`);
      }

      nodeIndex[cached.id] = cached;
    }),
  );

  return Object.values(nodeIndex) as ContentItem[];
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

  const nodes = await getItems(context, { ids: [id] });
  const node = nodes.at(0);
  if (!node) {
    throw new Error(`node ${id} not found`);
  }

  return node;
};

export const getItemsIndex = (
  nodes: ContentItem[],
): Record<ContentItem["id"], ContentItem> =>
  nodes.reduce(
    (index, source) => {
      index[source.id] = source;
      return index;
    },
    {} as ReturnType<typeof getItemsIndex>,
  );

const staticHeaders = {};

const postRequestDefaults: Partial<RequestInit> = {
  method: "POST",
  headers: { ...staticHeaders, "Content-Type": "application/json" },
};
export const getPostDefaults = (
  context: Pick<GraphQLContext, "authentication">,
): Partial<RequestInit> => ({
  ...postRequestDefaults,
  headers: {
    ...postRequestDefaults.headers,
    ...getAuthorizationHeadersFromContext(context),
  },
});

const getRequestDefaults: Partial<RequestInit> = {
  method: "GET",
  headers: staticHeaders,
};
export const getGetDefaults = (
  context: Pick<GraphQLContext, "authentication">,
): Partial<RequestInit> => ({
  ...getRequestDefaults,
  headers: {
    ...getRequestDefaults.headers,
    ...getAuthorizationHeadersFromContext(context),
  },
});
