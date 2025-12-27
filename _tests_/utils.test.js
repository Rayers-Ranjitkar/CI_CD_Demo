// import {add} from './utils.js';
const { add } = require('../utils');

test('adds 2 + 2 correctly', () => {
  expect(add(2, 2)).toBe(4); // intentionally failing first
});
