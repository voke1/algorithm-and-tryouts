// // //Sliding Window fixed length;
// // //maximum sum of any contiguous subarray of size ‘k’.
// // getMaxSum = (arr, K) => {
// //   let currentSum = 0;
// //   let maximumSum = -Infinity;

// //   for (let i = 0; i < arr.length; i++) {
// //     currentSum = currentSum + arr[i];
// //     if (i >= K - 1) {
// //       maximumSum = Math.max(currentSum, maximumSum);
// //       currentSum = currentSum - arr[i - (K - 1)];
// //     }
// //   }

// //   return maximumSum;
// // };

// // // console.log(getMaxSum([2, 1, 5, 1, 3, 2], 3));
// // // console.log(getMaxSum([2, 3, 4, 1, 5], 2));

// // // Given an array of positive integers and a number ‘S,’ find the length of the smallest contiguous subarray whose sum is greater than or equal to ‘S’. Return 0 if no such subarray exists.

// // getMinArrayLength = (arr, S) => {
// //   let minLength = Infinity;
// //   let windowSum = 0;
// //   let windowStart = 0;

// //   for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
// //     windowSum += arr[windowEnd]; // add the next element

// //     // shrink the window as small as possible until the 'window_sum' is smaller than 's'
// //     while (windowSum >= S) {
// //       minLength = Math.min(minLength, windowEnd - windowStart + 1);
// //       windowSum -= arr[windowStart];
// //       windowStart += 1; // sliding the window
// //     }
// //   }

// //   if (minLength === Infinity) {
// //     return 0;
// //   }
// //   return minLength;
// // };

// // // console.log(getMinArrayLength([2, 1, 5, 2, 3, 2], 7));

// // // Given a string, find the length of the longest substring in it with no more than K distinct characters.
// // getMaxSubstringLenght = (value, K) => {
// //   // maxSub
// //   newArray = [];
// //   //convert string to array;
// //   let arr = value.split("");

// //   //loop through array
// //   for (let index = 0; index < arr.length; index++) {
// //     if (index <= K -1) {
// //       newArray.push(arr[index]);
// //     }

// //     countUnique = new Set(newArray).size;
// //     console.log("count:", countUnique);
// //     if(index > K -1){

// //       if (newArray.includes(arr[index]) && countUnique >= K) {
// //         newArray.push(arr[index]);
// //       }
// //     }
// //   }

// //   return newArray.join("");
// // };

// // // console.log(getMaxSubstringLenght("araaci", 1));

// // //Baseball Game
// // calPoints = function(ops){
// //   let sum =0;
// //   let newArray = [];

// //   for(let i = 0; i < ops.length; i++){
// //     if(ops[i] !== "+" && ops[i] !== "D" && ops[i] !== "C"){
// //       newArray.push(ops[i])
// //     }

// //     if(ops[i] == "+"){
// //     numArray =  newArray.map((element, index)=> {
// //         return parseInt(element)
// //       })

// //      addValue = numArray[numArray.length - 1] + numArray[numArray.length - 2]
// //       newArray.push(addValue)
// //     }

// //     if(ops[i] == "D"){
// //       dValue = newArray[newArray.length - 1] * 2;
// //       newArray.push(dValue);
// //     }

// //     if(ops[i] == "C"){
// //        newArray.pop([newArray.length -1])
// //     }
// //   }

// //   for(let i = 0; i < newArray.length; i++){
// //     num = parseInt(newArray[i])
// //     sum += num;
// //   }

// //   return sum;

// // }

// // // console.log(calPoints(["5", "2", "C", "D", "+"]));
// // // console.log(calPoints(["5", "-2", "4", "C", "D", "9", "+", "+"]));
// // // console.log(calPoints(["1"]));

// // checkChar = (arr)=> {
// //   let array1 = arr.split("")
// //   let array2 = [];
// //   for(let i = 0; i < array1.length; i ++){
// //     let item2 = array2[array2.length - 1];

// //     if(array1[i] == "[" || array1[i] == "{" || array1[i] == "("){
// //       array2.push(array1[i]);

// //     }
// //       if (
// //         (item2 == "[" && array1[i] == "]") ||
// //         (item2 == "{" && array1[i] == "}") ||
// //         (item2 == "(" && array1[i] == ")")
// //       ) {
// //         array2.pop();
// //       }
// //   }

// //   return (array2.length ? "invalid" : "valid")
// // }

// // sayHi = ()=> {
// //   console.log(name);
// //   console.log(age);
// //   var name = "Lydia";  //partially hoisted
// //   let age = 21         //not hoisted
// // }
// // b()

// // function b(){
// //   console.log("Called b!")
// // };

// // // console.log(a);

// // // var a = 'Hello World!';

// // // console.log(a);

// // var a = 2; var b = 3; var c = 5;
// // // 4 = c;
// // // console.log("A:", Number("="))
// // // console.log("fahjhlse" || "true")

// // if(a){
// //   console.log("A:", a)
// // }

// // sayHi()
// //  var a;
// // console.log("THis:", global)
// // console.log("THis:", a);
// // console.log(checkChar("()[]"))

// // var object = {}
// // object["firstName"] = "Voke";
// // object["lastName"] = "Olomu";
// // console.log("Created Object: ", object.__proto__ = {name: 'GO'})

// // const greet = 'hello';
// // const greet2 = 'Hola!';

// // console.log("greet:", greet)

// // function greetHello (){
// //   console.log("GREET")
// // }

// // var anonGreet = function greet(){
// //   console.log("GREET SEOND")

// // }

