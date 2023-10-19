import { print } from "graphql/index";
import gql from "graphql-tag";
import { v4 } from "uuid";
import { expectSavedRecord, SavedRecordFields } from "../saved/saved.test";
import {
  expectDateISOString,
  expectStringIfTruthy,
} from "../../../tests/expectations";
import { ContentItem, ContentItemFormat } from "../../generated/types";
import { expectDisplayName } from "../../../tests/expectations/interfaces";

describe("content", () => {
  it.skip("has to contain at least one test", () => {});
});

export const ContentItemFields = print(gql`
  fragment ContentItemFields on ContentItem {
    id
    cachedAt
    displayName
    displayImageUrl
    saved {
      ...SavedRecordFields
    }
  }
  ${SavedRecordFields}
`);

export const expectContentItem = (item: ContentItem) => {
  expect(item.id).toBeTruthy();
  expectDisplayName(item);
  if (item.cachedAt) {
    expectDateISOString(item.cachedAt);
  }
  expect(item.format).toBeTruthy();
  expectStringIfTruthy(item.displayImageUrl);
  if (item.saved) {
    expectSavedRecord(item.saved);
  }
};

export const generateContentItem = (
  data?: Partial<ContentItem>,
): ContentItem => ({
  cachedAt: undefined,
  displayImageUrl: undefined,
  displayName: new Date().toLocaleString(),
  id: "generated/" + v4(),
  saved: undefined,
  format: ContentItemFormat.Movie,
  ...data,
});
