import { Maybe, SavedRecord } from "../../generated/types";
import { print } from "graphql/index";
import gql from "graphql-tag";
import { expectCreatedProperties } from "../../../tests/expectations/interfaces";

describe("saved", () => {
  it.skip("must contain at least one test", () => {});
});

export const SavedRecordFields = print(gql`
  fragment SavedRecordFields on SavedRecord {
    id
    createdAt
    createdBy
    objectType
    objectId
  }
`);

export const expectSavedRecord = (saved: Maybe<SavedRecord> | undefined) => {
  if (!saved) {
    throw new Error("saved is undefined");
  }

  expectCreatedProperties(saved);
  expect(saved.id).toBeTruthy();
  expect(saved.objectType).toBeTruthy();
  expect(saved.objectId).toBeTruthy();
};
