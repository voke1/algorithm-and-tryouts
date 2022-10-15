/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
  let maxLength = -Infinity;
  let oneCount = 0;
  let zeroCount = 0;

  for (let index = 0; index < nums.length; index++) {
    if (nums[index] === 0) {
      console.log("got here");
      zeroCount++;
    } else {
      console.log("got here oneCOunt");

      oneCount++;
    }
    console.log(oneCount, zeroCount, { index });

    while (zeroCount > k) {
      maxLength = Math.max(maxLength, oneCount + zeroCount);
      zeroCount = 1;
      oneCount = 0;
    }
    console.log({ oneCount, zeroCount });
  }

  return maxLength;
};

// console.log(
//   longestOnes([0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], 3)
// );

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  let result = [];
  let initialStr = "";

  for (let index = 0; index < s.length; index++) {
    initialStr = initialStr + s[index];

    console.log({ initialStr });

    if (initialStr.length == p.length) {
      let regWord = initialStr.match(new RegExp(`[${p}]{${p.length}}`, "g"));

      console.log({ initialStr, regWord });

      if (regWord) {
        if (
          new RegExp(`[${regWord[0]}]{${p.length}}`, "g").test(
            new RegExp(`[${p}]{${p.length}}`, "g")
          )
        ) {
          console.log({ regWord2: regWord });
          result.push(index - (p.length - 1));
          console.log({ result });
        }
      }

      initialStr = initialStr.replace(/^[a-zA-Z]/g, "");
    }
  }

  return result;
};

// ("ababababab");
// ("aab");
// console.log(findAnagrams("abab", "ab"));
// console.log(findAnagrams("cbaebabacd", "abc"));
// console.log(findAnagrams("ababababab", "aab"));
// console.log(/[bab]{3}/g.test(/[aab]{3}/g));
// console.log("aab".search(new RegExp(`[aba]{3}`, "g")));

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  let windowStart = 0,
    matched = 0,
    charFrequency = {};

  for (i = 0; i < s1.length; i++) {
    const chr = s1[i];

    if (!(chr in charFrequency)) {
      charFrequency[chr] = 0;
    }
    charFrequency[chr] += 1;
  }

  console.log({ charFrequency });

  // Our goal is to match all the characters from the 'charFrequency' with the current window
  // try to extend the range [windowStart, windowEnd]
  for (windowEnd = 0; windowEnd < s2.length; windowEnd++) {
    const rightChar = s2[windowEnd];
    if (rightChar in charFrequency) {
      // Decrement the frequency of matched character
      charFrequency[rightChar] -= 1;

      if (charFrequency[rightChar] === 0) {
        matched += 1;
        console.log({ matched });
      }
    }

    if (matched === Object.keys(charFrequency).length) {
      console.log(Object.keys(charFrequency));
      return true;
    }

    // Shrink the sliding window
    if (windowEnd >= s1.length - 1) {
      leftChar = s2[windowStart];
      windowStart += 1;

      if (leftChar in charFrequency) {
        if (charFrequency[leftChar] === 0) {
          matched -= 1;
        }
        charFrequency[leftChar] += 1;
        console.log({ charFrequency });
      }
    }
  }

  console.log({ charFrequency });

  return false;
};

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  let freqOfChar = {},
    isMatched = 0,
    leftPointer = 0;

  for (let index = 0; index < s1.length; index++) {
    let currChar = s1[index];

    if (!(currChar in freqOfChar)) {
      freqOfChar[currChar] = 0;
    }
    freqOfChar[currChar] += 1;
  }

  console.log({ freqOfChar });

  for (let index = 0; index < s2.length; index++) {
    let currChar = s2[index];

    if (currChar in freqOfChar) {
      freqOfChar[currChar]--;

      if (freqOfChar[currChar] === 0) {
        isMatched++;
      }
    }

    if (isMatched === Object.keys(freqOfChar).length) {
      return true;
    }

    if (index >= s1.length - 1) {
      if (s2[leftPointer] in freqOfChar) {
        if (freqOfChar[s2[leftPointer]] === 0) {
          isMatched--;
        }

        freqOfChar[s2[leftPointer]]++;
      }

      leftPointer++;
    }
  }

  return false;
};

var longestOnes = function (array, K) {
  let left = 0,
    right = 0;

  while (right < array.length) {
    if (array[right] === 0) {
      K = K - 1;
    }
    console.log({ K, right });
    if (K < 0) {
      console.log({ K, right, left });

      if (array[left] === 0) K++;
      left++;
    }
    right++;
  }

  return right - left;
};

// console.log(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], (k = 2)));
// console.log(longestOnes("ab", "eidboaoo"));

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  let charFreq = {};

  for (let index = 0; index < p.length; index++) {
    let currChar = p[index];

    if (!(currChar in charFreq)) {
      charFreq[currChar] = 0;
    }

    charFreq[currChar]++;
  }

  return charFreq;
};

