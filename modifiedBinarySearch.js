// Algorithm:

// Find the middle element of the array.
// Check if the middle element is the minimum element
// If the middle element does not satisfy the minimum element condition then apply binary search on the unsorted half of the array.
// Code Implementation in Javascript:

// Step 1: Set left and right values. In this problem, the left value is 0 and the right value is the length of the array.
// Step 2: Find the middle element of the array and check for the unsorted half of the array.

// When the middle value is greater than the rightmost value of the array, it shows that the right half of the array is unsorted, or else the left side is unsorted.

// Step 3: Return the answer. The loop breaks when the left is greater than or equal to the right value. This happens when we have found the minimum element in the array as both left and right are equal we return the left index.


// (i.e.,  [0,1,2,4,5,6,7] might become  [4,5,6,7,0,1,2]).
// Find the minimum element.
// Input: [3,4,5,1,2] 
// Output: 1

const modifiedBinarySearch = (arr)=> {

    let left = 0;
    let right = arr.length -1;

    while(left < right){
        let mid = Math.floor((left + right)/2);
        if(arr[mid] > arr[right]){
            left = mid +1
        }else{
            right = mid;
        }
    }

    return arr[left]
}

let ar = [3, 4, 5, 6, 7, 8, 1, 2]; 
console.log(modifiedBinarySearch(ar))