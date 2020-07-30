//Using spread

const arrayValues = [1, 2, 3, 4]
const spreadFunction = (x, y, z) => {

    return x + y + z

}

console.log(spreadFunction(...arrayValues))





// Using For ... of loops


const displayItems = ['me', 'you', 'them', 'they'];

const displayArrayItems = () => {

    for (const items of displayItems) {
        console.log('items: ', items)
    }
}

displayArrayItems()


//Using includes method to

const checkValue = () => {

    const myString = "meandyou";

    if (myString.includes('z')) {
        console.log('yes, it contains')
    } else {
        console.log('it does not contain')
    }
}

checkValue()


//Using some method to
const checkValues = () => {

    const myString = ['m', 'e', 'y'];

    if (myString.some((stringValue) => stringValue === 'm')) {
        console.log('yes, it contains')
    } else {
        console.log('it does not contain')
    }
}

checkValues()

//Using every method
const checkEvery = () => {

    const myString = ['m', 'e', 'y'];

    if (myString.some((stringValue) => typeof (stringValue) === Number)) {
        console.log('yes, it contains')
    } else {
        console.log('it does not contain')
    }
}

checkEvery()


//Using filter method

const checkFilter = () => {
    console.log('typeof: ', typeof ('m'))
    const myString = ['m', 'e', 'y', 4, 3];
    let filterArray = myString.filter((item) => { typeof (item) === 'string' })
    console.log(filterArray)
}

checkFilter()

function countdown() {
    // let i; // note we declare let outside of the for loop
    console.log("Countdown:");
    for (let i = 5; i >= 0; i--) {
        setTimeout(function () {
            console.log(i === 0 ? "GO!" : i);
        }, (5 - i) * 1000);
    }
}
// countdown();

//Promise
function countdown(seconds) {
    try {
        return new Promise(function (resolve, reject) {
            for (let i = seconds; i >= 0; i--) {
                setTimeout(function () {
                    if (i === 13) return reject(new Error("DEFINITELY NOT COUNTING THAT"));
                    if (i > 0) console.log(i + '...');
                    else resolve(console.log("GO!"));
                }, (seconds - i) * 1000);
            }
        });

    } catch (error) {
        console.log('error happens!')
    }
}

// countdown(15)

//Promise using event emitters

const EventEmitter = require('events').EventEmitter;

class Countdown extends EventEmitter {
    constructor(seconds, superstitious) {
        super();
        this.seconds = seconds;
        this.superstitious = !!superstitious;
    }
    go() {
        const countdown = this;
        return new Promise(function (resolve, reject) {
            for (let i = countdown.seconds; i >= 0; i--) {
                setTimeout(function () {
                    if (countdown.superstitious && i === 13) {
                        console.log('reached 14')
                        return reject(new Error("DEFINITELY NOT COUNTING THAT"));
                    }
                    countdown.emit('tick', i);
                    if (i === 0) resolve();
                }, (countdown.seconds - i) * 1000);
            }
        });
    }
}

const newCountdown = new Countdown(13);
newCountdown.on('tick', function (i) {
    if (i > 0) console.log(i + '...')
})
newCountdown.go()
    .then(() => console.log('GO!'))
    .catch(() => console.error(err.message));