// // greetHello.language = "English"
// // console.log(anonGreet)

// // const x = { greeting : "Hi"};
// // const y =x;

// // x.greeting =  "Hello"

// // // console.log(x)
// // // console.log(y);

// // const chaneGreeting = (obj)=>{
// //   obj.greeting = "Hola!"
// //   // console.log(obj)
// // }

// // chaneGreeting(y)

// // // console.log(x);
// // // console.log(y);

// // function buildFunctions(){
// //   var arr = [];

// //   for(var i = 0; i < 3; i++){
// //     let index = i
// //     arr.push(function(){
// //       console.log(index)
// //     })
// //   }

// //   return arr;
// // }

// // var fs = buildFunctions();
// // fs[0]()
// // fs[1]()
// // fs[2]();

// // var person = {
// //   name: 'voke',
// //   surname: 'olomu',

// // }

// // king = {
// //   name: "voke",
// //   surname: "olomu",
// // };

// // let switchX = 1;
// // function getPerson(){
// //   console.log("Person")
// //     while (switchX < 10) {
// //       console.log("Value is less than 10");
// //       switchX++;
// //     }
// //     return switchX

// // }

// // console.log("props: ", getPerson());

// // let figure1 = 1;
// // let figure2 = 1;
// // let result1;
// // let result2;
// // result1 = figure1++
// // result2 = ++figure2
// // console.log("RESULT1: ",result1, "\nRESULT2: ", figure2)

// // let switchY = 10;
// //  switch(switchY){
// //   case 1:
// //     console.log(switchY)
// //   break; // or use return. any which works
// //   case 2:
// //     console.log(switchY)
// //   break;
// //   case 3:
// //     console.log(switchY)
// //   break;
// //   default:

// //     console.log("DEFAULT:")

// //   break;
// //  }

// // console.log(Math.random() *2)
// //
// // function rand(x, y){
// //   Math.random() * x;
// //   Math.random() * y;

// // }

// // number = 0;
// // console.log(number++);
// // console.log(++number);
// // console.log(number);

// // for(let i = 0; i < 4; i++){
// //   console.log("I: ", i)
// //   let y = ++number
// //   console.log("Y:", y)
// // }

// // String.prototype.giveLydiaPizza = () => {
// //   return "Just give Lydia pizza already!";
// // };

// // const name1 = new String();

// // console.log(name1.giveLydiaPizza())

// // const aid = {};
// // const bix = { key: "bix" };
// // const cix = { key: "cix" };

// // aid[{ key: "bix" }] = 123;
// // aid[{ key: "cix" }] = 456;

// // console.log(aid[bix]);

// // const foo = () => console.log("First");
// // const bar = () => setTimeout(() => console.log("Second"));
// // const baz = () => console.log("Third");

// // bar();
// // foo();
// // baz();

// // const numberss = [1, 2, 3];
// // numberss[10] = 11;
// // console.log(numberss);

// // (() => {
// //   let x;
// //   let y;
// //   try {
// //     throw new Error();
// //   } catch (x) {
// //     x = 1;
// //      y = 2;
// //     console.log(x);
// //     console.log("Y",y);
// //   }
// //   console.log("X",x);
// //   console.log("YS",y);
// // })();

// (() => {
//   let x = 10;
// if(x = 10){

//   (()=>y = 10)()
// }

// })();

// console.log(typeof x);
// console.log(typeof y);

// let num = 10;

// const increaseNumber = () => num++;
// const increasePassedNumber = (number) => number++;

// const num1 = increaseNumber();
// const num2 = increasePassedNumber(num1);

// console.log(num1);
// console.log(num2);

///Capitalize Words In A Sentence
// const str = "the quick brown fox jumps over a lazy dog";
// console.log(str);

// const capitalizeWords = (str) => {
//   let result = str.split("");
//   for (let index = 0; index < result.length; index++) {
//     result[0].toUpperCase();

//     if (result[index] == " ") {
//       console.log(result);
//       result[index + 1] = result[index + 1].toUpperCase();
//     }
//   }
//   // console.log(result)
//   let capitalizeStr = result.join("");
//   console.log(capitalizeStr);
//   return capitalizeStr;
// };

// capitalizeWords(str);

// let reg = /^[a-zA-Z0-9]|(?<=\s)./g
// let result = str.replace(reg, (match)=> match.toUpperCase());
// console.log('result:', result)

// for(let item of str){
//   console.log('item:',item)
// }

// let testItem = '12345'

// console.log(testItem.split("").reduce((a, b)=> Number(a) + Number(b), 0))

// const obj1 = {
//   name: "voke",
//   lastName: "olomu",
//   age: 45,
// }

// for(let value in obj1){
//   console.log('item', value)
// }

// function* generateId(){
//   let i = 0
//   yield i
//   i++
//   yield i
//   i++
//   yield i
//   i++
//   yield i
//   i++
//   yield i
//   i++
// }

// let item = generateId();
// console.log(item.next());
// console.log(item.next());
// console.log(item.next());
// console.log(item.next());
// console.log(item.next());
// console.log(item.next());
// console.log(item.next());

// capitalizeWords2(str);

// const tesSet = new Set();

// console.log(tesSet.add(4))
// console.log(tesSet.clear());
// console.log(tesSet.add());
// console.log(tesSet.size);
// console.log(tesSet.has(3));
// console.log(tesSet.has());
// console.log(tesSet.add(3));
// console.log(tesSet.delete(3));
// console.log(tesSet);

const testMap = new Map([['b', 1], [8, 2],
['c', 3]])

console.log(testMap)


