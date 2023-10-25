import { AccessRecord, ContentAccessOperation } from "../../../generated/types";
import { GraphQLContext } from "../../context";

export const trackContentObjectAccess = async (
  objectType: "ContentItem" | "ContentItem-Test",
  objectId: string,
  operation: ContentAccessOperation,
  context: Pick<GraphQLContext, "authentication" | "accessRepo">,
): Promise<AccessRecord> => {
  if (!context.authentication?.identity?.id) {
    throw new Error("context.authentication?.identity?.id is undefined");
  }

  return context.accessRepo.put({
    accessorId: context.authentication.identity.id,
    objectId,
    objectType,
    operation,
  });
};

export const contentSourceAccessTrackingType = "ContentSource";
const separator = ":";
export const getContentSourceObjectAccessTrackingId = (objectId: string) =>
  objectId;
export const getContentSourceObjectAccessTrackingIdComponents = (
  id: string,
): {
  objectId: string;
} => {
  const [objectId] = id.split(separator);
  return { objectId };
};

export const getContentSourceLastReadAccess = async (
  objectId: string,
  operation: ContentAccessOperation,
  context: Pick<GraphQLContext, "authentication" | "accessRepo">,
): Promise<AccessRecord | undefined> => {
  if (!context.authentication?.identity?.id) {
    throw new Error("context.authentication?.identity?.id is undefined");
  }

  const results = await context.accessRepo.query({
    accessorIds: context.authentication.identity.id,
    objectIds: objectId,
    objectTypes: contentSourceAccessTrackingType,
    operations: ContentAccessOperation.Read,
    sortMethod: "timestamp desc",
    limit: 1,
  });
  return results.shift();
};

type ContentLatestReadAccessesOptions = {
  /** Access records to return. Default 20 */
  limit?: number;
};
export const getContentItemLatestReadAccesses = async (
  context: Pick<GraphQLContext, "authentication" | "accessRepo">,
  options?: ContentLatestReadAccessesOptions,
): Promise<Omit<AccessRecord, "id">[]> => {
  if (!context.authentication?.identity?.id) {
    throw new Error("context.authentication?.identity?.id is undefined");
  }

  return context.accessRepo.queryDistinctAccessObjects({
    accessorIds: context.authentication.identity.id,
    objectTypes: "ContentItem",
    operations: ContentAccessOperation.Read,
    sortMethod: "timestamp desc",
    limit: options?.limit || 20,
  });
};
