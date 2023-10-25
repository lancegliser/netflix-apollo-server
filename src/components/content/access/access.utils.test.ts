import {
  getContentItemLatestReadAccesses,
  trackContentObjectAccess,
} from "./access.utils";
import { withGraphQLContext } from "../../../../tests/utilities";
import { AccessRecord, ContentAccessOperation } from "../../../generated/types";

describe("content utils", () => {
  describe("getContentItemLatestReadAccesses", () => {
    it("should return recent accesses for a item", async () => {
      await withGraphQLContext(async (context) => {
        const records: AccessRecord[] = await Promise.all(
          new Array(3)
            .fill(0)
            .map(() =>
              trackContentObjectAccess(
                "ContentItem-Test",
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
