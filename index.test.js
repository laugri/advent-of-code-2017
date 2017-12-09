import solveCaptcha, { getNextChar } from './index';

describe('solveCaptcha', () => {
  test(
    '1122 produces a sum of 3 (1 + 2) because the first digit (1) matches the second digit' +
      'and the third digit (2) matches the fourth digit.',
    () => {
      expect(solveCaptcha('1122')).toBe(3);
    },
  );

  test('1111 produces 4 because each digit (all 1) matches the next.', () => {
    expect(solveCaptcha('1111')).toBe(4);
  });
});

describe('getNextChar', () => {
  test('should return first character if index is at the end', () => {
    expect(getNextChar('123', 2)).toBe('1');
  });

  test('should return character at index if index is not at the end', () => {
    expect(getNextChar('123', 1)).toBe('3');
  });

  test('should return character if string is a unique character', () => {
    expect(getNextChar('1', 0)).toBe('1');
  });

  test('should return undefined if empty string', () => {
    expect(getNextChar('', 0)).toBe(undefined);
  });
});
