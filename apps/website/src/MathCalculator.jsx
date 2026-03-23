import { add, subtract, divide, multiply, power } from '@lab/package-2';

const OPERATIONS = {
  add: (a, b) => add(a, b),
  subtract: (a, b) => subtract(a, b),
  divide: (a, b) => divide(a, b),
  multiply: (a, b) => multiply(a, b),
  power: (base, exp) => power(base, exp),
};

export default function MathCalculator({ operation, a, b }) {
  let result = null;
  let error = null;

  try {
    result = OPERATIONS[operation](a, b);
  } catch (err) {
    error = err.message;
  }

  return (
    <div style={{ fontFamily: 'monospace', padding: '1rem' }}>
      <h2>Math Calculator</h2>
      <p>
        <strong>{operation}</strong>({a}, {b}) ={' '}
        {error
          ? <span style={{ color: 'red' }}>Error message: {error}</span>
          : <span style={{ color: 'green' }}>{result}</span>}
      </p>
    </div>
  );
}
