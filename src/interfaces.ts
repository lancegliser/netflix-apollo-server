import { AuthenticationIdentity, ICreated, IUpdated } from "./generated/types";

export type AuditingPropertiesUser = Pick<
  AuthenticationIdentity,
  "id" | "displayName" | "active"
>;

// Utility methods

export const setAuditingProperties = (
  object: ICreated & IUpdated,
  user: AuditingPropertiesUser,
): void => {
  setCreatedProperties(object, user);
  setUpdatedProperties(object, user);
};

export const getAuditingProperties = (
  object: ICreated & IUpdated,
  user: AuditingPropertiesUser,
): {
  createdAt: string;
  createdBy: string;
  updatedAt: string;
  updatedBy: string;
} => ({
  ...getCreatedProperties(object, user),
  ...getUpdatedProperties(user),
});

// Created
export const setCreatedProperties = (
  object: ICreated,
  user: AuditingPropertiesUser,
): void => {
  throwIfUserUndefined(user);

  const { createdAt, createdBy } = getCreatedProperties(object, user);
  object.createdAt = createdAt;
  object.createdBy = createdBy;
};

export const getCreatedProperties = (
  object: ICreated,
  user: AuditingPropertiesUser,
): {
  createdAt: string;
  createdBy: string;
} => {
  throwIfUserUndefined(user);

  return {
    createdAt: object.createdAt || new Date().toISOString(),
    createdBy: object.createdBy || user.id,
  };
};

// Updated
export const setUpdatedProperties = (
  object: IUpdated,
  user: AuditingPropertiesUser,
): void => {
  throwIfUserUndefined(user);

  const { updatedAt, updatedBy } = getUpdatedProperties(user);
  object.updatedAt = updatedAt;
  object.updatedBy = updatedBy;
};

export const getUpdatedProperties = (
  user: AuditingPropertiesUser,
): {
  updatedAt: string;
  updatedBy: string;
} => {
  throwIfUserUndefined(user);

  return {
    updatedAt: new Date().toISOString(),
    updatedBy: user.id,
  };
};

const throwIfUserUndefined = (user: AuditingPropertiesUser) => {
  if (!user.id) {
    throw new Error("user.id is undefined");
  }
};
