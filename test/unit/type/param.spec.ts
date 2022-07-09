import { Param } from "../../../src/main";

describe("Param", () => {
  it("should not allow any properties to be modified", () => {
    const a: Param<"a"> = {
      name: "a",
      exp: /./,
      parse: (match) => match,
      format: (arg) => arg,
    };
    const exp = /.*/;
    const fn = (x: string): string => x;

    // @ts-expect-error should not be able to modify name
    expect((a.name = "a")).toBe("a");
    // @ts-expect-error should not be able to modify exp
    expect((a.exp = exp)).toBe(exp);
    // @ts-expect-error should not be able to modify parse
    expect((a.parse = fn)).toBe(fn);
    // @ts-expect-error should not be able to modify format
    expect((a.format = fn)).toBe(fn);
  });
});
