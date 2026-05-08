/**
 * calculator.js
 * Supports the following operations:
 *   - Addition (+)
 *   - Subtraction (-)
 *   - Multiplication (×)
 *   - Division (÷)
 *   - Modulo (%)
 *   - Power (**)
 *   - Square Root (√)
 */

/** Addition: returns the sum of a and b */
function add(a, b) {
  return a + b;
}

/** Subtraction: returns the difference of a minus b */
function subtract(a, b) {
  return a - b;
}

/** Multiplication: returns the product of a and b */
function multiply(a, b) {
  return a * b;
}

/** Division: returns the quotient of a divided by b; throws on division by zero */
function divide(a, b) {
  if (b === 0) throw new Error('Division by zero');
  return a / b;
}

/** Modulo: returns the remainder of a divided by b; throws on division by zero */
function modulo(a, b) {
  if (b === 0) throw new Error('Division by zero');
  return a % b;
}

/** Power: returns base raised to the given exponent */
function power(base, exponent) {
  return Math.pow(base, exponent);
}

/** Square Root: returns the square root of n; throws on negative input */
function squareRoot(n) {
  if (n < 0) throw new Error('Cannot take square root of a negative number');
  return Math.sqrt(n);
}

module.exports = { add, subtract, multiply, divide, modulo, power, squareRoot };
