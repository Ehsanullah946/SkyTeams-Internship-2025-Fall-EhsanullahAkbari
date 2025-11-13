const { fibo } = require("./question-23")
import { test, expect } from 'vitest'

test('print the fibo number to 5', () => {
  expect(fibo(5)).toEqual([0,1,1,2,3,5]);
});
test('print the fibo number to 4', () => {
  expect(fibo(4)).toEqual([0,1,1,2,3]);
});

test('print the fibo number to 2', () => {
  expect(fibo(3)).toEqual([0,1,1,2]);
});

