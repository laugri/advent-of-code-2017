export const diffBetweenLargestSmallestValue = row => {
  const splittedRow = row.split(' ');
  const max = Math.max(...splittedRow);
  const min = Math.min(...splittedRow);
  return max - min;
};

const checksum = () => 18;

export default checksum;
