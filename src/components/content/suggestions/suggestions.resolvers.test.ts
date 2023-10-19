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
  ContentSuggestions,
  ContentSuggestionsArgs,
  ContentSuggestionsSet,
} from "../../../generated/types";
import { print } from "graphql/index";
import gql from "graphql-tag";
import {
  expectContentSuggestions,
  expectContentSuggestionsSetPreloads,
  ContentSuggestionsFields,
} from "./suggestions.test";
import { expectGraphQLSuccessResponse } from "../../../../tests/expectations/graphql";

describe("content suggestion resolvers", () => {
  describe("suggestions", () => {
    it("should include suggestions from various sources", async () => {
      await withRequestContext(async (context) => {
        const limit = 4;
        const preload = limit - 2;
        const preloadLast = true;
        const response = await getResponse(
          postCredentialedGraphQLRequest,
          context,
          { limit, preload, preloadLast },
        );

        expectGraphQLSuccessResponse(response);

        const suggestions: ContentSuggestions =
          response.body.data.content.suggestions;

        expectContentSuggestions(suggestions);

        const expectOptionedSuggestionSet = (set: ContentSuggestionsSet) => {
          expect(set.items.length).toBeLessThanOrEqual(limit);
          expectContentSuggestionsSetPreloads(set, { preload, preloadLast });
        };

        suggestions.dynamic.forEach(expectOptionedSuggestionSet);
        // expect(suggestions.featured.items.length).toBeLessThanOrEqual(limit);
        // expect(suggestions.promoted.items.length).toBeLessThanOrEqual(limit);
        expectOptionedSuggestionSet(suggestions.recent);
        expectOptionedSuggestionSet(suggestions.saved);
      });
    }, 10000);

    it("should reject anonymous access", async () => {
      await withRequestContext(async (context) => {
        const response = await getResponse(
          postAnonymousGraphQLRequest,
          context,
          { limit: 2 },
        );
        expectUnauthenticatedGraphQLResponse(response);
      });
    });

    const getResponse = async (
      method: typeof postAnonymousGraphQLRequest,
      context: RequestContext,
      variables: ContentSuggestionsArgs,
    ) => {
      return method(
        context,
        print(gql`
          query ContentSuggestions(
            $limit: Int
            $preload: Int
            $preloadLast: Boolean
          ) {
            content {
              suggestions(
                limit: $limit
                preload: $preload
                preloadLast: $preloadLast
              ) {
                ...ContentSuggestionsFields
              }
            }
          }
          ${ContentSuggestionsFields}
        `),
        variables,
      );
    };
  });
});
