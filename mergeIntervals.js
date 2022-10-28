// Given a list of intervals, merge all the overlapping intervals to produce a list
// that has only mutually exclusive intervals

const getMergedIntervals = (intervals) => {
  const sortedIntervals = intervals.sort((a, b) => {
    return a[0] - b[0];
  });

  let mergedIntervals = [sortedIntervals.shift()];
  console.log("mergedIntervals:,", mergedIntervals);

  while (sortedIntervals.length) {
    const a = mergedIntervals.pop();
    const b = sortedIntervals.shift();
    // console.log("a:,", a);

    const [aStart, aEnd] = a;
    const [bStart, bEnd] = b;
    //no overlap. we need both
    if (bStart > aEnd) {
      mergedIntervals.push(a);
      mergedIntervals.push(b);

      //merged, once overlapped
    } else {
      const c = [];
      c[0] = Math.min(aStart, bStart);
      c[1] = Math.max(aEnd, bEnd);

      mergedIntervals.push(c);
    }
  }
  return mergedIntervals;
};

// console.log(
//   getMergedIntervals([
//     [1, 4],
//     [7, 9],
//     [2, 5],
//   ])
// );
// console.log(
//   getMergedIntervals([
//     [6, 7],
//     [2, 4],
//     [5, 9],
//   ])
// );
// console.log(
//   getMergedIntervals([
//     [1, 4],
//     [0, 0]

//   ])
// );

/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
  let counter = 0;

 const sortedIntervals = intervals.sort((a, b) => {
   return a[0] - b[0];
 });
console.log({sortedIntervals})

 let mergedIntervals = [sortedIntervals.shift()];
 console.log("mergedIntervals:,", mergedIntervals);
 let c = -Infinity

 while (sortedIntervals.length) {
   const a = mergedIntervals.pop();
   const b = sortedIntervals.shift();
   // console.log("a:,", a);

   const [aStart, aEnd] = a;
   const [bStart, bEnd] = b;
   //no overlap. we need both
   if (bStart >= aEnd) {
     mergedIntervals.push(a);
     mergedIntervals.push(b);

     //merged, once overlapped
   } else {
    
      c = [];
     c[0] = Math.min(aStart, bStart);
     c[1] = Math.min(aEnd, bEnd);

     mergedIntervals.push(c);
     
     
     counter++
     console.log({counter, c, mergedIntervals})
   }
 }
 console.log({final: mergedIntervals})
 return counter;
};

console.log(
  eraseOverlapIntervals([
    [1, 2],
    [2, 3],
    [3, 4],
    [1, 3],
  ])
);

/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var intervalIntersection = function (firstList, secondList) {
  let maxLength = 0,
    mergeList = [];

  while (firstList.length && secondList.length) {
    let a = firstList.shift();
    let b = secondList.shift();

    const [aStart, aEnd] = a;
    const [bStart, bEnd] = b;

    if (bStart > aEnd) {
      secondList.unshift(b);
    } else if (bEnd < aStart) {
      firstList.unshift(a);
    } else {
      let cStart = Math.max(aStart, bStart);
      let cEnd = Math.min(aEnd, bEnd);
      const c = [cStart, cEnd];
      mergeList.push(c);

      if (aEnd < bEnd) {
        secondList.unshift(b);
      } else {
        firstList.unshift(a);
      }
    }

    console.log({ a, b, firstList, secondList });
    console.log({ mergeList });
  }

  console.log({ mergeList });

  return mergeList;
};

// intervalIntersection(
//   [
//     [0, 2],
//     [5, 10],
//     [13, 23],
//     [24, 25],
//   ],
//   [
//     [1, 5],
//     [8, 12],
//     [15, 24],
//     [25, 26],
//   ]
// );

// intervalIntersection([
//   [1, 3],
//   [5, 9],
// ], []);
