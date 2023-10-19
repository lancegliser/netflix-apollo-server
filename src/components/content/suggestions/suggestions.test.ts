import { print } from "graphql/index";
import gql from "graphql-tag";
import {
  ContentSuggestions,
  ContentSuggestionsItem,
  ContentSuggestionsSet,
  Maybe,
} from "../../../generated/types";
import {
  expectDisplayImage,
  expectDisplayName,
} from "../../../../tests/expectations/interfaces";
import { expectStringIfTruthy } from "../../../../tests/expectations";

describe("content suggestions", () => {
  it.skip("has to contain at least one test", () => {});
});

export const ContentSuggestionsFields = print(gql`
  fragment ContentSuggestionsFields on ContentSuggestions {
    dynamic {
      ...ContentSuggestionsSetFields
    }
    #    featured {
    #      ...ContentSuggestionsSetFields
    #    }
    #    promoted {
    #      ...ContentSuggestionsSetFields
    #    }
    recent {
      ...ContentSuggestionsSetFields
    }
    saved {
      ...ContentSuggestionsSetFields
    }
  }

  fragment ContentSuggestionsSetFields on ContentSuggestionsSet {
    displayName
    items {
      ...ContentSuggestionsSetItemFields
    }
  }

  fragment ContentSuggestionsSetItemFields on ContentSuggestionsItem {
    displayImageUrl
    preloaded
    primary
    secondary
  }
`);

export const expectContentSuggestions = (
  suggestions: Maybe<ContentSuggestions> | undefined,
) => {
  if (!suggestions) {
    throw new Error("suggestions is undefined");
  }

  expect(suggestions.dynamic.length).toBeGreaterThanOrEqual(1);
  suggestions.dynamic.forEach(expectContentSuggestionsSet);
  // expectContentSuggestionsSet(suggestions.featured);
  // expectContentSuggestionsSet(suggestions.promoted);
  expectContentSuggestionsSet(suggestions.recent);
  expectContentSuggestionsSet(suggestions.saved);
};

export const expectContentSuggestionsSet = (
  set: Maybe<ContentSuggestionsSet> | undefined,
) => {
  if (!set) {
    throw new Error("set is undefined");
  }

  expectDisplayName(set);
  set.items.forEach(expectContentSuggestionsItem);
};

export const expectContentSuggestionsSetPreloads = (
  set: Maybe<ContentSuggestionsSet> | undefined,
  options?: {
    preload?: number;
    preloadLast?: boolean;
  },
) => {
  if (!set) {
    throw new Error("set is undefined");
  }

  if (options?.preload) {
    set.items.forEach((item, index) => {
      if (index >= options.preload!) {
        return;
      }
      expect(item.preloaded).toBeTruthy();
    });
  }

  if (options?.preloadLast && set.items.length) {
    expect(set.items[set.items.length - 1].preloaded).toBeTruthy();
  }
};

export const expectContentSuggestionsItem = (
  item: Maybe<ContentSuggestionsItem> | undefined,
) => {
  if (!item) {
    throw new Error("item is undefined");
  }

  if (item.displayImageUrl) {
    expectDisplayImage(item);
  }
  // expect(item.format).toBeTruthy();
  expect(typeof item.preloaded === "boolean").toBeTruthy();
  // TODO this might have be changed when we figure out tag vs identifier strings
  expectStringIfTruthy(item.primary);
  expectStringIfTruthy(item.secondary);
  expect(item.primary || item.secondary).toBeTruthy();
};
