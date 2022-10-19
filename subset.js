// /**
//  * @param {number[]} nums
//  * @return {number[][]}
//  */
// var subsets = function (nums, depth = 0, subset = [], results = []) {
//     console.log({subset, depth, results, nums})
//   if (depth === nums.length) {
//     return results.push(subset);
//   } else {
//     subsets(nums, depth + 1, subset, results);
//     subsets(nums, depth + 1, [...subset, nums[depth]], results);
//   }

//   return results;
// };

//iterative solution;
var subsets = function (nums) {
  const res = [[]];
  const stack = [[[], 0]];

  while (stack.length) {
    const [prev, start] = stack.pop();
    console.log({ prev, start, stack });
    for (let i = start; i < nums.length; i++) {
      const newElem = [...prev, nums[i]];

      stack.push([newElem, i + 1]);
      res.push(newElem);
      console.log({ newElem, stack, res });
    }
  }
  return res;
};

let result = 1;

const factorial = (n) => {
  

  if (n === 1) {
    return n;
  }

return factorial(n - 1) * n
};

// subsets([1, 2, 3]);
factorial(5)
