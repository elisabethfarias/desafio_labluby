function cleanArray(arr) {
  return arr.filter(Boolean);
}

cleanArray([1,2,'', undefined]);