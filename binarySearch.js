//binary search works only on sorted array;
const binarySearch = (arr, t) => {
  //set pointers;
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  if (arr.length === 0) {
    return -1;
  }

  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (t === arr[middleIndex]) {
      return middleIndex;
    }
    if (t < arr[middleIndex]) {
      rightIndex = middleIndex - 1;
    } else {
      // console.log('araindex:', t)
      leftIndex = middleIndex + 1;
    }
  }

  return -1;
};

// console.log("result", binarySearch([-5, 2, 4, 6, 10], 4));
// console.log("result", binarySearch([-5, 2, 4, 6, 10], 10));
// console.log("result4", binarySearch([-5, 2, 4, 6, 10], 4));
// console.log("result4", binarySearch([-5, 2, 4, 6, 10], 2));
// console.log("result4", binarySearch([-5, 2, 4, 6, 10], -5));
// console.log("result4", binarySearch([-5, 2, 4, 6, 10], 9));

//another binary search or Two Pointer solution to a problem;
const findPairs = (arr, k) => {
  //set pointers;
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  // if (arr.length === 0) {
  //   return false;
  // }

  while (leftIndex < rightIndex) {
    // let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (k === arr[leftIndex] + arr[rightIndex]) {
      return true;
    } else if (arr[leftIndex] + arr[rightIndex] < k) {
      leftIndex++;
    } else {
      // console.log('araindex:', t)
      rightIndex--;
    }
  }

  return false;
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum1 = function (nums, target) {
  let leftPointer = 0;
  let rightPointer = nums.length - 1;
  let indices = [];
  let result = [];

  let copy = [...nums];
  copy.sort((a, b) => a - b);

  while (leftPointer < rightPointer) {
    if (copy[leftPointer] + copy[rightPointer] === target) {
      indices = [leftPointer, rightPointer];
      break;
    } else if (target < copy[leftPointer] + copy[rightPointer]) {
      rightPointer--;
    } else {
      leftPointer++;
    }
  }

  for (let index = 0; index < nums.length; index++) {
    if (nums[index] === copy[leftPointer]) {
      result.push(index);
    } else if (nums[index] === copy[rightPointer]) {
      result.push(index);
    }
  }

  return result;
};

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let leftPointer = 0;
  let rightPointer = height.length - 1;
  let maxArea = -Infinity;

  while (leftPointer !== rightPointer) {
    let length = rightPointer - leftPointer;
    console.log({ maxArea, rightPointer, leftPointer, length });
    if (height[rightPointer] > height[leftPointer]) {
      maxArea = Math.max(maxArea, length * height[leftPointer]);
      leftPointer++;
    } else {
      maxArea = Math.max(maxArea, length * height[rightPointer]);
      rightPointer--;
    }
  }

  return maxArea;
};

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let reds = [];
  let whites = [];
  let blues = [];
  let index = 0;
  let answer = [];

  while (index < nums.length) {
    if (nums[index] === 0) {
      reds.push(nums[index]);
    } else if (nums[index] === 1) {
      whites.push(nums[index]);
    } else {
      blues.push(nums[index]);
    }

    index++;
  }
  console.log({ reds, whites, blues });
  answer = [...reds, ...whites, ...blues];
  console.log({ answer });

  return answer;
};
console.log("result", sortColors([2, 0, 2, 1, 1, 0]));
// console.log("result", findPairs([-5, 2, 4, 6, 10], 10));
