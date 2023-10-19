import {
  getContentItemLatestReadAccesses,
  getContentSourceLastReadAccess,
  contentSourceAccessTrackingType,
  trackContentObjectAccess,
} from "./access.utils";
import { withGraphQLContext } from "../../../../tests/utilities";
import {
  AccessRecord,
  ContentAccessOperation,
  ContentAccessSourceObjectType,
} from "../../../generated/types";
import { delay } from "../../../utilities/timers";

describe("content utils", () => {
  describe("getContentSourceLastReadAccess", () => {
    it("should return the access record for a source", async () => {
      await withGraphQLContext(async (context) => {
        const sourceId = "0";
        const records: AccessRecord[] = [
          await trackContentObjectAccess(
            contentSourceAccessTrackingType,
            sourceId,
            ContentAccessOperation.Read,
            context,
          ),
        ];
        await delay(500);
        records.push(
          await trackContentObjectAccess(
            contentSourceAccessTrackingType,
            sourceId,
            ContentAccessOperation.Read,
            context,
          ),
        );
        expect(records.length).toBe(2);

        try {
          const access = await getContentSourceLastReadAccess(
            sourceId,
            ContentAccessOperation.Read,
            context,
          );
          expect(access).toStrictEqual(records.at(records.length - 1));
        } finally {
          await Promise.all(
            records.map((record) => context.accessRepo.delete(record.id)),
          );
        }
      });
    });

    it("should return undefined if the source has access record for the accessor", async () => {
      await withGraphQLContext(async (context) => {
        const access = await getContentSourceLastReadAccess(
          Math.random().toFixed(4),
          ContentAccessOperation.Read,
          context,
        );
        expect(access).toBeFalsy();
      });
    });
  });

  describe("getContentItemLatestReadAccesses", () => {
    it("should return recent accesses for a node", async () => {
      await withGraphQLContext(async (context) => {
        const records: AccessRecord[] = await Promise.all(
          new Array(3)
            .fill(0)
            .map(() =>
              trackContentObjectAccess(
                ContentAccessSourceObjectType.ContentItem,
                Math.random().toFixed(4),
                ContentAccessOperation.Read,
                context,
              ),
            ),
        );

        try {
          const accesses = await getContentItemLatestReadAccesses(context);
          expect(accesses.length).toBe(records.length);
        } finally {
          await Promise.all(
            records.map((record) => context.accessRepo.delete(record.id)),
          );
        }
      });
    });

    it("should return an empty array if no access records are found", async () => {
      await withGraphQLContext(async (context) => {
        const accesses = await getContentItemLatestReadAccesses(context);
        expect(accesses.length).toBe(0);
      });
    });
  });
});
