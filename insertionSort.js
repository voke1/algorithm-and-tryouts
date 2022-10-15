const insertionSort = (arr) => {
  for (let index = 1; index < arr.length; index++) {
    let numberToInsert = arr[index];
    let sortedElementTracker = index - 1;

    while (
      sortedElementTracker >= 0 &&
      numberToInsert < arr[sortedElementTracker]
    ) {
      arr[sortedElementTracker + 1] = arr[sortedElementTracker];
      sortedElementTracker = sortedElementTracker - 1;
    }

    arr[sortedElementTracker + 1] = numberToInsert;
  }

  return arr;
};

console.log(insertionSort([-6, 20, -2, 4, 9, 8]));
