import { normalizeParam, Param } from "../../src/main";

describe("normalizeParam()", () => {
  it("should return Param objects unmodified", () => {
    const p1: Param<"p1"> = {
      name: "p1",
      exp: /.*/,
      parse: (match) => match,
      format: (arg) => arg,
    };

    expect(normalizeParam(p1)).toBe(p1);
  });

  it("should convert strings to simple route parameters", () => {
    const actual = normalizeParam("p1");

    expect(actual).toMatchObject({ name: "p1", exp: /([^/]+)/ });
    expect(actual.parse("x")).toBe("x");
    expect(actual.format("x")).toBe("x");
    expect(() => actual.format("")).toThrow('Empty parameter "p1"');
  });
});
