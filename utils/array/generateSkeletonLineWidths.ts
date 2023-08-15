export const generateSkeletonLineWidths = ({ line1 = '70%', line2 = '50%', lineCount = 40 }) => {
  const [...array] = new Array(lineCount);

  return array.map((_, index) => {
    if (index % 2 === 0) {
      return line1;
    } else {
      return line2;
    }
  });
};
