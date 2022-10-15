//Bubble SOrt
const bubbleSort = (arr) => {
  let swapped;
  do {
    swapped = false;
    for (let index = 0; index < arr.length - 1; index++) {
      if (arr[index] > arr[index + 1]) {
        let tempValue = arr[index];
        arr[index] = arr[index + 1];
        arr[index + 1] = tempValue;
        swapped = true;
      }
    }
  } while (swapped);

  return arr;
};

console.log(bubbleSort([-6, 20, 8, -2, 4, 9]));
