// Complete the simpleArraySum function in the editor below. It must return the sum of the array elements as an integer.

// simpleArraySum has the following parameter(s):

// ar: an array of integers

function simpleArraySum(ar) {
  // Write your code here
  return ar.reduce((a, b) => a + b, 0);
}
