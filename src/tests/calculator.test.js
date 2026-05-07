/**
 * calculator.test.js
 * Comprehensive unit tests for calculator.js
 * Operations covered: add, subtract, multiply, divide, modulo, power, squareRoot
 */

const { add, subtract, multiply, divide, modulo, power, squareRoot } = require('../calculator');

// ─── Addition (+) ────────────────────────────────────────────────────────────
describe('add', () => {
  // Basic example from spec image: 2 + 3 = 5
  test('adds 2 + 3 to equal 5', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('adds two positive integers', () => {
    expect(add(10, 20)).toBe(30);
  });

  test('adds positive and negative numbers', () => {
    expect(add(5, -3)).toBe(2);
  });

  test('adds two negative numbers', () => {
    expect(add(-4, -6)).toBe(-10);
  });

  test('adds floating-point numbers', () => {
    expect(add(0.1, 0.2)).toBeCloseTo(0.3);
  });

  test('adding zero returns the same number', () => {
    expect(add(7, 0)).toBe(7);
  });

  test('adds two zeros', () => {
    expect(add(0, 0)).toBe(0);
  });
});

// ─── Subtraction (-) ─────────────────────────────────────────────────────────
describe('subtract', () => {
  // Basic example from spec image: 10 - 4 = 6
  test('subtracts 10 - 4 to equal 6', () => {
    expect(subtract(10, 4)).toBe(6);
  });

  test('subtracts two positive integers', () => {
    expect(subtract(20, 5)).toBe(15);
  });

  test('subtracts yielding a negative result', () => {
    expect(subtract(3, 8)).toBe(-5);
  });

  test('subtracts a negative number (double negative)', () => {
    expect(subtract(5, -3)).toBe(8);
  });

  test('subtracts two negative numbers', () => {
    expect(subtract(-2, -7)).toBe(5);
  });

  test('subtracts floating-point numbers', () => {
    expect(subtract(1.5, 0.5)).toBeCloseTo(1.0);
  });

  test('subtracting zero returns the same number', () => {
    expect(subtract(9, 0)).toBe(9);
  });
});

// ─── Multiplication (×) ──────────────────────────────────────────────────────
describe('multiply', () => {
  // Basic example from spec image: 45 * 2 = 90
  test('multiplies 45 * 2 to equal 90', () => {
    expect(multiply(45, 2)).toBe(90);
  });

  test('multiplies two positive integers', () => {
    expect(multiply(3, 7)).toBe(21);
  });

  test('multiplies a positive and a negative number', () => {
    expect(multiply(4, -5)).toBe(-20);
  });

  test('multiplies two negative numbers yields positive', () => {
    expect(multiply(-3, -6)).toBe(18);
  });

  test('multiplies by zero yields zero', () => {
    expect(multiply(99, 0)).toBe(0);
  });

  test('multiplies by one returns the same number', () => {
    expect(multiply(8, 1)).toBe(8);
  });

  test('multiplies floating-point numbers', () => {
    expect(multiply(2.5, 4)).toBeCloseTo(10);
  });
});

// ─── Division (÷) ────────────────────────────────────────────────────────────
describe('divide', () => {
  // Basic example from spec image: 20 / 5 = 4
  test('divides 20 / 5 to equal 4', () => {
    expect(divide(20, 5)).toBe(4);
  });

  test('divides two positive integers', () => {
    expect(divide(10, 2)).toBe(5);
  });

  test('divides yielding a decimal result', () => {
    expect(divide(7, 2)).toBeCloseTo(3.5);
  });

  test('divides a negative by a positive', () => {
    expect(divide(-12, 4)).toBe(-3);
  });

  test('divides a positive by a negative', () => {
    expect(divide(15, -3)).toBe(-5);
  });

  test('divides two negative numbers yields positive', () => {
    expect(divide(-18, -6)).toBe(3);
  });

  test('divides by one returns the same number', () => {
    expect(divide(42, 1)).toBe(42);
  });

  // Edge case: division by zero
  test('throws an error when dividing by zero', () => {
    expect(() => divide(10, 0)).toThrow('Division by zero');
  });

  test('throws an error when dividing zero by zero', () => {
    expect(() => divide(0, 0)).toThrow('Division by zero');
  });
});

// ─── Modulo (%) ──────────────────────────────────────────────────────────────
describe('modulo', () => {
  // Basic example from spec image: 5 % 2 = 1
  test('modulo 5 % 2 equals 1', () => {
    expect(modulo(5, 2)).toBe(1);
  });

  test('returns zero when evenly divisible', () => {
    expect(modulo(10, 5)).toBe(0);
  });

  test('modulo with a larger divisor returns dividend', () => {
    expect(modulo(3, 7)).toBe(3);
  });

  test('modulo with negative dividend', () => {
    expect(modulo(-7, 3)).toBe(-1);
  });

  test('modulo with negative divisor', () => {
    expect(modulo(7, -3)).toBe(1);
  });

  test('modulo of floating-point numbers', () => {
    expect(modulo(5.5, 2)).toBeCloseTo(1.5);
  });

  // Edge case: modulo by zero
  test('throws an error when divisor is zero', () => {
    expect(() => modulo(5, 0)).toThrow('Division by zero');
  });
});

// ─── Power (**) ──────────────────────────────────────────────────────────────
describe('power', () => {
  // Basic example from spec image: 2 ^ 3 = 8
  test('raises 2 to the power of 3 to equal 8', () => {
    expect(power(2, 3)).toBe(8);
  });

  test('raises a number to the power of 1 returns itself', () => {
    expect(power(7, 1)).toBe(7);
  });

  test('raises a number to the power of 0 returns 1', () => {
    expect(power(99, 0)).toBe(1);
  });

  test('raises a number to a negative exponent', () => {
    expect(power(2, -2)).toBeCloseTo(0.25);
  });

  test('raises a negative base to an even exponent yields positive', () => {
    expect(power(-3, 2)).toBe(9);
  });

  test('raises a negative base to an odd exponent yields negative', () => {
    expect(power(-2, 3)).toBe(-8);
  });

  test('raises a decimal base to a power', () => {
    expect(power(0.5, 2)).toBeCloseTo(0.25);
  });
});

// ─── Square Root (√) ─────────────────────────────────────────────────────────
describe('squareRoot', () => {
  // Basic example from spec image: √16 = 4
  test('square root of 16 equals 4', () => {
    expect(squareRoot(16)).toBe(4);
  });

  test('square root of 9 equals 3', () => {
    expect(squareRoot(9)).toBe(3);
  });

  test('square root of 2 returns correct decimal', () => {
    expect(squareRoot(2)).toBeCloseTo(1.4142135);
  });

  test('square root of 0 equals 0', () => {
    expect(squareRoot(0)).toBe(0);
  });

  test('square root of 1 equals 1', () => {
    expect(squareRoot(1)).toBe(1);
  });

  test('square root of a perfect square returns integer', () => {
    expect(squareRoot(144)).toBe(12);
  });

  // Edge case: square root of a negative number
  test('throws an error for negative input', () => {
    expect(() => squareRoot(-1)).toThrow('Cannot take square root of a negative number');
  });

  test('throws an error for large negative input', () => {
    expect(() => squareRoot(-100)).toThrow('Cannot take square root of a negative number');
  });
});
