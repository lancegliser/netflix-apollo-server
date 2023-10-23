import { SavedRecord } from "../../../generated/types";
import { GraphQLContext } from "../../context";
import { ForbiddenError } from "../../../utilities/graphqlErrors";
import { DatabaseNotFoundError } from "../../../utilities/postgres";
import { getCreatedProperties } from "../../../interfaces";

export const addContentSavedObject = async (
  context: Pick<GraphQLContext, "authentication" | "savedRepo">,
  objectId: string,
): Promise<SavedRecord> => {
  if (!context.authentication?.identity?.id) {
    throw new Error("context.authentication?.identity?.id is undefined");
  }

  return context.savedRepo.save({
    ...getCreatedProperties({}, context.authentication.identity),
    objectType: "ContentItem",
    objectId,
  });
};

export const getContentSavedObject = async (
  context: Pick<GraphQLContext, "authentication" | "savedRepo">,
  objectId: string,
): Promise<SavedRecord | null> => {
  if (!context.authentication?.identity?.id) {
    throw new Error("context.authentication?.identity?.id is undefined");
  }

  const results = await context.savedRepo.query({
    createdBys: context.authentication.identity.id,
    objectIds: objectId,
  });
  return results.shift() || null;
};

export const deleteContentSavedObject = async (
  context: Pick<GraphQLContext, "authentication" | "savedRepo">,
  id: string,
): Promise<SavedRecord | null> => {
  try {
    const saved = await context.savedRepo.get(id);
    if (saved.createdBy !== context.authentication?.identity?.id) {
      throw new ForbiddenError(`Delete forbidden for id ${saved.id}`);
    }

    const deleted = await context.savedRepo.delete(id);
    return deleted || null;
  } catch (reason) {
    if (reason instanceof DatabaseNotFoundError) {
      return null;
    }
    throw reason;
  }
};
