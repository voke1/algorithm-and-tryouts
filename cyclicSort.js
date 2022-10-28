const cyclicSort = (arr) => {
  let index = 0;
  while (index < arr.length) {
    if (index !== arr[index] - 1) {
      let itemToSwap = arr[index];
      let item2ToSwap = arr[arr[index] - 1];
      arr[arr[index] - 1] = itemToSwap;
      arr[index] = item2ToSwap;
    } else {
      index++;
    }
  }     
 
  return arr;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let index = 0;

  while (index < nums.length) {
    let itemToSwap = nums[index];
    let swapWithIndex = itemToSwap;
    let swapWithItem = nums[swapWithIndex];

    if (nums[index] < nums.length && nums[index] !== swapWithItem) {
      nums[index] = swapWithItem;
      nums[swapWithIndex] = itemToSwap;
    } else {
      index++;
    }
  }
  console.log({ nums });

  for (let index = 0; index < nums.length; index++) {
    if (nums[index] !== index) {
      return index;
    }
  }

  return nums.length;
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
  let index = 0;
  let duplicates = [];

  while (index < nums.length) {
    let itemToSwap = nums[index];
    let swapWithIndex = itemToSwap - 1;
    let swapWithItem = nums[swapWithIndex];

    if (nums[index] <= nums.length && nums[index] !== swapWithItem) {
      nums[index] = swapWithItem;
      nums[swapWithIndex] = itemToSwap;
    } else {
      index++;
    }
  }

  for (let index = 0; index < nums.length; index++) {
    if (nums[index] !== index + 1) {
      duplicates.push(nums[index]);
    }
  }
  console.log({ nums });

  return duplicates;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  let index = 0;
  let duplicates = [];
  let minNum = Infinity;

  while (index < nums.length) {
    let itemToSwap = nums[index];
    let swapWithIndex = itemToSwap - 1;
    let swapWithItem = nums[swapWithIndex];

    if (nums[index] <= nums.length && nums[index] !== swapWithItem && nums[index]> 0) {
      nums[index] = swapWithItem;
      nums[swapWithIndex] = itemToSwap;
    } else {
      index++;
    }
  }

  console.log({ nums });

  for (let index = 0; index < nums.length; index++) {
    if (nums[index] !== index + 1) {
     minNum = Math.min(minNum,  index+1)
    }
  }
  

  return minNum;
};

// console.log(cyclicSort([3, 1, 5, 4, 2]));
// console.log(cyclicSort([2, 6, 4, 3, 1, 5]));
// console.log(cyclicSort([1, 5, 6, 4, 3, 2]));
// console.log(missingNumber([3, 0, 1]));
console.log(firstMissingPositive([3, 4, -1, 1]));
