const { add, multiply,substraction } = require('../utils');

test('adds 2 + 2 correctly', () => {
  expect(add(2, 2)).toBe(4); 
});

test('multiplies 3 * 2 correctly', () => {
  expect(multiply(3, 2)).toBe(6); 
});

test('substracts 8 - 5 correctly',()=>{
    expect(substraction(8,5)).toBe(3);
})