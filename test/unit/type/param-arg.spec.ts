import { Param, ParamArg } from "../../../src/main";
import { hasType } from "../../helpers";

describe("ParamArg", () => {
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

  it("should accept the Arg type of a Param", () => {
    expect(hasType<ParamArg<typeof a>>("x")).toBeNull();
    expect(hasType<ParamArg<typeof a>>("y")).toBeNull();
    expect(hasType<ParamArg<typeof b>>(1)).toBeNull();
    expect(hasType<ParamArg<typeof b>>(1.1)).toBeNull();
  });

  it("should not accept types other than the Arg type of a Param", () => {
    // @ts-expect-error string param should not accept numbers
    expect(hasType<ParamArg<typeof a>>(1)).toBeNull();
    // @ts-expect-error number param should not accept strings
    expect(hasType<ParamArg<typeof b>>("x")).toBeNull();
  });

  it("should not support non-Param types", () => {
    // @ts-expect-error should not accept "p" string literal type
    expect(hasType<ParamArg<"p">>("x")).toBeNull();
  });
});
