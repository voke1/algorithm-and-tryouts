// //Using spread

// const arrayValues = [1, 2, 3, 4]
// const spreadFunction = (x, y, z) => {

//     return x + y + z

// }

// console.log(spreadFunction(...arrayValues))





// // Using For ... of loops


// const displayItems = ['me', 'you', 'them', 'they'];

// const displayArrayItems = () => {

//     for (const items of displayItems) {
//         console.log('items: ', items)
//     }
// }

// displayArrayItems()


// //Using includes method to

// const checkValue = () => {

//     const myString = "meandyou";

//     if (myString.includes('z')) {
//         console.log('yes, it contains')
//     } else {
//         console.log('it does not contain')
//     }
// }

// checkValue()


// //Using some method to
// const checkValues = () => {

//     const myString = ['m', 'e', 'y'];

//     if (myString.some((stringValue) => stringValue === 'm')) {
//         console.log('yes, it contains')
//     } else {
//         console.log('it does not contain')
//     }
// }

// checkValues()

// //Using every method
// const checkEvery = () => {

//     const myString = ['m', 'e', 'y'];

//     if (myString.some((stringValue) => typeof (stringValue) === Number)) {
//         console.log('yes, it contains')
//     } else {
//         console.log('it does not contain')
//     }
// }

// checkEvery()


// //Using filter method

// const checkFilter = () => {
//     console.log('typeof: ', typeof ('m'))
//     const myString = ['m', 'e', 'y', 4, 3];
//     let filterArray = myString.filter((item) => { typeof (item) === 'string' })
//     console.log(filterArray)
// }

// checkFilter()

// function countdown() {
//     // let i; // note we declare let outside of the for loop
//     console.log("Countdown:");
//     for (let i = 5; i >= 0; i--) {
//         setTimeout(function () {
//             console.log(i === 0 ? "GO!" : i);
//         }, (5 - i) * 1000);
//     }
// }
// // countdown();

// //Promise
// function countdown(seconds) {
//     try {
//         return new Promise(function (resolve, reject) {
//             for (let i = seconds; i >= 0; i--) {
//                 setTimeout(function () {
//                     if (i === 13) return reject(new Error("DEFINITELY NOT COUNTING THAT"));
//                     if (i > 0) console.log(i + '...');
//                     else resolve(console.log("GO!"));
//                 }, (seconds - i) * 1000);
//             }
//         });

//     } catch (error) {
//         console.log('error happens!')
//     }
// }

// // countdown(15)

// //Promise using event emitters

// const EventEmitter = require('events').EventEmitter;

// class Countdown extends EventEmitter {
//     constructor(seconds, superstitious) {
//         super();
//         this.seconds = seconds;
//         this.superstitious = !!superstitious;
//     }
//     go() {
//         const countdown = this;
//         return new Promise(function (resolve, reject) {
//             for (let i = countdown.seconds; i >= 0; i--) {
//                 setTimeout(function () {
//                     if (countdown.superstitious && i === 13) {
//                         console.log('reached 14')
//                         return reject(new Error("DEFINITELY NOT COUNTING THAT"));
//                     }
//                     countdown.emit('tick', i);
//                     if (i === 0) resolve();
//                 }, (countdown.seconds - i) * 1000);
//             }
//         });
//     }
// }

// // const newCountdown = new Countdown(13);
// // newCountdown.on('tick', function (i) {
// //     if (i > 0) console.log(i + '...')
// // })
// // newCountdown.go()
// //     .then(() => console.log('GO!'))
// //     .catch(() => console.error(err.message));


// //Iterators and Generators

// const myArray = [1, 2, 3, 4];

// const sampleObject = {
//     item1: 'one',
//     item2: 'two',
//     item3: 'three'
// }

// let count = -1;
// let objectGenerator = {
//     [Symbol.iterator]: function () {
//         return {
//             next: function () {
//                 count++
//                 switch (count) {
//                     case 0: return {
//                         value: sampleObject.item1,
//                         done: false
//                     }
//                     case 1: return {
//                         value: sampleObject.item1,
//                         done: false
//                     }
//                     case 2: return {
//                         value: sampleObject.item2,
//                         done: false
//                     }

