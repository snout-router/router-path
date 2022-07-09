import { path } from "../../../src/main";

describe("PathPattern", () => {
  it("should not allow any properties to be modified", () => {
    const a = path`/a`;
    const match = (_: string): undefined => undefined;
    const test = (_: string): false => false;
    const build = (_: Record<string, unknown>): string => "";

    // @ts-expect-error should not be able to modify match
    expect((a.match = match)).toBe(match);
    // @ts-expect-error should not be able to modify test
    expect((a.test = test)).toBe(test);
    // @ts-expect-error should not be able to modify build
    expect((a.build = build)).toBe(build);
  });
});
