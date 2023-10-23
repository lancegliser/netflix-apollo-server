import { withGraphQLContext } from "../../../tests/utilities";
import { getItem, getItems } from "./content.utils";
import { expectContentItem } from "./content.test";
import { delay } from "../../utilities/timers";
import { mockItems as mockItems } from "./content.mock";

describe("content utils", () => {
  describe("getItems", () => {
    it("should return items by ids, cached on subsequent calls", async () => {
      // Get some real ids
      const sampleSize = 4;
      const ids = mockItems.slice(0, sampleSize + 1).map(({ id }) => id);
      if (!ids) {
        throw new Error("ids is undefined");
      }
      if (ids.length <= sampleSize) {
        throw new Error("Too few ids for sample size");
      }

      await withGraphQLContext(async (context) => {
        // Get the required execution context
        const firstLoads = await getItems(context, {
          ids: ids.slice(0, sampleSize - 1),
        });
        firstLoads.forEach(expectContentItem);

        const delayDuration = 1000;
        await delay(delayDuration);
        const secondLoads = await getItems(context, {
          ids: ids,
        });

        const firstId = ids[0];
        const firstitem = firstLoads.find(({ id }) => id === firstId);
        if (!firstitem) {
          throw new Error("lastitem is undefined");
        }
        const firstitemCachedAt = firstitem.cachedAt
          ? new Date(firstitem.cachedAt)
          : undefined;
        if (!firstitemCachedAt) {
          throw new Error("firstitemCachedAt is undefined");
        }

        const lastId = ids[ids.length - 1];
        const lastitem = secondLoads.find(({ id }) => id === lastId);
        if (!lastitem) {
          throw new Error("lastitem is undefined");
        }
        const lastitemCachedAt = lastitem.cachedAt
          ? new Date(lastitem.cachedAt)
          : undefined;
        if (!lastitemCachedAt) {
          throw new Error("lastitemCachedAt is undefined");
        }

        expect(
          lastitemCachedAt.getTime() - firstitemCachedAt.getTime(),
        ).toBeGreaterThanOrEqual(delayDuration);
      });
    });
  });

  describe("getItem", () => {
    it("should return item by id, cached on subsequent calls", async () => {
      const item = mockItems.at(0);
      if (!item) {
        throw new Error("item is undefined");
      }

      // Get some real ids
      await withGraphQLContext(async (context) => {
        // Get the required execution context
        const firstLoad = await getItem(context, { id: item.id });
        expectContentItem(firstLoad);

        const secondLoad = await getItem(context, { id: item.id });
        expect(secondLoad).toStrictEqual(firstLoad);
      });
    });

    it("should throw an error for a non-existent item id", async () => {
      await withGraphQLContext(async (context) => {
        await expect(() =>
          getItem(context, {
            id: Math.random().toFixed(3),
          }),
        ).rejects.toThrow("not found");
      });
    });
  });
});
