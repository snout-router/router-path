import { NormalizeParam, Param } from "../../../src/main.js";
import { hasType } from "../../helpers.js";

describe("NormalizeParam", () => {
  it("should convert string types to Param types", () => {
    const a: Param<"a"> = {
      name: "a",
      exp: /./,
      parse: (match) => match,
      format: (arg) => arg,
    };

    const b: Param<"b"> = {
      name: "b",
      exp: /./,
      parse: (match) => match,
      format: (arg) => arg,
    };

    expect(hasType<NormalizeParam<"a">>(a)).toBeNull();
    expect(hasType<NormalizeParam<"b">>(b)).toBeNull();
  });

  it("should leave existing Param types unchanged", () => {
    const a: Param<"a", number> = {
      name: "a",
      exp: /./,
      parse: (match) => parseFloat(match),
      format: (arg) => String(arg),
    };

    const b: Param<"b", boolean> = {
      name: "b",
      exp: /./,
      parse: (match) => Boolean(match),
      format: (arg) => String(arg),
    };

    expect(hasType<NormalizeParam<typeof a>>(a)).toBeNull();
    expect(hasType<NormalizeParam<typeof b>>(b)).toBeNull();
  });

  it("should not lose parameter Name type information", () => {
    const a: Param<"a"> = {
      name: "a",
      exp: /./,
      parse: (match) => match,
      format: (arg) => arg,
    };

    const b: Param<"b"> = {
      name: "b",
      exp: /./,
      parse: (match) => match,
      format: (arg) => arg,
    };

    // @ts-expect-error should error because b does not have name "a"
    expect(hasType<NormalizeParam<typeof a>>(b)).toBeNull();
    // @ts-expect-error should error because a does not have name "b"
    expect(hasType<NormalizeParam<typeof b>>(a)).toBeNull();
  });

  it("should not lose parameter Arg type information", () => {
    const a1: Param<"a"> = {
      name: "a",
      exp: /./,
      parse: (match) => match,
      format: (arg) => arg,
    };

    const a2: Param<"a", number> = {
      name: "a",
      exp: /./,
      parse: (match) => parseFloat(match),
      format: (arg) => String(arg),
    };

    // @ts-expect-error should error because a2 does not use string arguments
    expect(hasType<NormalizeParam<typeof a1>>(a2)).toBeNull();
    // @ts-expect-error should error because a1 does not use number arguments
    expect(hasType<NormalizeParam<typeof a2>>(a1)).toBeNull();
  });

  it("should not accept non-parameter, non-string types", () => {
    // @ts-expect-error should not accept empty tuple type
    expect(hasType<NormalizeParam<[]>>([])).toBeNull();
  });
});
