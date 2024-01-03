import { expect, test } from '@jest/globals';

import { add } from '@/helper';

test('add', () => {
  expect(add(1, 2)).toBe(3);
});
