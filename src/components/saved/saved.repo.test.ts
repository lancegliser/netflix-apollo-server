import { expectSavedRecord } from "./saved.test";
import { testIdentity } from "../../../tests/constants";
import { v4 as v4uuid } from "uuid";
import { SavedRecord } from "../../generated/types";
import { getSavedRepo, SavedRepo } from "./saved.repo";
import { delay } from "../../utilities/timers";

const repo = getSavedRepo();

describe("releases repo", () => {
  it("should be an instance of ReleaseRepo", () => {
    expect(repo).toBeInstanceOf(SavedRepo);
  });

  describe("save", () => {
    it("should create or update the unique access record", async () => {
      const initialData: Omit<SavedRecord, "id"> = {
        createdBy: testIdentity.id,
        createdAt: new Date().toISOString(),
        objectId: Math.random().toFixed(5),
        objectType: "test-object",
      };

      const initialRecord = await repo.save(initialData);
      try {
        expectSavedRecord(initialRecord);
        expect(initialRecord.createdBy).toBe(initialData.createdBy);
        expect(initialRecord.objectId).toBe(initialData.objectId);
        expect(initialRecord.objectType).toBe(initialData.objectType);

        // Force a small delay, or the timestamp won't always change.
        await delay(500);
        const updateData = {
          ...initialRecord,
        };
        const updatedRecord = await repo.save(updateData);
        expectSavedRecord(initialRecord);
        expect(updatedRecord.createdBy).toBe(initialRecord.createdBy);
        expect(updatedRecord.objectId).toBe(initialRecord.objectId);
        expect(updatedRecord.objectType).toBe(initialRecord.objectType);
        expect(updatedRecord.id).toBe(initialRecord.id);
      } finally {
        await repo.delete(initialRecord.id);
      }
    });
  });

  describe("get", () => {
    it("should return an access record by its id", async () => {
      const initialData: Omit<SavedRecord, "id"> = {
        createdBy: testIdentity.id,
        createdAt: new Date().toISOString(),
        objectId: Math.random().toFixed(5),
        objectType: "test-object",
      };
      const initialRecord = await repo.save(initialData);

      try {
        const record = await repo.get(initialRecord.id);
        expectSavedRecord(record);
        expect(record.id).toBe(initialRecord.id);
        expect(record.createdAt).toBe(initialData.createdAt);
        expect(record.createdBy).toBe(initialData.createdBy);
        expect(record.objectId).toBe(initialData.objectId);
        expect(record.objectType).toBe(initialData.objectType);
      } finally {
        await repo.delete(initialRecord.id);
      }
    });
  });

  describe("delete", () => {
    it("should delete an existing record returning the previous definition", async () => {
      const initialData: Omit<SavedRecord, "id" | "timestamp"> = {
        createdBy: testIdentity.id,
        createdAt: new Date().toISOString(),
        objectId: Math.random().toFixed(5),
        objectType: "test-object",
      };
      const initialRecord = await repo.save(initialData);

      const deleted = await repo.delete(initialRecord.id);
      if (!deleted) {
        throw new Error("deleted is undefined");
      }
      expectSavedRecord(deleted);
      expect(deleted.id).toBe(initialRecord.id);
      expect(deleted.createdBy).toBe(initialData.createdBy);
      expect(deleted.objectId).toBe(initialData.objectId);
      expect(deleted.objectType).toBe(initialData.objectType);
    });

    it("should return undefined without error when deleting a record that does not exist", async () => {
      // Don't create a new release
      const deleted = await repo.delete(v4uuid());
      expect(deleted).toBeFalsy();
    });
  });

  describe("query", () => {
    it("should return all records of the supplied types by the user", async () => {
      const now = new Date().toISOString();
      const records: SavedRecord[] = [];

      // Tester Bennington's
      const vanillaIceCreamType = `ice-cream:vanilla:${now}`;
      const vanillaIceCream1Id = Math.random().toFixed(4);
      const vanillaIceCream1Purchase = await repo.save({
        createdBy: testIdentity.id,
        objectId: vanillaIceCream1Id,
        objectType: vanillaIceCreamType,
      });
      records.push(vanillaIceCream1Purchase);

      const vanillaIceCream2Purchase = await repo.save({
        createdBy: testIdentity.id,
        objectId: Math.random().toFixed(4),
        objectType: vanillaIceCreamType,
      });
      records.push(vanillaIceCream2Purchase);

      // Turd Furgeson's
      const identity2Id = "turd-furgason";
      const rockyRoadIceCreamPurchase = await repo.save({
        createdBy: identity2Id,
        objectId: Math.random().toFixed(4),
        objectType: `ice-cream:rock-road:${now}`,
      });
      records.push(rockyRoadIceCreamPurchase);

      try {
        const testersVanillaIceCreamRecords = await repo.query({
          createdBys: testIdentity.id,
          objectTypes: vanillaIceCreamType,
          sortMethod: "created_at asc",
        });
        // Vanilla 1 was purchased, and consumed.
        // Vanilla 2 is still in the fridge.
        expect(testersVanillaIceCreamRecords.length).toBe(2);
        expect(testersVanillaIceCreamRecords.at(0)?.id).toBe(
          vanillaIceCream1Purchase.id,
        );
        expect(testersVanillaIceCreamRecords.at(1)?.id).toBe(
          vanillaIceCream2Purchase.id,
        );

        const rockyRoadIceCreamRecords = await repo.query({
          createdBys: identity2Id,
          objectTypes: rockyRoadIceCreamPurchase.objectType,
        });
        // Rocky road 2 is still in the fridge.
        expect(rockyRoadIceCreamRecords.length).toBe(1);
        expect(rockyRoadIceCreamRecords.at(0)?.id).toBe(
          rockyRoadIceCreamPurchase.id,
        );
      } finally {
        const promises = records.map((record) => repo.delete(record.id));
        await Promise.all(promises);
      }
    });
  });
});
