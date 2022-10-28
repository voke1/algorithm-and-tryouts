/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  const map = new Map();

  for (let index = 0; index < nums.length; index++) {
    let item = nums[index];

    console.log("checkItem", map.has(item));
    if (map.has(item)) {
      console.log("getItem", map.get(item));
      map.set(item, map.get(item) + 1);
      console.log("gotItem:", map.get(item));
    } else {
      map.set(item, 1);
    }
  }

  console.log({ map });

  for (const [item, value] of map.entries()) {
    console.log({ item, value });
    if (value === 1) {
      return item;
    }
  }
};

// let arr = [1, 2, 4, 3, 3, 4, 4, 2, 1, 9]
// let result = arr.push()
// console.log({arr})
// singleNumber([2,2,1])

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let minStr = Infinity;
  let shortStr = Infinity;
  let s2 = "";
  for (const item of strs) {
    console.log({ item });
    console.log({ shortStr, length: shortStr.length });
    if ((shortStr || shortStr.length) >= item.length) {
      s2 = shortStr;
      shortStr = item;
    } else {
      s2 = item;
    }

    console.log({ shortStr, s2, item });

    let result = compareStrings(shortStr, s2);

    // console.log({
    //   result,
    //   minStr: minStr,
    //   length: minStr.length,
    //   resLength: result.length,
    // });

    if ((minStr.length || minStr) > result.length) {
      minStr = result;
      //   console.log("got here", minStr);
    }

    // console.log({ minStr });
  }
  //   console.log({ minStr });
  return minStr;
};

const compareStrings = (shortStr, s2) => {
  let str = "";
  if (s2 === Infinity) {
    return shortStr;
  }

  for (let index = 0; index < shortStr.length; index++) {
    if (shortStr[index] === s2[index]) {
      str += shortStr[index];
    } else {
      return str;
    }
  }

  return str;
};

// console.log(longestCommonPrefix(["acc", "aaa", "aaba"]));
// console.log(longestCommonPrefix(["acc", "aaa", "aaba"]));
// console.log(true > 1);

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let result = 0;

  const map = new Map([
    ["I", 1],
    ["IV", 4],
    ["IX", 9],
    ["V", 5],
    ["X", 10],
    ["XL", 40],
    ["L", 50],
    ["C", 100],
    ["XC", 90],
    ["D", 500],
    ["CD", 400],
    ["M", 1000],
    ["CM", 900],
  ]);

  s = s.split("");

  let index = 0;
  while (index < s.length) {
    let el = s[index];
    // console.log({index})

    if (el === "I") {
        // console.log({ index });
      if (s[index + 1] === "V") {
        el = "IV";
        // console.log({ result1: result });
        if (map.has(el)) {
          result += map.get(el);
          
        }
        index += 2;
      } else if (s[index + 1] === "X") {
        el = "IX";
        if (map.has(el)) {
          result += map.get(el);
        }
        index += 2;
      }else{
            if (map.has(el)) {
              result += map.get(el);
            }
            index++;
      }
   
    } else if (el === "X") {
      if (s[index + 1] === "L") {
        el = "XL";
        if (map.has(el)) {
          result += map.get(el);
        }
        index += 2;
      } else if (s[index + 1] === "C") {
        el = "XC";
        if (map.has(el)) {
          result += map.get(el);
        }
        index += 2;
      }else{
            if (map.has(el)) {
              result += map.get(el);
            }

            index++;

      }
   
    } else if (el === "C") {
      if (s[index + 1] === "D") {
        el = "CD";
        if (map.has(el)) {
          result += map.get(el);
        }
        index += 2;
      } else if (s[index + 1] === "M") {
        el = "CM";
        if (map.has(el)) {
          result += map.get(el);
        }
        index += 2;
      }else{
            if (map.has(el)) {
              result += map.get(el);
            }
            index++;
      }
   
    } else {
      if (map.has(el)) {
        result += map.get(el);
      }

      index++;
    }
  }



  console.log({ result , index});
  return result;
};

romanToInt("IV");
romanToInt("IX");
romanToInt("III");
