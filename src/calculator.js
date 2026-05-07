/**
 * calculator.js
 * Supports four basic arithmetic operations:
 *   - Addition (+)
 *   - Subtraction (-)
 *   - Multiplication (×)
 *   - Division (÷)
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

module.exports = { add, subtract, multiply, divide };
