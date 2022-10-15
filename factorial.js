const getFactorial = (num) => {
  let factorial = num;
  if (num == 0) {
    return 1;
  }
  while (num !== 1) {
    factorial *= num - 1;
    num--;
  }
  return factorial;
};

// console.log("result", getFactorial(0));
// console.log("result", getFactorial(1));
// console.log("result", getFactorial(2));
// console.log("result", getFactorial(3));
// console.log("result", getFactorial(4));

const getRecursiveFactorial = (num) => {
  if (num === 0) {
    return 1;
  }
  return getRecursiveFactorial(num - 1) * num;
};

// console.log("result", getRecursiveFactorial(0));
// console.log("result", getRecursiveFactorial(1));
console.log("result", getRecursiveFactorial(2));
console.log("result", getRecursiveFactorial(4));
console.log("result", getRecursiveFactorial(5));
