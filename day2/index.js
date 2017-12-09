export const diffBetweenLargestSmallestValue = row => {
  const splittedRow = row.split(' ');
  const max = Math.max(...splittedRow);
  const min = Math.min(...splittedRow);
  return max - min;
};

const checksum = spreadsheet => {
  const rows = spreadsheet.split('\n');
  return rows.reduce(
    (sum, row) => sum + diffBetweenLargestSmallestValue(row),
    0,
  );
};

export default checksum;
