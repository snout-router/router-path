import { AnyParam, Param } from "../../../src/main.js";
import { hasType } from "../../helpers.js";

describe("AnyParam", () => {
  const a: Param<"a"> = {
    name: "a",
    exp: /./,
    parse: (match) => match,
    format: (arg) => arg,
  };

  const b: Param<"b", number> = {
    name: "b",
    exp: /./,
    parse: (match) => parseFloat(match),
    format: (arg) => String(arg),
  };

  it("should accept any parameter", () => {
    expect(hasType<AnyParam>(a)).toBeNull();
    expect(hasType<AnyParam>(b)).toBeNull();
  });

  it("should not accept non-parameter types", () => {
    // @ts-expect-error should not accept strings
    expect(hasType<AnyParam>("a")).toBeNull();
  });
});
