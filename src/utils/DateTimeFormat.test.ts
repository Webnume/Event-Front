import { formatDate, formatTime } from "./DateTimeFormat";

describe("DateTimeFormat", () => {
  describe("formatDate", () => {
    it("formats date", () => {
      const date = formatDate("2021-01-01T00:00:00.000Z");
      expect(date).toEqual("1 janvier");
    });
    it("formats date with year", () => {
      const date = formatDate("2021-01-01T00:00:00.000Z", true);
      expect(date).toEqual("1 janvier 2021");
    });
  });
  describe("formatTime", () => {
    const dateTime = new Date();
    it("formats time", () => {
      const time = formatTime(dateTime.toString());
      expect(time).toEqual(time);
    });
  });
});
