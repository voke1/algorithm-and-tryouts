const getSequence = (num) => {
  let initialSeq = [0, 1];
  initialSeq.length = num;

  for (let index = 2; index < initialSeq.length; index++) {
    initialSeq.fill(
      initialSeq[index - 2] + initialSeq[index - 1],
      index,
      index + 1
    );
  }

  return initialSeq;
};
// getSequence(7);



const getRecursiveSequence = (num) => {
  if(num < 2){
    return num
  }
  return getRecursiveSequence(num - 1) + getRecursiveSequence(num - 2)
}

console.log("result", getRecursiveSequence(6));
