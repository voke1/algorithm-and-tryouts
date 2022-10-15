//get Minimum window size
const getWindowSize = (arr, sum) => {
  let windowSize = Infinity;
  let currentSum = 0;
  let leftPointer = 0;

  for (let index = 0; index < arr.length; index++) {
    currentSum += arr[index];

    while(currentSum >= sum) {
       windowSize = Math.min(windowSize, (index - leftPointer) + 1);
       currentSum -= arr[leftPointer++]
    }
  }

  return windowSize;
};
 
let arr = [3, 1, 3, 5, 10, 7, 4, 9, 2, 5];
console.log(getWindowSize(arr, 15));
