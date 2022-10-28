//findPair

const findPair = (ar, target) => {
  let leftPointer = 0;
  let rightPointer = ar.length - 1;

  while (leftPointer < rightPointer) {
    if (ar[leftPointer] + ar[rightPointer] === target) {
      return [ar[leftPointer], ar[rightPointer]];
    } else if (target < ar[leftPointer] + ar[rightPointer]) {
      rightPointer--;
    } else {
      leftPointer++;
    }
  }
};

// console.log(findPair([1, 2, 3, 4, 5], 7)) //[2, 5]
// console.log(findPair([1, 6, 8, 9, 10], 14)) //[6, 8]

const findTriplets = (arr) => {
  let sortedArr = nums.sort((a, b) => a - b);
  let result = [];
  console.log({ sortedArr });

  for (let index = 0; index < sortedArr.length; index++) {
    targetSum = -sortedArr[index];
    console.log({ targetSum });

    if (index > 0 && sortedArr[index] === sortedArr[index - 1]) {
      continue;
    }

    let leftPointer = index + 1;
    let rightPointer = sortedArr.length - 1;

    while (leftPointer < rightPointer) {
      console.log({ leftPointer, rightPointer });
      if (sortedArr[leftPointer] + sortedArr[rightPointer] === targetSum) {
        result.push([
          sortedArr[leftPointer],
          sortedArr[rightPointer],
          -targetSum,
        ]);
        leftPointer++;
        rightPointer--;

        while (
          leftPointer < rightPointer &&
          sortedArr[leftPointer] === sortedArr[leftPointer - 1]
        ) {
          leftPointer++;
        }

        while (
          leftPointer < rightPointer &&
          sortedArr[rightPointer] === sortedArr[rightPointer + 1]
        ) {
          rightPointer--;
        }
      } else if (sortedArr[leftPointer] + sortedArr[rightPointer] < targetSum) {
        leftPointer++;
      } else {
        rightPointer--;
      }
    }
  }

  return result;
};

// console.log(findTriplets([-3, 0, 1, 2, -1, 1, -2]));

const unsortedLength = (arr) => {
  let leftPointer = 0;
  let rightPointer = arr.length - 1;

  while (leftPointer < arr.length && arr[leftPointer + 1] > arr[leftPointer]) {
    leftPointer++;
  }

  if (leftPointer === arr.length - 1) {
    return 0;
  }

  while (rightPointer > -1 && arr[rightPointer - 1] < arr[rightPointer]) {
    rightPointer--;
  }

  let unSortedArr = arr.slice(leftPointer, rightPointer + 1);
  let unSortedArrMax = Math.max(...unSortedArr);
  let unSortedArrMin = Math.min(...unSortedArr);

  while (leftPointer > 0 && arr[leftPointer - 1] > unSortedArrMin) {
    leftPointer--;
  }

  while (
    rightPointer < arr.length - 1 &&
    arr[rightPointer + 1] < unSortedArrMax
  ) {
    rightPointer++;
  }

  return rightPointer - leftPointer + 1;
};

// console.log(unsortedLength([1, 3, 2, 0, -1, 7, 10])); //5
// console.log(unsortedLength([1, 2, 3])); //0
// console.log(unsortedLength([1, 2, 5, 7, 3, 10, 11, 12])); //3

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare1 = function (s, t) {
  let maxLength,
    resS = [],
    resT = [];

  if (s.length >= t.length) {
    maxLength = s.length;
  } else {
    maxLength = t.length;
  }

  let left = 0,
    right = maxLength - 1;
  console.log({ maxLength });

  while (left <= right) {
    if ([s[left], s[right]].includes("#")) {
      left++;
      right--;
    } else {
      resS.push(s[left]);
      resS.push(s[right]);
        left++;
        right--;
    }

    if ([t[left], t[right]].includes("#")) {
      left++;
      right--;
    } else {
      resT.push(t[left]);
      resT.push(t[right]);
        left++;
        right--;
    }
  }

  if (resT.join("") === resS.join("")) {
    return true;
  } else {
    return false;
  }
};

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
  let maxLength,
    resS = [],
    resT = [];

  for (let index = 0; index < s.length; index++) {
    let curVal = s[index];

    if (curVal === "#") {
      resS.pop();
    } else {
      resS.push(curVal);
    }
  }

  for (let index = 0; index < t.length; index++) {
    let curVal = s[index];

    if (s === "#") {
      console.log({index})
      resT.pop();
    } else {
      resT.push(curVal);
    }
    console.log({resT})
  }

  console.log({ resS, resT });

  if (resS.join("") === resT.join("")) {
    return true;
  } else {
    return false;
  }
};

console.log(backspaceCompare("xywrrmp","xywrrm#p"))
console.log(Infinity - 8)
