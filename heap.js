// const compareFn = (a, b) => {
//   if (a < b) return -1;
//   if (a > b) return 1;
//   return 0;
// };

//Initial Version
// class MinHeap {
//   #heap = [];
//   #compare;

//   constructor(defaultCompare = compare) {
//     // this.#heap = [];
//     this.#compare = defaultCompare;
//   }

//   get size() {
//     return this.#heap.length;
//   }

//   get isEmpty() {
//     return size === 0;
//   }

//   print() {
//     console.log(this.#heap);
//   }

//   getParentIndex(index) {
//     return Math.floor((index - 1) / 2);
//   }

//   getRightIndex(index) {
//     return Math.floor(2 * index + 2);
//   }

//   getLeftIndex(index) {
//     return Math.floor(2 * index + 1);
//   }

//   insert(value) {
//     if (value != null && value != undefined) {
//       this.#heap.push(value);
//       let currentIndex = this.size - 1;
//       while (currentIndex > 0) {
//         let parentIndex = this.getParentIndex(currentIndex);
//         if (this.#heap[currentIndex] < this.#heap[parentIndex]) {
//           [this.#heap[currentIndex], this.#heap[parentIndex]] = [
//             this.#heap[parentIndex],
//             this.#heap[currentIndex],
//           ];
//         }
//         currentIndex = parentIndex;
//       }

//       return true;
//     }

//     return false;
//   }

//   extract() {
//     if (this.size === 0) return null;
//     if (this.size === 1) return this.#heap.shift();

//     const removedNode = this.#heap.shift();
//     // this.siftDown(0);

//     console.log("heap Now: ", this.#heap);
//     return removedNode;
//   }

//   siftDown(index) {
//     let currentIndex = index;
//     let leftIndex = this.getLeftIndex(index);
//     let rightIndex = this.getRightIndex(index);

//     if (
//       leftIndex < this.size &&
//       this.#heap[currentIndex] > this.#heap[leftIndex]
//     ) {
//       currentIndex = leftIndex;
//     }

//     if (
//       rightIndex < this.size &&
//       this.#heap[currentIndex] > this.#heap[rightIndex]
//     ) {
//       currentIndex = rightIndex;
//     }

//     if (currentIndex != index) {
//       [this.#heap[currentIndex], this.#heap[index]] = [
//         this.#heap[index],
//         this.#heap[currentIndex],
//       ];

//       this.siftDown(currentIndex);
//     }
//   }
// }

// console.log(neItem.name2);
// console.log(neItem.school);
// console.log(MinHeap.name2);
// console.log('school',MinHeap.school);
// console.log(neItem.name);
// console.log('surname',MinHeap.surName);
// console.log(MinHeap);
// console.log(neItem);

// const arr = [2, 3];
// console.log(arr.shift())
// console.log(arr);

// const obj1 = {name: 'voke', surName: 'olomu'}
// console.log(ar2);

// class MinHeap {
//   constructor(defaultCompare = compareFn) {
//     this.compare = defaultCompare;
//     this.heap = [];
//   }

//   get size() {
//     return this.heap.length;
//   }

//   get isEmpty() {
//     return this.size === 0;
//   }

//   getParentIndex(index) {
//     return Math.floor((index - 1) / 2);
//   }

//   getLeftIndex(index) {
//     return Math.floor(2 * index + 1);
//   }

//   getRightIndex(index) {
//     return Math.floor(2 * index + 2);
//   }

//   insert(value) {
//     if (value) {
//       this.heap.push(value);

//       this.siftUp(this.size - 1);
//     }
//   }

//   siftUp(index) {
//     let parentIndex = this.getParentIndex(index);

//     while (
//       index > 0 &&
//       this.compare(this.heap[parentIndex], this.heap[index]) === 1
//     ) {
//       this.swap(parentIndex, index);
//       index = parentIndex;
//       parentIndex = this.getParentIndex(index);
//     }
//   }

//   extract() {
//     if (this.isEmpty) return null;

//     if (this.size === 1) return this.heap.shift();

//     let value = this.heap.shift();

//     this.siftDown(0);

//     return value;
//   }

//   siftDown(index) {
//     let currentIndex = index;
//     let leftIndex = this.getLeftIndex(currentIndex);
//     let rightIndex = this.getRightIndex(currentIndex);

//     if (
//       leftIndex < this.size &&
//       this.compare(this.heap[currentIndex], this.heap[leftIndex]) === 1
//     ) {
//       currentIndex = leftIndex;
//     }

//     if (
//       rightIndex < this.size &&
//       this.compare(this.heap[currentIndex], this.heap[rightIndex]) === 1
//     ) {
//       currentIndex = rightIndex;
//     }

//     if (currentIndex !== index) {
//       this.swap(index, currentIndex);
//       this.siftDown(currentIndex);
//     }
//   }

//   swap(parent, child) {
//     [this.heap[parent], this.heap[child]] = [
//       this.heap[child],
//       this.heap[parent],
//     ];
//   }

//   get top() {
//     return this.isEmpty ? null : this.heap[0];
//   }

//   print() {
//     this.#printNode(0);
//   }

//   #printNode(i = 0, spaceCount = 0, label = "*") {
//     if (i >= this.size) return;

//     console.log(`${" ".repeat(spaceCount)}${label}: ${this.heap[i]} [${i}]`);

//     this.#printNode(this.getLeftIndex(i), spaceCount + 3, "L");
//     this.#printNode(this.getRightIndex(i), spaceCount + 3, "R");
//   }
// }

// class MaxHeap extends MinHeap {
//   constructor(defaultCompare = compareFn) {
//     super((a, b) => defaultCompare(b, a));
//   }
// }

