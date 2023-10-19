import {
  withGraphQLContext,
  withRequestContext,
} from "../../../tests/utilities";
import { getItem, getItems } from "./content.utils";
import { expectContentItem } from "./content.test";
import { delay } from "../../utilities/timers";

describe("content utils", () => {
  describe("getNodes", () => {
    it("should return nodes by ids, cached on subsequent calls", async () => {
      // Get some real ids
      await withGraphQLContext(async (context) => {
        // TODO generate some?
        // const sampleSize = 4;
        // const ids = connectivity.entities
        //   .slice(0, sampleSize)
        //   .map(({ entity }) => entity);

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

        secondLoads.slice(0, sampleSize - 1).forEach((node) => {
          const firstLoadNode = firstLoads.find(({ id }) => id === node.id);
          expect(node).toStrictEqual(firstLoadNode);
        });

        const firstId = ids[0];
        const firstNode = secondLoads.find(({ id }) => id === firstId);
        if (!firstNode) {
          throw new Error("lastNode is undefined");
        }
        const firstNodeCachedAt = firstNode.cachedAt
          ? new Date(firstNode.cachedAt)
          : undefined;
        if (!firstNodeCachedAt) {
          throw new Error("firstNodeCachedAt is undefined");
        }

        const lastId = ids[ids.length - 1];
        const lastNode = secondLoads.find(({ id }) => id === lastId);
        if (!lastNode) {
          throw new Error("lastNode is undefined");
        }
        const lastNodeCachedAt = lastNode.cachedAt
          ? new Date(lastNode.cachedAt)
          : undefined;
        if (!lastNodeCachedAt) {
          throw new Error("lastNodeCachedAt is undefined");
        }

        expect(
          lastNodeCachedAt.getTime() - firstNodeCachedAt.getTime(),
        ).toBeGreaterThanOrEqual(delayDuration);
      });
    });
  });

  describe("getNode", () => {
    it("should return node by id, cached on subsequent calls", async () => {
      // Get some real ids
      await withGraphQLContext(async (context) => {
        // Get the required execution context
        const firstLoad = await getItem(context, ids);
        expectContentItem(firstLoad);

        const secondLoad = await getItem(context, ids);
        expect(secondLoad).toStrictEqual(firstLoad);
      });
    });

    it("should throw an error for a non-existent node id", async () => {
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
