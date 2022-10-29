import * as index from "../../src/index.js";
import { normalizeParam, path } from "../../src/main.js";

describe("module index", () => {
  it("should provide access to normalizeParam()", () => {
    expect(index.normalizeParam).toBe(normalizeParam);
  });

  it("should provide access to path()", () => {
    expect(index.path).toBe(path);
  });
});
