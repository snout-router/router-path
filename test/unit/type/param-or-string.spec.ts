import { Param, ParamOrString } from "../../../src/main.js";
import { hasType } from "../../helpers.js";

describe("ParamOrString", () => {
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
    expect(hasType<ParamOrString>(a)).toBeNull();
    expect(hasType<ParamOrString>(b)).toBeNull();
  });

  it("should accept strings", () => {
    expect(hasType<ParamOrString>("a")).toBeNull();
    expect(hasType<ParamOrString>("b")).toBeNull();
  });

  it("should not accept non-parameter, non-string types", () => {
    // @ts-expect-error numbers should not be accepted
    expect(hasType<ParamOrString>(1)).toBeNull();
  });
});
