import { RequestContext, withRequestContext } from "../../../tests/utilities";
import {
  expectUnauthenticatedGraphQLResponse,
  postAnonymousGraphQLRequest,
  postCredentialedGraphQLRequest,
} from "../../../tests/graphql.utils";
import { print } from "graphql/index";
import gql from "graphql-tag";
import {
  ContentItem,
  ContentItemArgs,
  ContentItemsArgs,
} from "../../generated/types";
import { expectContentItem, ContentItemFields } from "./content.test";
import { expectGraphQLSuccessResponse } from "../../../tests/expectations/graphql";
import { mockItems as mockItems } from "./content.mock";

describe("content resolvers", () => {
  describe("item", () => {
    it("should return all data for a item given an id", async () => {
      const item = mockItems.at(0);
      if (!item) {
        throw new Error("item is undefined");
      }

      await withRequestContext(async (context) => {
        const response = await getContentItemResponse(
          postCredentialedGraphQLRequest,
          context,
          {
            id: item.id,
          },
        );

        expectGraphQLSuccessResponse(response);
        const responseItem: ContentItem = response.body.data.content.item;
        expect(responseItem.id).toBe(item.id);
        expectContentItem(responseItem);
      });
    });

    it("should throw an error if a item is not found for that id", async () => {
      await withRequestContext(async (context) => {
        const response = await getContentItemResponse(
          postCredentialedGraphQLRequest,
          context,
          {
            id: Math.random().toString(),
          },
        );

        expect(response.body.errors?.at(0)?.message).toMatch("not found");
      });
    });

    it.skip("should require authentication", async () => {
      await withRequestContext(async (context) => {
        const response = await getContentItemResponse(
          postAnonymousGraphQLRequest,
          context,
          {
            id: Math.random().toFixed(5),
          },
        );

        expectUnauthenticatedGraphQLResponse(response);
      });
    });
  });

  describe("items", () => {
    it("should return all data for a items given ids", async () => {
      await withRequestContext(async (context) => {
        const items = mockItems.slice(0, 3);
        if (!items) {
          throw new Error("items is undefined");
        }
        const ids = items.map(({ id }) => id);

        const response = await getResponse(
          postCredentialedGraphQLRequest,
          context,
          {
            ids,
          },
        );

        expectGraphQLSuccessResponse(response);
        const responseItems: ContentItem[] = response.body.data.content.items;
        responseItems.forEach((item) => {
          expect(ids).toContain(item.id);
          expectContentItem(item);
        });
      });
    });

    it.skip("should require authentication", async () => {
      await withRequestContext(async (context) => {
        const response = await getResponse(
          postAnonymousGraphQLRequest,
          context,
          {
            ids: [],
          },
        );

        expectUnauthenticatedGraphQLResponse(response);
      });
    });

    const getResponse = async (
      method: typeof postAnonymousGraphQLRequest,
      context: RequestContext,
      variables: ContentItemsArgs,
    ) => {
      return method(
        context,
        print(gql`
          query ContentItems($ids: [ID!]!) {
            content {
              items(ids: $ids) {
                ...ContentItemFields
              }
            }
          }
          ${ContentItemFields}
        `),
        variables,
      );
    };
  });
});

export const getContentItemResponse = async (
  method: typeof postAnonymousGraphQLRequest,
  context: RequestContext,
  variables: ContentItemArgs,
) => {
  return method(
    context,
    print(gql`
      query ContentItem($id: ID!) {
        content {
          item(id: $id) {
            ...ContentItemFields
          }
        }
      }
      ${ContentItemFields}
    `),
    variables,
  );
};
