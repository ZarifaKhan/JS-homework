//Find the minimum and maximum element in an array

let array = [3, 2, 1, 56, 10000, 167, -1];

const minAndMax = (arr) => {
  let min = 0;
  let max = 0;
  arr.map((element) => {
    if (max < element) {
      max = element;
    }

    if (min > element) {
      min = element;
    }
  });

  return { min, max };
};

console.log(minAndMax(array));
