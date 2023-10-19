import { timestampWithoutValuesFormatter } from "./postgres";

describe("config postgres", () => {
  describe("timestampWithoutValuesFormatter", () => {
    it("should ensure all values end with 'Z'", () => {
      // Note the lack of ending 'Z'
      expect(timestampWithoutValuesFormatter("2023-03-30 21:03:15.563")).toBe(
        "2023-03-30T21:03:15.563Z",
      );
    });

    it("should include a 'T' separator for time components", () => {
      // Note the empty space between date and time
      expect(timestampWithoutValuesFormatter("2023-03-30 21:03:15.562")).toBe(
        "2023-03-30T21:03:15.562Z",
      );
    });

    it("should provide at least 3 digits of fraction second precisions", () => {
      // (Note the lack of ending 3rd 0 and Z
      expect(timestampWithoutValuesFormatter("2023-03-30 21:03:15.56")).toBe(
        "2023-03-30T21:03:15.560Z",
      );
    });
  });
});
