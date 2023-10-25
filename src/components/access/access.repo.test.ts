import { AccessRepo, getAccessRepo } from "./access.repo";
import { expectAccessRecord } from "./access.test";
import { testIdentity } from "../../../tests/constants";
import { v4 as v4uuid } from "uuid";
import { AccessRecord } from "../../generated/types";
import { delay } from "../../utilities/timers";

const repo = getAccessRepo();

describe("releases repo", () => {
  it("should be an instance of ReleaseRepo", () => {
    expect(repo).toBeInstanceOf(AccessRepo);
  });

  describe("put", () => {
    it("should create or update the unique access record", async () => {
      const initialData: Omit<AccessRecord, "id" | "timestamp"> = {
        accessorId: testIdentity.id,
        objectId: Math.random().toFixed(5),
        objectType: "test-object",
        operation: "write",
      };

      const initialRecord = await repo.put(initialData);
      try {
        expectAccessRecord(initialRecord);
        expect(initialRecord.accessorId).toBe(initialData.accessorId);
        expect(initialRecord.objectId).toBe(initialData.objectId);
        expect(initialRecord.objectType).toBe(initialData.objectType);
        expect(initialRecord.operation).toBe(initialData.operation);

        // Force a small delay, or the timestamp won't always change.
        await delay(500);
        const updateData = {
          ...initialRecord,
          operation: "write-2",
        };
        const updatedRecord = await repo.put(updateData);
        expectAccessRecord(initialRecord);
        expect(updatedRecord.accessorId).toBe(initialRecord.accessorId);
        expect(updatedRecord.objectId).toBe(initialRecord.objectId);
        expect(updatedRecord.objectType).toBe(initialRecord.objectType);
        expect(updatedRecord.operation).toBe(updateData.operation);
        expect(updatedRecord.id).toBe(initialRecord.id);
        expect(updatedRecord.timestamp).not.toBe(initialRecord.timestamp);
      } finally {
        await repo.delete(initialRecord.id);
      }
    });

    it("should allow multiple records for the same object", async () => {
      const records: AccessRecord[] = [];
      const initialData: Omit<AccessRecord, "id" | "timestamp"> = {
        accessorId: testIdentity.id,
        objectId: Math.random().toFixed(5),
        objectType: "test-object",
        operation: "write",
      };

      const initialRecord = await repo.put(initialData);
      records.push(initialRecord);
      try {
        const bulkOperation = "read";
        const promises = new Array(5).fill(0).map(async () =>
          repo.put({
            ...initialData,
            operation: bulkOperation,
          }),
        );

        const readRecords = await Promise.all(promises);
        readRecords.forEach((record) => {
          expectAccessRecord(record);
          expect(record.id).not.toBe(initialRecord.id);
          expect(record.objectType).toBe(initialRecord.objectType);
          expect(record.objectId).toBe(initialRecord.objectId);
          expect(record.objectId).toBe(initialRecord.objectId);
          expect(record.operation).toBe(bulkOperation);
          records.push(record);
        });
      } finally {
        await Promise.all(records.map((record) => repo.delete(record.id)));
      }
    });
  });

  describe("get", () => {
    it("should return an access record by its id", async () => {
      const initialData: Omit<AccessRecord, "id" | "timestamp"> = {
        accessorId: testIdentity.id,
        objectId: Math.random().toFixed(5),
        objectType: "test-object",
        operation: "read",
      };
      const initialRecord = await repo.put(initialData);

      try {
        const record = await repo.get(initialRecord.id);
        expectAccessRecord(record);
        expect(record.id).toBe(initialRecord.id);
        expect(record.accessorId).toBe(initialData.accessorId);
        expect(record.objectId).toBe(initialData.objectId);
        expect(record.objectType).toBe(initialData.objectType);
        expect(record.operation).toBe(initialData.operation);
      } finally {
        await repo.delete(initialRecord.id);
      }
    });
  });

  describe("delete", () => {
    it("should delete an existing record returning the previous definition", async () => {
      const initialData: Omit<AccessRecord, "id" | "timestamp"> = {
        accessorId: testIdentity.id,
        objectId: Math.random().toFixed(5),
        objectType: "test-object",
        operation: "read",
      };
      const initialRecord = await repo.put(initialData);

      const deleted = await repo.delete(initialRecord.id);
      if (!deleted) {
        throw new Error("deleted is undefined");
      }
      expectAccessRecord(deleted);
      expect(deleted.id).toBe(initialRecord.id);
      expect(deleted.accessorId).toBe(initialData.accessorId);
      expect(deleted.objectId).toBe(initialData.objectId);
      expect(deleted.objectType).toBe(initialData.objectType);
      expect(deleted.operation).toBe(initialData.operation);
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
      const records: AccessRecord[] = [];

      // Tester Bennington's
      const vanillaIceCreamType = `ice-cream:vanilla:${now}`;
      const vanillaIceCream1Id = Math.random().toFixed(4);
      const vanillaIceCream1Purchase = await repo.put({
        accessorId: testIdentity.id,
        objectId: vanillaIceCream1Id,
        objectType: vanillaIceCreamType,
        operation: "purchase",
      });
      records.push(vanillaIceCream1Purchase);

      const vanillaIceCream1Consume = await repo.put({
        accessorId: testIdentity.id,
        objectId: vanillaIceCream1Id,
        objectType: vanillaIceCreamType,
        operation: "consume",
      });
      records.push(vanillaIceCream1Consume);

      const vanillaIceCream2Purchase = await repo.put({
        accessorId: testIdentity.id,
        objectId: Math.random().toFixed(4),
        objectType: vanillaIceCreamType,
        operation: "purchase",
      });
      records.push(vanillaIceCream2Purchase);

      // Turd Furgeson's
      const rockyRoadIceCreamPurchase = await repo.put({
        accessorId: "turd-furgason",
        objectId: Math.random().toFixed(4),
        objectType: `ice-cream:rock-road:${now}`,
        operation: "purchase",
      });
      records.push(rockyRoadIceCreamPurchase);

      try {
        const testersVanillaIceCreamRecords = await repo.query({
          accessorIds: testIdentity.id,
          objectTypes: vanillaIceCreamType,
          sortMethod: "timestamp asc",
        });
        // Vanilla 1 was purchased, and consumed.
        // Vanilla 2 is still in the fridge.
        expect(testersVanillaIceCreamRecords.length).toBe(3);
        expect(testersVanillaIceCreamRecords.at(0)?.id).toBe(
          vanillaIceCream1Purchase.id,
        );
        expect(testersVanillaIceCreamRecords.at(0)?.operation).toBe(
          vanillaIceCream1Purchase.operation,
        );
        expect(testersVanillaIceCreamRecords.at(1)?.id).toBe(
          vanillaIceCream1Consume.id,
        );
        expect(testersVanillaIceCreamRecords.at(1)?.operation).toBe(
          vanillaIceCream1Consume.operation,
        );
        expect(testersVanillaIceCreamRecords.at(2)?.id).toBe(
          vanillaIceCream2Purchase.id,
        );
        expect(testersVanillaIceCreamRecords.at(2)?.operation).toBe(
          vanillaIceCream2Purchase.operation,
        );

        const rockyRoadIceCreamRecords = await repo.query({
          accessorIds: rockyRoadIceCreamPurchase.accessorId,
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
