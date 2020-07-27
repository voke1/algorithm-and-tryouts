const x = [1, 2, 3, 4]

x[-1] = -1;

console.log(x[x.indexOf(10000)])


//Sort method
const sortArray = [1, 2, 15, 4, 34, 25]
const result = sortArray.sort((firstValue, secondValue) => firstValue > secondValue);
console.log('result: ', result)


//MIN_VALUE
let i = Number.MIN_VALUE// Behaves like a zero

console.log(i * i);
console.log(i + 1);
console.log(i - 1);
console.log(i / i);


console.log(NaN === NaN);
console.log(true === true)