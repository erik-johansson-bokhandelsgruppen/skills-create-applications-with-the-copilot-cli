#!/usr/bin/env node
/**
 * index.js — CLI entry point for the Node.js calculator app.
 *
 * Supported operations: add, subtract, multiply, divide
 *
 * Usage:
 *   node src/index.js <operation> <number1> <number2>
 *
 * Examples:
 *   node src/index.js add 5 3       # => 8
 *   node src/index.js subtract 9 4  # => 5
 *   node src/index.js multiply 3 7  # => 21
 *   node src/index.js divide 10 2   # => 5
 */

const { add, subtract, multiply, divide } = require('./calculator');

const [,, operation, arg1, arg2] = process.argv;

// Validate that all arguments are provided
if (!operation || arg1 === undefined || arg2 === undefined) {
  console.error('Usage: node src/index.js <add|subtract|multiply|divide> <num1> <num2>');
  process.exit(1);
}

const a = parseFloat(arg1);
const b = parseFloat(arg2);

// Validate that both arguments are valid numbers
if (isNaN(a) || isNaN(b)) {
  console.error('Error: Both operands must be valid numbers.');
  process.exit(1);
}

try {
  let result;
  switch (operation) {
    case 'add':
      result = add(a, b);
      break;
    case 'subtract':
      result = subtract(a, b);
      break;
    case 'multiply':
      result = multiply(a, b);
      break;
    case 'divide':
      result = divide(a, b);
      break;
    default:
      console.error(`Error: Unknown operation "${operation}". Use add, subtract, multiply, or divide.`);
      process.exit(1);
  }
  console.log(result);
} catch (err) {
  console.error(`Error: ${err.message}`);
  process.exit(1);
}
