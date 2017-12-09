import solveCaptcha from './index';

describe('solveCaptcha', () => {
  test(
    '1122 produces a sum of 3 (1 + 2) because the first digit (1) matches the second digit' +
      'and the third digit (2) matches the fourth digit.',
    () => {
      expect(solveCaptcha('1122')).toBe(3);
    },
  );
});
