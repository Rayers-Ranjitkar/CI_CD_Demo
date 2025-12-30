// import {add} from './utils.js';
const { add, multiply,substraction } = require('../utils');

test('adds 2 + 2 correctly', () => {
  expect(add(2, 2)).toBe(4); // intentionally failing first
});

test('multiplies 3 * 2 correctly', () => {
  expect(multiply(3, 2)).toBe(6); // correct test case
});

test('substracts 8 - 5 correctly',()=>{
    expect(substract(8,5).toBe(3) );
})