// Algorithm:

// Find the middle element of the array.
// Check if the middle element is the minimum element
// If the middle element does not satisfy the minimum element condition then apply binary search on the unsorted half of the array.
// Code Implementation in Javascript:

// Step 1: Set left and right values. In this problem, the left value is 0 and the right value is the length of the array.
// Step 2: Find the middle element of the array and check for the unsorted half of the array.

// When the middle value is greater than the rightmost value of the array, it shows that the right half of the array is unsorted, or else the left side is unsorted.

// Step 3: Return the answer. The loop breaks when the left is greater than or equal to the right value. This happens when we have found the minimum element in the array as both left and right are equal we return the left index.

// (i.e.,  [0,1,2,4,5,6,7] might become  [4,5,6,7,0,1,2]).
// Find the minimum element.
// Input: [3,4,5,1,2]
// Output: 1

const modifiedBinarySearch = (arr) => {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] > arr[right]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return arr[left];
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    }

    // When dividing the roated array into two halves, one must be sorted.

    // Check if the left side is sorted
    if (nums[left] <= nums[mid]) {
      if (nums[left] <= target && target <= nums[mid]) {
        // target is in the left
        right = mid - 1;
      } else {
        // target is in the right
        left = mid + 1;
      }
    }

    // Otherwise, the right side is sorted
    else {
      if (nums[mid] <= target && target <= nums[right]) {
        // target is in the right
        left = mid + 1;
      } else {
        // target is in the left
        right = mid - 1;
      }
    }
  }

  return -1;
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let uniqueVals = [...new Set(nums)];

  while (left <= right) {
    let mid = Math.floor((right + left) / 2);

    if (nums[mid] === target) {
      return true;
    }

    if (nums[left] <= nums[mid]) {
      if (nums[left] <= target && target <= nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
      console.log({ left, right, mid });
    } else {
      if (nums[mid] <= target && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    console.log({ midVal: nums[mid] });

    console.log({ mid2: mid });
  }

  return false;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    console.log({ left, right, mid });

    if (nums.length === 1) {
      return 0;
    }

    // if(!(nums[mid - 1]) || !(nums[mid+1])){
    //     let val = -Infinity
    // }

    if (
      (nums[mid - 1] || -Infinity) < nums[mid] &&
      (nums[mid + 1] || -Infinity) < nums[mid]
    ) {
      return mid;
    } else {
      if (
        (nums[mid - 1] || -Infinity) < nums[mid] &&
        (nums[mid + 1] || -Infinity) > nums[mid]
      ) {
        left = mid + 1;
      } else if (
        (nums[mid - 1] || -Infinity) > nums[mid] &&
        (nums[mid + 1] || -Infinity) < nums[mid]
      ) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
  }
};

/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function (letters, target) {
  let left = 0;
  let uniqueArr = [...new Set(letters)];
  let right = uniqueArr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (uniqueArr[mid] === target) {
      if (mid === uniqueArr.length - 1) {
        return uniqueArr[0];
      }
      return uniqueArr[mid + 1];
    }
    if (uniqueArr[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
    console.log({ right, left, mid });
  }

  for (let index = 0; index < uniqueArr.length; index++) {
    console.log({ letter: uniqueArr[index], target });
    if (uniqueArr[index] > target) {
      return uniqueArr[index];
    }
  }

  return uniqueArr[0];
};

// let ar = ["c", "f", "j"];
// console.log(nextGreatestLetter(ar, "a"));
// console.log(nextGreatestLetter(["c", "f", "j"], "c"));
// console.log(nextGreatestLetter(["x", "x", "y", "y"], "z"));
// console.log(nextGreatestLetter(["c", "f", "j"], "d")); //f
// console.log(nextGreatestLetter(["c", "f", "j"], "j"));
// console.log(nextGreatestLetter(["e", "e", "g", "g"], "g"));

// console.log({ map });


