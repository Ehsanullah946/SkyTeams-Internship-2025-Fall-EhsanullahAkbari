const { printEvenNumber } = require("./question-22")
import { test, expect } from 'vitest'

test('returns even numbers between 1 and 10', () => {
  expect(printEvenNumber(1, 10)).toEqual([2, 4, 6, 8]);
});
test('returns even numbers between 1 and 20', () => {
  expect(printEvenNumber(1, 20)).toEqual([2, 4, 6, 8,10,12,14,16,18]);
});
test('returns even numbers between 1 and 5', () => {
  expect(printEvenNumber(1, 5)).toEqual([2, 4]);
});
test('returns even numbers between 1 and 10', () => {
  expect(printEvenNumber(1,8)).toEqual([2, 4, 6]);
});

