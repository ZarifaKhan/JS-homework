//Peak Element

let arr = [1, 2, 1, 3, 5, 6, 4,-1];

const findPeakNumber = (arr) => {
  let max = 0;
  arr.map((item) => {
    if (max < item) {
      max = item;
    }
  });
  return max;
};
console.log(findPeakNumber(arr));

