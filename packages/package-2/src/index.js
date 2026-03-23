export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

export function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero");
  }
  return a / b;
}

export function multiply(a, b) {
  return a * b;
}

export function power(base, exp) {
  if (exp < 0) {
    throw new Error("Negative exponent not supported");
  }
  let result = 1;
  for (let i = 0; i < exp; i++) {
    result *= base;
  }
  return result;
}

export function average(nums) {
  if (!nums || nums.length === 0) {
    throw new Error("Cannot average an empty array");
  }
  return nums.reduce((sum, n) => sum + n, 0) / nums.length;
}

export function clamp(value, min, max) {
  if (value < min) return min;
  if (value > max) return max;
  return value;
}

export function isEven(n) {
  return n % 2 === 0;
}
