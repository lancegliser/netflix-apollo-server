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
  ContentAccessSourceObjectType,
  ContentMutationsTrackSourceAccessArgs,
  ContentMutationsTrackSourceObjectAccessArgs,
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
  describe("trackSourceAccess", () => {
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
          response.body.data?.content.trackSourceAccess;
        try {
          expectAccessRecord(record);
          expect(record.objectId).toBe(id);
        } finally {
          await context.systemContext.accessRepo.delete(record.id);
        }
      });
    });

    it("should reject anonymous access", async () => {
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
      variables: ContentMutationsTrackSourceAccessArgs,
    ) => {
      return method(
        context,
        print(gql`
          mutation ContentTrackSourceAccess(
            $objectId: String!
            $operation: ContentAccessOperation!
          ) {
            content {
              trackSourceAccess(objectId: $objectId, operation: $operation) {
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

  describe("trackSourceObjectAccess", () => {
    it("should return a created or updated access record for an object", async () => {
      await withRequestContext(async (context) => {
        const sourceId = "0";
        const id = Math.random().toFixed(4);
        const response = await getResponse(
          postCredentialedGraphQLRequest,
          context,
          {
            sourceId,
            objectId: id,
            objectType: ContentAccessSourceObjectType.ContentItem,
            operation: ContentAccessOperation.Read,
          },
        );
        expectGraphQLSuccessResponse(response);

        const record: AccessRecord =
          response.body.data?.content.trackSourceObjectAccess;
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

    it("should reject anonymous access", async () => {
      await withRequestContext(async (context) => {
        const response = await getResponse(
          postAnonymousGraphQLRequest,
          context,
          {
            sourceId: "0",
            objectId: "1234",
            objectType: ContentAccessSourceObjectType.ContentItem,
            operation: ContentAccessOperation.Read,
          },
        );
        expectUnauthenticatedGraphQLResponse(response);
      });
    });

    const getResponse = async (
      method: typeof postAnonymousGraphQLRequest,
      context: RequestContext,
      variables: ContentMutationsTrackSourceObjectAccessArgs,
    ) => {
      return method(
        context,
        print(gql`
          mutation ContentTrackSourceObjectAccess(
            $sourceId: String!
            $objectType: ContentAccessSourceObjectType!
            $objectId: String!
            $operation: ContentAccessOperation!
          ) {
            content {
              trackSourceObjectAccess(
                sourceId: $sourceId
                objectType: $objectType
                objectId: $objectId
                operation: $operation
              ) {
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
