const cartesianProduct = (arr1, arr2) => {
  let productArray = [];

  for (let index = 0; index < arr1.length; index++) {
    for (let j = 0; j < arr2.length; j++) {
      productArray.push([arr1[index], arr2[j]]);
    }
  }

  return productArray;
};

console.log(cartesianProduct([1, 2], [4, 3]));
