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

describe("content resolvers", () => {
  describe("node", () => {
    it("should all data for a node given an id", async () => {
      await withRequestContext(async (context) => {
        const response = await getContentItemResponse(
          postCredentialedGraphQLRequest,
          context,
          {
            id, // TODO
          },
        );

        expectGraphQLSuccessResponse(response);
        const node: ContentItem = response.body.data.content.node;
        expect(node.id).toBe(id);
        expectContentItem(node);
      });
    });

    it("should throw an error if a node is not found for that id", async () => {
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

    it("should require authentication", async () => {
      await withRequestContext(async (context) => {
        const response = await getContentItemResponse(
          postAnonymousGraphQLRequest,
          context,
          {
            id: "",
          },
        );

        expectUnauthenticatedGraphQLResponse(response);
      });
    });
  });

  describe("nodes", () => {
    it("should return all data for a nodes given ids", async () => {
      await withRequestContext(async (context) => {
        const response = await getResponse(
          postCredentialedGraphQLRequest,
          context,
          {
            ids, // TODO
          },
        );

        expectGraphQLSuccessResponse(response);
        const nodes: ContentItem[] = response.body.data.content.nodes;
        nodes.forEach((node) => {
          expect(ids).toContain(node.id);
          expectContentItem(node);
        });
      });
    });

    it("should require authentication", async () => {
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
              nodes(ids: $ids) {
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
          node(id: $id) {
            ...ContentItemFields
          }
        }
      }
      ${ContentItemFields}
    `),
    variables,
  );
};
