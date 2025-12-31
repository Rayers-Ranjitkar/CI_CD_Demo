// const { add, multiply,substraction } = require('../utils');
import { add, multiply, substraction } from "./utils.js";

test('adds 2 + 2 correctly', () => {
  expect(add(2, 2)).toBe(4); 
});

test('multiplies 3 * 2 correctly', () => {
  expect(multiply(3, 2)).toBe(6); 
});

