import { isValid } from "./validate.ts";

test("empty input", () => {
    expect(isValid(" ")).toEqual(false);
});