const compareFn = (a, b) => {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
};

class HeapNode {
  constructor(val, freq) {
    this.val = val;
    this.freq = freq;
  }
}

class MaxHeap {
  constructor(defaultCompare = compareFn) {
    this.compare = defaultCompare;
    this.heap = [];
  }

  get size() {
    return this.heap.length;
  }

  get isEmpty() {
    return this.size === 0;
  }

  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  getLeftIndex(index) {
    return Math.floor(2 * index + 1);
  }

  getRightIndex(index) {
    return Math.floor(2 * index + 2);
  }

  insert(value) {
    if (value !== null && value !== undefined) {
      this.heap.push(value);

      this.siftUp(this.size - 1);

      return true;
    }
    return false;
  }

  siftUp(index) {
    let parentIndex = this.getParentIndex(index);

    while (
      index > 0 &&
      this.compare(this.heap[parentIndex].freq, this.heap[index].freq) === -1
    ) {
      this.swap(parentIndex, index);
      index = parentIndex;
      parentIndex = this.getParentIndex(index);
    }
  }

  extract() {
    if (this.isEmpty) return null;

    if (this.size === 1) return this.heap.shift();

    let value = this.heap.shift();
    let lastItem = this.heap.pop();
    this.heap.unshift(lastItem)

    this.siftDown(0);

    return value;
  }

  siftDown(index) {
    let currentIndex = index;
    let leftIndex = this.getLeftIndex(index);
    let rightIndex = this.getRightIndex(index);

 

    if (
      leftIndex < this.size &&
      this.compare(this.heap[currentIndex].freq, this.heap[leftIndex].freq) ===
        -1
    ) {
     
      currentIndex = leftIndex;
    }

    if (
      rightIndex < this.size &&
      this.compare(this.heap[currentIndex].freq, this.heap[rightIndex].freq) ===
        -1
    ) {
      currentIndex = rightIndex;
    }

    if (currentIndex !== index) {
      this.swap(index, currentIndex);
      this.siftDown(currentIndex);
    }
  }

  swap(parent, child) {
    [this.heap[parent], this.heap[child]] = [
      this.heap[child],
      this.heap[parent],
    ];
  }

  top() {
    return this.isEmpty ? null : this.heap[0];
  }

  print() {
    this.#printNode(0);
  }

  #printNode(i = 0, spaceCount = 0, label = "*") {
    if (i >= this.size) return;

    console.log(`${" ".repeat(spaceCount)}${label}: ${this.heap[i]} [${i}]`);

    this.#printNode(this.getLeftIndex(i), spaceCount + 3, "L");
    this.#printNode(this.getRightIndex(i), spaceCount + 3, "R");
  }
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  let result = [];
  let map = new Map();
  let index = 0;
  const maxHeap = new MaxHeap();

  if (nums.length === 1) {
    return [nums[0]];
  }

  if (nums.length === 2) {
    if (nums[0] !== nums[1]) {
      return [nums[0], nums[1]];
    } else {
      return [nums[0]];
    }
  }

  while (index < nums.length) {
    if (map.has(nums[index])) {
      map.set(nums[index], map.get(nums[index]) + 1);
    } else {
      map.set(nums[index], 1);
    }

    index++;
  }

  console.log({ map });

  for (const [val, freq] of map.entries()) {
    let heapNode = new HeapNode(val, freq);
    console.log({ heapNode });

    maxHeap.insert(heapNode);
  }

  console.log({ heap: maxHeap.heap });

  for (let index = 0; index < k; index++) {
    let maxNode = maxHeap.extract();
    console.log({ hap: maxHeap.heap });
    result.push(maxNode.val);
  }

  return result;
};

topKFrequent(
  [
    5, 1, -1, -8, -7, 8, -5, 0, 1, 10, 8, 0, -4, 3, -1, -1, 4, -5, 4, -3, 0, 2,
    2, 2, 4, -2, -4, 8, -7, -7, 2, -8, 0, -8, 10, 8, -8, -2, -9, 4, -7, 6, 6,
    -1, 4, 2, 8, -3, 5, -9, -3, 6, -8, -5, 5, 10, 2, -5, -1, -5, 1, -3, 7, 0, 8,
    -2, -3, -1, -5, 4, 7, -9, 0, 2, 10, 4, 4, -4, -1, -1, 6, -8, -9, -1, 9, -9,
    3, 5, 1, 6, -1, -2, 4, 2, 4, -6, 4, 4, 5, -5,
  ],
  7
);

// class MaxHeap extends MinHeap{
//     constructor(defaultCompare = compare){
//         super()

//     }
// // }

// newHeap.insert(-1);
// newHeap.insert(-2);
// newHeap.insert(-3);
// // newHeap.insert(5);
// // // newHeap.insert(6);
// // // newHeap.insert(3);
// // newHeap.insert(1);
// newHeap.print();
// console.log(newHeap.top)

var calPoints = function (ops) {
  var result = 0;
  let resultArray = [];

  for (let index = 0; index < ops.length; index++) {
    let curVal = ops[index];

    if (curVal == "+") {
      let ans =
        resultArray[resultArray.length - 1] +
        resultArray[resultArray.length - 2];

      resultArray.push(ans);
      continue;
    }

    if (curVal == "C") {
      resultArray.pop();
      continue;
    }
    if (curVal == "D") {
      let ans = resultArray[resultArray.length - 1] * 2;
      resultArray.push(ans);
      continue;
    }

    resultArray.push(ops[index]);
  }

  for (let index = 0; index < resultArray.length; index++) {
    console.log(resultArray[index]);
    result += Number(resultArray[index]);
  }

  console.log({ result });

  return result;
};

// calPoints([5,2,"C","D","+"])
