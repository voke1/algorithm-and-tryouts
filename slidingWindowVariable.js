//get Minimum window size
const getWindowSize = (arr, sum) => {
  let windowSize = Infinity;
  let currentSum = 0;
  let leftPointer = 0;

  for (let index = 0; index < arr.length; index++) {
    currentSum += arr[index];

    while (currentSum >= sum) {
      windowSize = Math.min(windowSize, index - leftPointer + 1);
      currentSum -= arr[leftPointer++];
    }
  }

  return windowSize;
};

let arr = [3, 1, 3, 5, 10, 7, 4, 9, 2, 5];
// console.log(getWindowSize(arr, 15));

const maxSubStrLength = (str, k) => {
  let maxSubStr = -Infinity;
  let windowStart = 0;
  let charFreq = {};

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    let curChar = str[windowEnd];

    if (!charFreq[curChar]) {
      charFreq[curChar] = 0;
    }
    charFreq[curChar]++;

    while (Object.keys(charFreq).length > k) {
      let curChar = str[windowStart];
      charFreq[curChar]--;

      if (charFreq[curChar] === 0) {
        delete charFreq[curChar];
      }

      windowStart++;
    }

    maxSubStr = Math.max(maxSubStr, windowEnd - windowStart + 1);
  }

  return max;
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {number[]}
   */
  var maxSlidingWindow = function (nums, k) {
    let maxWindow = [],
      windowContent = [],
      leftPointer = 0,
      maxValue = -Infinity;
    let rightPointer = 0;
    let maxArr = [];

    while (rightPointer < nums.length) {
      let curVal = nums[rightPointer];
      console.log({ curVal });
      maxValue = Math.max(maxValue, curVal);

      console.log({ maxValue });

      if (rightPointer - leftPointer >= k - 1) {
        maxArr.push(maxValue);

        leftPointer++;
      }

      rightPointer++;
    }

    return maxArr;
  };
  SubStr;
};

// console.log(maxSubStrLength("acccpbbebi", 3)); //6
// console.log(maxSubStrLength("aaaabbcccd", 1)); //4
// console.log(maxSubStrLength("abcdefg", 10)); //7

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  let maxWindow = [],
    windowContent = [],
    leftPointer = 0,
    maxValue = -Infinity;
  let rightPointer = 0;
  let maxArr = [];

  while (rightPointer < nums.length) {
    let curVal = nums[rightPointer];
    console.log({ curVal });
    maxValue = Math.max(maxValue, curVal);

    console.log({ maxValue });

    if (rightPointer - leftPointer >= k - 1) {
      maxArr.push(maxValue);

      leftPointer++;
    }

    rightPointer++;
  }

  return maxArr;
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  let maxWindow = [],
    windowContent = [],
    leftPointer = 0,
    maxValue = -Infinity;

  for (let rightPointer = 0; rightPointer < nums.length; rightPointer++) {
    let rightChar = nums[rightPointer];

    if (k === 1) {
      return nums;
    }

    windowContent.push(rightChar);

    if (windowContent.length >= k) {
      maxValue = Math.max(...windowContent);

      maxWindow.push(maxValue);
      windowContent.shift();
      leftPointer = 0;
      maxValue = -Infinity;
    }
  }

  return maxWindow;
};

console.log(!![]);

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  const q = []; // stores *indices*
  const res = [];
  for (let i = 0; i < nums.length; i++) {
    console.log({
      numsItem: nums[q[q.length - 1]],
      q,
      numsVal: nums[i],
      qItem: q[q.length - 1],
    });

    while (q && nums[q[q.length - 1]] <= nums[i]) {
      console.log("got here", {i, iValue: nums[i], q})
      q.pop();
    }

    q.push(i);
    console.log({ q2: q });


    // remove first element if it's outside the window

    console.log({q0: q[0], i, k, dif: i - k})
    if (q[0] === i - k) {
      console.log('everly')
      q.shift();
    }


    // if window has k elements add to results (first k-1 windows have < k elements because we start from empty window and add 1 element each iteration)
    console.log({i, k, dif: k - 1})
    if (i >= k - 1) {
      res.push(nums[q[0]]);
    }

    console.log({ res });
  }

  
  return res;
};


console.log(maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3));
