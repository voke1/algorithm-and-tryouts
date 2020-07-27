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