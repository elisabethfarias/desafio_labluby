function compareArrays(arr1, arr2) {
  return JSON.stringify(arr1)==JSON.stringify(arr2);
}

compareArrays([1,2,3,4], [1,2,3,4]);
