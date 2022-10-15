//one method of solving fixed sliding window algo which is a single loop through the array
//
const maxSumOfElements = (arr, p) => {
  let index = 0;
  let sum = 0;

  while (index < p) {
    sum = sum + arr[index];
    index++;
  }

  let maxSum = sum;

  for (let index = p; index < arr.length; index++) {
    sum = sum + arr[index] - arr[index - p];
    if (maxSum < sum) {
      maxSum = sum;
    }
  }

  return maxSum;
};

//second method of solving fixed sliding window algo which is also a single loop through the array
//
const maxSumOfElements2 = (arr, p) => {
    if(p < 0 || p > arr.length) return null;

  let currentSum = 0;
  let maxSum = -Infinity;

  for (let index = 0; index < arr.length; index++) {
    currentSum += arr[index];

    if (index >= p - 1) {
      maxSum = Math.max(currentSum, maxSum);
      currentSum -= arr[index - (p - 1)];
    }
  }

  return maxSum;
};

let arr = [8, 14, 3, 4, 19, 81, 17];
let arr1 = [5, 1, 3, 2, 11, 5, 7, 8];
console.log(maxSumOfElements(arr, 4));
console.log(maxSumOfElements(arr1, 3));

console.log(maxSumOfElements2(arr, 4));
console.log(maxSumOfElements2(arr1, 3));
