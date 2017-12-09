import checksum, { diffBetweenLargestSmallestValue } from './index';


describe('checksum', () => {
  expect(checksum(`5 1 9 5
7 5 3
2 4 6 8`)).toBe(18);
});

describe('diffBetweenLargestSmallestValue', () => {
  test('The first row\'s largest and smallest values are 9 and 1, and their difference is 8.', () => {
    expect(diffBetweenLargestSmallestValue('5 1 9 5')).toBe(8);
  });

});
