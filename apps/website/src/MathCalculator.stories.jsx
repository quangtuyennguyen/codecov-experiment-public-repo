import MathCalculator from './MathCalculator';

export default {
  title: 'MathCalculator',
  component: MathCalculator,
  argTypes: {
    operation: {
      control: { type: 'select' },
      options: ['add', 'subtract', 'divide', 'multiply', 'power'],
    },
    a: { control: 'number' },
    b: { control: 'number' },
  },
};

// ── add ───────────────────────────────────────────────────────────────────────
export const Add = {
  args: { operation: 'add', a: 3, b: 4 },
};

// ── subtract ──────────────────────────────────────────────────────────────────
export const Subtract = {
  args: { operation: 'subtract', a: 10, b: 4 },
};

// ── divide — happy path ───────────────────────────────────────────────────────
export const Divide = {
  args: { operation: 'divide', a: 10, b: 2 },
};

// ── divide — error branch (b === 0) ──────────────────────────────────────────
export const DivideByZero = {
  args: { operation: 'divide', a: 10, b: 0 },
};

// ── multiply ──────────────────────────────────────────────────────────────────
export const Multiply = {
  args: { operation: 'multiply', a: 6, b: 7 },
};

// ── power — positive exponent ─────────────────────────────────────────────────
export const Power = {
  args: { operation: 'power', a: 2, b: 8 },
};

// ── power — negative exponent (error branch) ──────────────────────────────────
export const PowerNegativeExp = {
  args: { operation: 'power', a: 2, b: -1 },
};
