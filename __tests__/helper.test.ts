import { expect, test } from '@jest/globals';
import { add } from '../src/helper';

test('add', () => {
  expect(add(1, 2)).toBe(3);
});