//  console.log(findAnagrams("cbaebabacd","abc"));

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumUniqueSubarray = function (nums) {
  let charFreq = {};
  let leftPointer = 0;
  let sum = 0;
  let uniqueArr = [...new Set(nums)];
  let maxScore = 0;

  for (let index = 0; index < uniqueArr.length; index++) {
    let currChar = uniqueArr[index];
    if (!(currChar in charFreq)) {
      charFreq[currChar] = 0;
    }

    charFreq[currChar]++;
  }
  console.log({ charFreq });

  for (let index = 0; index < nums.length; index++) {
    let currChar = nums[index];

    if (charFreq[currChar] >= 0) {
      sum = sum + currChar;
      console.log({ currChar }, charFreq[currChar]);
      if (charFreq[currChar] === 0) {
        console.log({ charFreq });
        console.log("before:", { sum });
        sum = sum - nums[leftPointer];
        console.log("after:", { sum });
        leftPointer++;
      }

      charFreq[currChar]--;
    }
    maxScore = Math.max(sum, maxScore);
    console.log({ maxScore });
  }
  return maxScore;
};

//  console.log(maximumUniqueSubarray([1, 4, 2, 4, 5,  4, 6]));

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums) {
  let maxLength = 0;
  let oneCount = 0,
    zeroCount = 0,
    leftPointer = 0;

  for (let index = 0; index < nums.length; index++) {
    if (index == nums.length - 1 && zeroCount == 0) {
      maxLength - 1;
    }

    if (nums[index] === 1) {
      oneCount++;
    } else {
      zeroCount++;
      if (zeroCount == 1) {
        leftPointer++;
        maxLength = maxLength + leftPointer;
      }
    }
    maxLength = oneCount;
  }

  return maxLength;
};

//  console.log(longestSubarray([0, 1, 1, 1, 0, 1, 1, 0, 1]));

/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function (fruits) {
  let maxLength = 0;
  let uniqueFruit = [...new Set(fruits)];
  let fruitFreq = {};
  let leftPointer = 0;
  let uniqueCount = 0;
  let right = 0;

  for (let index = 0; index < uniqueFruit.length; index++) {
    let currFruit = fruits[index];

    fruitFreq[currFruit] = 0;
  }

  console.log({ fruitFreq });

  while (right < fruits.length) {
    let currFruit = fruits[right];
    for (const [keys, value] of Object.entries(fruitFreq)) {
      console.log({ value });
      if (value === 1) {
        uniqueCount++;
        console.log({ uniqueCount, keys, value });
      }
    }

    if (uniqueCount < 2) {
      fruitFreq[currFruit] = 1;
      maxLength++;
    }

    if (uniqueCount >= 2) {
      fruitFreq[fruits[leftPointer]] = 0;
      console.log({ fruitFreq });

      leftPointer++;

      fruitFreq[currFruit] = 1;
    }
    // console.log({ right, uniqueCount, maxLength });

    right++;
  }

  console.log({ leftPointer, right });

  return maxLength;
};

// console.log(totalFruit([1, 2, 3, 2, 2]));

const maxSubArray = (arr, k) => {
  let maxSum = -Infinity,
    sum = 0;

  for (let index = 0; index < arr.length; index++) {
    let currVal = arr[index];
    sum = sum + currVal;

    if (index >= k - 1) {
      console.log({ sum });
      maxSum = Math.max(maxSum, sum);
      sum -= arr[index - (k - 1)];
    }
  }

  return maxSum;
};

// console.log(maxSubArray([4,2,1,7,8,1,2,8,1,0], 3));

const smallestSubArr = (arr, p) => {
  let smallestSize = Infinity,
    currSum = 0,
    leftPointer = 0;

  for (let index = 0; index < arr.length; index++) {
    currSum += arr[index];

    while (currSum >= p && leftPointer <= index) {
      smallestSize = Math.min(smallestSize, index - leftPointer + 1);
      currSum -= arr[leftPointer];
      leftPointer++;
    }
  }

  return smallestSize;
};

const longestSubstr = (arr, k) => {
  const map = [];

  for (let index = 0; index < arr.length; index++) {
    if (map.length <= 3) {
      if (arr[index]) map.push();
    }
  }
};

// console.log(longestSubstr([A, A, A,H, H, I, B, C], 2));
// console.log(smallestSubArr([3, 1, 3, 5, 10, 7, 4, 9, 2, 5], 15));

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion2 = function (s1, s2) {
  const s1Map = new Map();
  let isMatched = 0;
  let leftPointer = 0;

  for (let index = 0; index < s1.length; index++) {
    let currChar = s1[index];
    if (!s1Map.has(currChar)) {
      s1Map.set(currChar, 1);
    } else {
      s1Map.set(currChar, s1Map.get(currChar) + 1);
    }
  }

  for (let index = 0; index < s2.length; index++) {
    let currChar = s2[index];
    if (s1Map.has(currChar)) {
      s1Map.set(currChar, s1Map.get(currChar) - 1);
      if (s1Map.get(currChar) === 0) {
        isMatched++;
      }
    }

    if (isMatched === s1Map.size) {
      return true;
    }

    if (index >= s1.length - 1) {
      if (s1Map.has(s2[leftPointer])) {
        if (s1Map.get(s2[leftPointer]) === 0) {
          isMatched--;
        }
        s1Map.set(s2[leftPointer], s1Map.get(s2[leftPointer]) + 1);
      }
      leftPointer++;
    }
  }
  return false;
};

