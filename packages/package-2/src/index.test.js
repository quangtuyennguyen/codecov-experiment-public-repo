import { average, clamp, isEven, sum } from './index';

// ── average ───────────────────────────────────────────────────────────────────
test("average returns the mean of a numeric array", () => {
  expect(average([1, 2, 3])).toBe(2);
  expect(average([10])).toBe(10);
  expect(average([0, 0, 0])).toBe(0);
});

test("average throws on an empty array", () => {
  expect(() => average([])).toThrow("Cannot average an empty array");
});

test("average throws when passed null or undefined", () => {
  expect(() => average(null)).toThrow("Cannot average an empty array");
});

// ── clamp ─────────────────────────────────────────────────────────────────────
test("clamp returns the value when it is within range", () => {
  expect(clamp(5, 1, 10)).toBe(5);
});

test("clamp returns min when value is below range", () => {
  expect(clamp(0, 1, 10)).toBe(1);
});

test("clamp returns max when value is above range", () => {
  expect(clamp(15, 1, 10)).toBe(10);
});

// ── isEven ───────────────────────────────────────────────────────────────────
test("isEven returns true for even numbers", () => {
  expect(isEven(4)).toBe(true);
  expect(isEven(0)).toBe(true);
});

test("isEven returns false for odd numbers", () => {
  expect(isEven(3)).toBe(false);
  expect(isEven(-1)).toBe(false);
});

// ── sum ───────────────────────────────────────────────────────────────────────
test("sum returns the total of all numbers in an array", () => {
  expect(sum([1, 2, 3])).toBe(6);
  expect(sum([0])).toBe(0);
});

test("sum returns 0 for an empty array", () => {
  expect(sum([])).toBe(0);
});
