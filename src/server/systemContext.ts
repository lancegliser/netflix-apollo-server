import { Application } from "express";
import { Logger } from "winston";
import logger from "./logger";
import { AccessRepo, getAccessRepo } from "../components/access/access.repo";
import { getSavedRepo, SavedRepo } from "../components/saved/saved.repo";

/** Defines the internal repos and library instances that are required during bootstrap */
export interface SystemContext {
  logger: Logger;
  accessRepo: AccessRepo;
  savedRepo: SavedRepo;
}

export const useSystemContext = (app: Application): void => {
  app.use((req, res, next) => {
    req.locals ||= {};
    req.locals.system = getSystemContext();
    next();
  });
};

/** Provides the internal repos and library instances that are required during bootstrap */
export const getSystemContext = async (): Promise<SystemContext> => {
  // const db = await getDb();
  return {
    logger,
    accessRepo: getAccessRepo(),
    savedRepo: getSavedRepo(),
  };
};
