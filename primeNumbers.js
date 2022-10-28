const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  if (num % 2 == 0 || num % 3 == 0) {
    return false;
  } else {
    return true;
  }
};

// console.log("result", isPrime(55));
// console.log("result", isPrime(4));
// console.log("result", isPrime(2));
// console.log("result", isPrime(3));
// console.log("result", isPrime(4));

//  Best Solution
const isPrime2 = (num) => {
  //   console.log(2 % 0);
  let value = num;
  if (value < 2) {
    return false;
  }
  while (num > 2) {
    if (value % (num -1) === 0) {
      return false;
    }
    num--;
  }
  return true;
};

// console.log("result", isPrime2(55));
// console.log("result", isPrime2(4));
// console.log("result", isPrime2(2));
// console.log("result", isPrime2(7));
// console.log("result", isPrime2(5));
// console.log("result", isPrime2(3));
// console.log("result", isPrime2(8));
// console.log("result", isPrime2(10));
