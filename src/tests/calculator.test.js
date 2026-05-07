/**
 * calculator.test.js
 * Comprehensive unit tests for calculator.js
 * Operations covered: add, subtract, multiply, divide
 */

const { add, subtract, multiply, divide } = require('../calculator');

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
