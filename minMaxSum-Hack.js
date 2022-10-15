function miniMaxSum(arr) {
  // Write your code here

  let minValue = 0;
  let maxValue = 0;
  let sortArray = arr.sort((a, b) => a - b);

  for (let index = 0; index < sortArray.length; index++) {
    if (index <= 3) {
      minValue += sortArray[index];
    }
    if (index >= sortArray.length - 4) {
      maxValue += sortArray[index];
    }
  }
  console.log(minValue, maxValue);
}
