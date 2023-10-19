import {
  deleteContentItemCache,
  getContentItemCache,
  getContentItemsCacheIndex,
  getContentItemsCacheIndexMisses,
  ContentItemCacheIndex,
  setContentItemCache,
} from "./cache.utils";
import { withGraphQLContext } from "../../../../tests/utilities";
import { expectContentItem, generateContentItem } from "../content.test";
import { v4 } from "uuid";
import { expectDateISOString } from "../../../../tests/expectations";

describe("content cache utils", () => {
  describe("setContentItemCache", () => {
    it("should set the cache", async () => {
      await withGraphQLContext(async (context) => {
        const generated = await generateContentItem();
        const ids = { id: generated.id };
        const cached = await setContentItemCache(context, ids, generated);
        expectContentItem(cached!);
        expectDateISOString(cached!.cachedAt as string);

        await deleteContentItemCache(context, ids);
      });
    });

    it.skip("should update the cache", () => {});
  });

  describe("getContentItemCache", () => {
    it("should read the cache", async () => {
      await withGraphQLContext(async (context) => {
        const generated = await generateContentItem();
        const ids = { id: generated.id };
        const cached = await setContentItemCache(context, ids, generated);

        const read = await getContentItemCache(context, ids);
        expect(read).toStrictEqual(cached);

        await deleteContentItemCache(context, ids);
      });
    });
  });

  describe("deleteContentItemCache", () => {
    it("should clear the cache and the return the object if present", async () => {
      await withGraphQLContext(async (context) => {
        const generated = await generateContentItem();
        const ids = { id: generated.id };
        const cached = await setContentItemCache(context, ids, generated);

        const deleted1 = await deleteContentItemCache(context, ids);
        expect(deleted1).toStrictEqual(cached);

        const deleted2 = await deleteContentItemCache(context, ids);
        expect(deleted2).toBe(undefined);
      });
    });
  });

  describe("getContentItemCaches", () => {
    it.skip("should return all cached nodes or undefined indexed by source then id", () => {});
  });

  describe("getContentItemsCacheIndex", () => {
    it("should return a cache index", async () => {
      await withGraphQLContext(async (context) => {
        const node1Id = v4();
        const node1 = await setContentItemCache(
          context,
          { id: node1Id },
          generateContentItem({ id: node1Id }),
        );

        const node2Id = v4();
        const node2 = await setContentItemCache(
          context,
          { id: node2Id },
          generateContentItem({ id: node2Id }),
        );

        try {
          const missedId1 = v4();
          const missedId2 = v4();
          const index = await getContentItemsCacheIndex(context, [
            { id: node1.id },
            { id: missedId1 },
            { id: missedId2 },
            { id: node2.id },
          ]);

          expect(index[node1Id]).toStrictEqual(node1);
          expect(index[missedId1]).toBeUndefined();
          expect(index[node2Id]).toStrictEqual(node2);
          expect(index[missedId2]).toBeUndefined();
        } finally {
          await deleteContentItemCache(context, { id: node1.id });
          await deleteContentItemCache(context, { id: node2.id });
        }
      });
    });
  });

  describe("getContentItemsCacheIndexMisses", () => {
    it("should return ids only for nodes not defined", () => {
      const id1 = v4();
      const id2 = v4();
      const id3 = v4();
      const index: ContentItemCacheIndex = {
        [id1]: generateContentItem({ id: id1 }),
        [id2]: undefined,
      };

      const cacheMisses = getContentItemsCacheIndexMisses(index);
      expect(cacheMisses).toStrictEqual([{ id: id2 }, { id: id3 }]);
    });
  });
});
