import { AccessRecord, Maybe } from "../../generated/types";
import { print } from "graphql/index";
import gql from "graphql-tag";
import { expectDateISOString } from "../../../tests/expectations";

describe("access", () => {
  it.skip("must contain at least one test", () => {});
});

export const AccessRecordFields = print(gql`
  fragment AccessRecordFields on AccessRecord {
    id
    accessorId
    objectType
    objectId
    operation
    timestamp
  }
`);

export const expectAccessRecord = (access: Maybe<AccessRecord> | undefined) => {
  if (!access) {
    throw new Error("access is undefined");
  }

  expect(access.id).toBeTruthy();
  expect(access.accessorId).toBeTruthy();
  expect(access.objectType).toBeTruthy();
  expect(access.objectId).toBeTruthy();
  expect(access.operation).toBeTruthy();
  expectDateISOString(access.timestamp);
};
