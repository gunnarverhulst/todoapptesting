import { isValid } from "./validate.ts";

test("whitespace input", () => {
    expect(isValid(" ")).toEqual(false);
});

test("emtpy input", () => {
    expect(isValid("")).toEqual(false);
});

test("valid text input", () => {
    expect(isValid("text")).toEqual(true);
});

test("more than 100 characters input", () => {
    expect(isValid(Array(100).fill('a').join(''))).toEqual(false);
});

test("more than 100 characters input", () => {
    expect(isValid(Array(101).fill('a').join(''))).toEqual(false);
});

test("more than 100 characters input", () => {
    expect(isValid(Array(99).fill('a').join(''))).toEqual(true);
});

test.each([
    ["", false],
    [" ", false],
    ["2", true],
    [createArray(99), true],
    [createArray(100), false],
    [createArray(101), false],
  ])('isValid(%s) -> %s', (a, expected) => {
    expect(isValid(a)).toBe(expected)
  })


  function createArray(value: number): string{
    return Array(value).fill('a').join('');
  }