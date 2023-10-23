import {
  RequestContext,
  withRequestContext,
} from "../../../../tests/utilities";
import {
  expectUnauthenticatedGraphQLResponse,
  postAnonymousGraphQLRequest,
  postCredentialedGraphQLRequest,
} from "../../../../tests/graphql.utils";
import {
  AccessRecord,
  ContentAccessOperation,
  ContentMutationsTrackItemAccessArgs,
} from "../../../generated/types";
import {
  AccessRecordFields,
  expectAccessRecord,
} from "../../access/access.test";
import { print } from "graphql/index";
import gql from "graphql-tag";
import { getContentSourceObjectAccessTrackingId } from "./access.utils";
import { expectGraphQLSuccessResponse } from "../../../../tests/expectations/graphql";

describe("content access resolvers", () => {
  describe("trackItemAccess", () => {
    it("should return a created or updated access record for an object", async () => {
      await withRequestContext(async (context) => {
        const id = Math.random().toFixed(4);
        const response = await getResponse(
          postCredentialedGraphQLRequest,
          context,
          {
            objectId: id,
            operation: ContentAccessOperation.Read,
          },
        );
        expectGraphQLSuccessResponse(response);

        const record: AccessRecord =
          response.body.data?.content.trackItemAccess;
        try {
          expectAccessRecord(record);
          expect(record.objectId).toBe(
            getContentSourceObjectAccessTrackingId(id),
          );
        } finally {
          await context.systemContext.accessRepo.delete(record.id);
        }
      });
    });

    it.skip("should reject anonymous access", async () => {
      await withRequestContext(async (context) => {
        const response = await getResponse(
          postAnonymousGraphQLRequest,
          context,
          {
            objectId: "1234",
            operation: ContentAccessOperation.Read,
          },
        );
        expectUnauthenticatedGraphQLResponse(response);
      });
    });

    const getResponse = async (
      method: typeof postAnonymousGraphQLRequest,
      context: RequestContext,
      variables: ContentMutationsTrackItemAccessArgs,
    ) => {
      return method(
        context,
        print(gql`
          mutation ContenttrackItemAccess(
            $objectId: String!
            $operation: ContentAccessOperation!
          ) {
            content {
              trackItemAccess(objectId: $objectId, operation: $operation) {
                ...AccessRecordFields
              }
            }
          }
          ${AccessRecordFields}
        `),
        variables,
      );
    };
  });
});
