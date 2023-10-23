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
  ContentMutationsDeleteSavedObjectArgs,
  ContentItem,
  SavedRecord,
  ContentMutationsAddSavedItemArgs,
} from "../../../generated/types";
import { print } from "graphql/index";
import gql from "graphql-tag";
import { expectSavedRecord, SavedRecordFields } from "../../saved/saved.test";
import { testIdentity } from "../../../../tests/constants";
import { v4 } from "uuid";
import { getContentItemResponse } from "../content.resolvers.test";
import {
  expectForbiddenGraphQLResponse,
  expectGraphQLSuccessResponse,
} from "../../../../tests/expectations/graphql";
import { mockItems as mockItems } from "../content.mock";

describe("content access resolvers", () => {
  describe("addSavedItem", () => {
    it("should return a created or updated access record for an object", async () => {
      await withRequestContext(async (context) => {
        const id = v4();
        const response = await getSavedResponse(
          postCredentialedGraphQLRequest,
          context,
          {
            objectId: id,
          },
        );
        expectGraphQLSuccessResponse(response);

        const record: SavedRecord = response.body.data?.content.addSavedItem;
        try {
          expectSavedRecord(record);
          expect(record.objectId).toBe(id);
        } finally {
          await context.systemContext.savedRepo.delete(record.id);
        }
      });
    });

    it.skip("should reject anonymous access", async () => {
      await withRequestContext(async (context) => {
        const response = await getSavedResponse(
          postAnonymousGraphQLRequest,
          context,
          {
            objectId: "1234",
          },
        );
        expectUnauthenticatedGraphQLResponse(response);
      });
    });
  });

  describe("deleteSavedObject", () => {
    it("should delete a access record for an object and return it", async () => {
      await withRequestContext(async (context) => {
        // Create one
        const id = v4();
        const response = await getSavedResponse(
          postCredentialedGraphQLRequest,
          context,
          {
            objectId: id,
          },
        );
        expectGraphQLSuccessResponse(response);

        const record: SavedRecord = response.body.data?.content.addSavedItem;
        try {
          const response = await getResponse(
            postCredentialedGraphQLRequest,
            context,
            { id: record.id },
          );
          expectGraphQLSuccessResponse(response);
          const deleted: SavedRecord | undefined =
            response.body.data?.content.deleteSavedObject;
          expectSavedRecord(deleted);
          expect(deleted?.id).toBe(record.id);

          // Do it again
          const response2 = await getResponse(
            postCredentialedGraphQLRequest,
            context,
            { id: record.id },
          );
          expectGraphQLSuccessResponse(response2);
          const deleted2: SavedRecord | undefined =
            response2.body.data?.content.deleteSavedObject;
          expect(deleted2).toBeFalsy();
        } finally {
          await context.systemContext.savedRepo.delete(record.id);
        }
      });
    });

    it("should throw a forbidden error deleting another user's record", async () => {
      await withRequestContext(async (context) => {
        // Create one
        const id = v4();
        const saved = await context.systemContext.savedRepo.save({
          objectType: "ContentItem",
          createdBy: testIdentity.id + ":not-that",
          objectId: id,
        });

        try {
          const response = await getResponse(
            postCredentialedGraphQLRequest,
            context,
            {
              id: saved.id,
            },
          );
          expectForbiddenGraphQLResponse(response);
        } finally {
          await context.systemContext.savedRepo.delete(saved.id);
        }
      });
    });

    it.skip("should reject anonymous access", async () => {
      await withRequestContext(async (context) => {
        const response = await getResponse(
          postAnonymousGraphQLRequest,
          context,
          { id: Math.random().toFixed(3) },
        );
        expectUnauthenticatedGraphQLResponse(response);
      });
    });

    const getResponse = async (
      method: typeof postAnonymousGraphQLRequest,
      context: RequestContext,
      variables: ContentMutationsDeleteSavedObjectArgs,
    ) => {
      return method(
        context,
        print(gql`
          mutation ContentDeleteSourceSavedObject($id: ID!) {
            content {
              deleteSavedObject(id: $id) {
                ...SavedRecordFields
              }
            }
          }
          ${SavedRecordFields}
        `),
        variables,
      );
    };
  });

  describe("ContentItem", () => {
    describe("saved", () => {
      it("should include the saved record for the ContentItem", async () => {
        await withRequestContext(async (context) => {
          // Create one
          // Get some real ids
          const item = mockItems.at(0);
          if (!item) {
            throw new Error("item is undefined");
          }

          const saveResponse = await getSavedResponse(
            postCredentialedGraphQLRequest,
            context,
            {
              objectId: item.id,
            },
          );
          expectGraphQLSuccessResponse(saveResponse);

          const saved: SavedRecord =
            saveResponse.body.data?.content.addSavedItem;
          try {
            const getResponse = await getContentItemResponse(
              postCredentialedGraphQLRequest,
              context,
              {
                id: item.id,
              },
            );
            const responseItem: ContentItem | undefined =
              getResponse.body.data.content.item;
            expect(responseItem?.saved?.id).toBe(saved.id);
          } finally {
            await context.systemContext.savedRepo.delete(saved.id);
          }
        });
      });
    });
  });
});

const getSavedResponse = async (
  method: typeof postAnonymousGraphQLRequest,
  context: RequestContext,
  variables: ContentMutationsAddSavedItemArgs,
) => {
  return method(
    context,
    print(gql`
      mutation ContentAddSourceSavedObject($objectId: String!) {
        content {
          addSavedItem(objectId: $objectId) {
            ...SavedRecordFields
          }
        }
      }
      ${SavedRecordFields}
    `),
    variables,
  );
};
