const jumpingOnClouds = (array) => {
    const indexArray = [];
    for (let index = 0; index <= array.length; index++) {
        // if (array[index] !== 0 && index === 1) index += 2;
         if (array[index] === 0) {
            indexArray.push(index)
            index += 2;
            console.log(indexArray)
        } else {
            index -= 1;
        }
    }
    let sum = indexArray.reduce(function (a, b) {
        return a + b;
    }, 0);

    return sum;

}

jumpingOnClouds([0, 0, 0, 0, 1, 0])