//                 }
//             }
//         }
//     }
// }

// // console.log(objectGenerator[Symbol.iterator]().next())

// const myArrayItem = () => {

//     for (let item of objectGenerator) {
//         console.log('%c item:', 'color:blue', item)
//     }
// }

// // myArrayItem()


// // function job() {
// //     return new Promise(function (resolve, reject) {
// //         reject();
// //     });
// // }

// // let promiseone = job();

// // promiseone

// //     .then(function () {
// //         console.log('Success 1');
// //     })

// //     .then(function () {
// //         console.log('Success 2');
// //     })

// //     .then(function () {
// //         console.log('Success 3');
// //     })

// //     .catch(function () {
// //         console.log('Error 1');
// //     })

// //     .then(function () {
// //         console.log('Success 4');
// //     })
// //     .then(function () {
// //         console.log('Success 5');
// //     });


// //Promise test 

// function job(state) {
//     return new Promise(function (resolve, reject) {
//         if (state) {
//             resolve('success');
//         } else {
//             reject('error');
//         }
//     });
// }

// let promise = job(true);

// promise

//     .then(function (data) {
//         console.log(data);

//         return job(false);
//     })

//     .catch(function (error) {
//         console.log(error);

//         return 'Error caught';
//     })

//     .then(function (data) {
//         console.log(data);

//         return job(true);
//     })

//     .catch(function (error) {
//         console.log(error);
//     });


// //SetInterval usuage

// let counter = 0;

// let timer = setInterval(function () {
//     console.log('I am an asynchronous message');

//     counter += 1;

//     if (counter >= 5) {
//         clearInterval(timer);
//     }
// }, 1000);

// console.log('I am a synchronous message');

// //Promise tests

// function job(data) {
//     return new Promise(function (resolve, reject) {
//         if (typeof data !== 'number') {
//             reject('error')

//         } else if (data % 2 !== 0) {
//             setTimeout(function () {
//                 resolve('odd')
//             }, 1000)
//         } else if (data % 2 === 0) {
//             setTimeout(function () {
//                 reject('even')
//             }, 2000)
//         }
//     })
// }


// let p1 = new Promise(function (resolve, reject) {
//     setTimeout(resolve, 500, 'p1');
// });

// let p2 = new Promise(function (resolve, reject) {
//     setTimeout(resolve, 1000, 'p2');
// });

// let p3 = new Promise(function (resolve, reject) {
//     setTimeout(resolve, 1200, 'p3');
// });

// let p4 = new Promise(function (resolve, reject) {
//     setTimeout(reject, 300, 'p4');
// });

// let p5 = new Promise(function (resolve, reject) {
//     setTimeout(resolve, 800, 'p5');
// });

// const promises = [p1.catch(function (err) {}), p2.catch(function(){}), p3.catch(), p4.catch(function(){}), p5.catch()]
// let promiseTwo = Promise.all(promises)
// setTimeout(() => {
//     console.log('promise: ', promiseTwo)

// }, 5000)
// promiseTwo

//     .then(function (data) {
//         console.log('data: ', data)
//         data.forEach(function (data) {
//             console.log(data);
//         });
//     })

//     .catch(function (error) {
//         console.error('error', error);
//     });


//     db ={
//         db: 'dbone',
//         db2: 'dbtwo',
//         db3: 'dbthree'
//     }
//     console.log('using string notation: ', db['db']);



// Promise.resolve('Success!')
//     .then(data => {
//         return data.toUpperCase()
//     })
//     .then(data => {
//         console.log(data)
//         return data
//     })
//     .then(console.log)

// //Javascript methods.

//Math

let number = 4.85353434;
console.log("Math round: ", Math.round(number))

console.log('Random Nunmber: ', Math.random())

// Using reduce
const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];

const total = numbers.reduce((sum, value) => {
    return sum + value;
}, 0)

console.log("Total: ", total)
console.log(numbers.concat([2,1,2,'456','string']))

console.log('slice', numbers.slice(3, 5));
console.log(numbers.splice(3,2, 'string1', 'string2'))
console.log('new numbers:', numbers)