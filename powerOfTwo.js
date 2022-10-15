const isPowerOfTwo = (num) => {
  let value = num;
  while (num > 0) {
    if (Math.pow(2, num - 1) === value) {
      return true;
    }
    num--;
  }
  return false;
};

console.log("result", isPowerOfTwo(1));
console.log("result", isPowerOfTwo(4));
console.log("result", isPowerOfTwo(2));
console.log("result", isPowerOfTwo(7));
console.log("result", isPowerOfTwo(5));
console.log("result", isPowerOfTwo(3));
console.log("result", isPowerOfTwo(8));
console.log("result", isPowerOfTwo(10));
