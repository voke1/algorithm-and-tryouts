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
  let mergeCounter = 0,
    index = 0,
    maxVal = -Infinity,
    counter = 0;

  const sortedIntervals = intervals.sort((a, b) => a[0] - b[0]);

  while (index < sortedIntervals.length) {
    if (sortedIntervals[index + 1]) {
      let a = sortedIntervals[index];
      let b = sortedIntervals[index + 1];

      const [aStart, aEnd] = a;
      const [bStart, bEnd] = b;

      if (bStart < aEnd) {
        let maxVal = Math.max(aEnd, bEnd);
        if(aEnd === bEnd){
          sortedIntervals.splice(index, 1);

        }else{
           if (maxVal === aEnd) sortedIntervals.splice(index, 1);
           if (maxVal === bEnd) sortedIntervals.splice(index + 1, 1);

        }
         
        console.log({maxVal, aEnd, bEnd})
        counter++;
        index = 0;
        continue;
      }
    }
    index++;
  }

  return counter;
};

console.log(
  eraseOverlapIntervals([
    [1, 2],
    [1, 2],
    [1, 2],
  ])
);