//Longest substring with at most K distinct characters
const longestSubStr = (s, k) => {
  let maxLength = 0;
  let map = new Map();
  let leftPointer = 0;

  for (let index = 0; index < s.length; index++) {
    let currChar = s[index];
    if (!map.get(currChar)) {
      map.set(currChar, 1);
    } else {
      map.set(currChar, map.get(currChar) + 1);
    }

    while (map.size > k) {
      if (map.get(s[leftPointer]) > 1) {
        map.set(s[leftPointer], map.get(s[leftPointer]) - 1);
      } else {
        map.delete(s[leftPointer]);
      }

      leftPointer++;
    }

    maxLength = Math.max(maxLength, index - leftPointer + 1);
  }

  return maxLength;
};

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  const map = new Map();

  for (let index = 0; index < t.length; index++) {
    let currChar = t[index];

    if (!map.has(currChar)) {
      map.set(currChar, 1);
    } else {
      map.set(currChar, map.get(currChar) + 1);
    }
  }

  let isMatched = map.size,
    leftPointer = 0,
    subStr = "",
    index = 0,
    minLength = Infinity;

  while (index < s.length) {
    let currChar = s[index];

    if (map.has(currChar)) {
      map.set(currChar, map.get(currChar) - 1);
      if (map.get(currChar) === 0) isMatched--;
    }

    index++;

    while (isMatched === 0) {
      if (index - leftPointer < minLength) {
        minLength = index - leftPointer;
        subStr = s.substring(leftPointer, index);
      }

      if (map.has(s[leftPointer])) {
        map.set(s[leftPointer], map.get(s[leftPointer]) + 1);
        if (map.get(s[leftPointer]) > 0) isMatched++;
      }

      leftPointer++;
    }
  }

  return subStr;
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  let maxWindow = [];
  let windowContent = [];
  let leftPointer = 0;
  // let rightPointer = 0;
  let maxValue = -Infinity;

  for (let rightPointer = 0; rightPointer < nums.length; rightPointer++) {
    let rightChar = nums[rightPointer];

    if (k === 1) {
      return nums;
    }

    windowContent.push(rightChar);
    console.log({ windowContent, maxValue, maxWindow });

    if (windowContent.length >= k) {
      while (leftPointer <= windowContent.length - 1) {
        // console.log({windowContent, maxWindow})
        let currVal = windowContent[leftPointer];
        console.log({ currVal });

        maxValue = Math.max(currVal, maxValue);
        console.log({ maxValue });
        leftPointer++;
      }

      maxWindow.push(maxValue);

      windowContent.shift();
      leftPointer = 0;
      maxValue = -Infinity;
    }
  }

  return maxWindow;
};

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let maxLength = -Infinity;
  const map = new Map();
  let index = 0;
  let leftPointer = 0;
  let subStr = "";

  if (s === subStr) {
    return 0;
  }
  if (s.length === 1) {
    return 1;
  }

  while (index < s.length) {
    let currVal = s[index];

    subStr = s.substring(leftPointer, index);
    maxLength = Math.max(subStr.length, maxLength);
    if (s.length === 2) {
      const [x, y] = s;
      console.log([x, y]);
      if (x === y) {
        console.log([x, y]);
        return 1;
      } else {
        return 2;
      }
    }

    if (!map.has(currVal)) {
      map.set(currVal, 1);
    } else {
      if (s[leftPointer] != s[index]) {
        leftPointer++;
      }

      while (s[leftPointer] === s[index] && leftPointer < index) {
        leftPointer++;
      }
    }
    console.log({ maxLength, currVal, index, leftPointer });

    index++;
  }
  console.log({ map });

  return maxLength;
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  let index = 0;
  let leftPointer = 0;

  if (nums.length < 2) {
    return false;
  }
  while (index < nums.length) {
    if (index > 0) {
      console.log({
        index,
        right: nums[index],
        leftPointer,
        left: nums[leftPointer],
      });
      if (nums[index] === nums[leftPointer]) {
        console.log("got here");
        if (Math.abs(index) - Math.abs(leftPointer) <= k) {
          return true;
        }
      }
      leftPointer++;
    }
    index++;
  }

  return false;
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  let index = 0;
  let leftPointer = 0;
  const map = new Map();

  for (let index = 0; index < nums.length; index++) {
    
      map.set(nums[index], index);
    
  }

  while (index < nums.length) {
    if (index > 0) {
      console.log({
        index,
        right: nums[index],
        leftPointer,
        left: nums[leftPointer],
      });
      if (nums[index] === nums[leftPointer]) {
        console.log("got here");
        if (Math.abs(index) - Math.abs(leftPointer) <= k) {
          return true;
        }
      }
      leftPointer++;
    }
    index++;
  }

  return false;
};

console.log(containsNearbyDuplicate([1, 2, 3, 1], 3));
