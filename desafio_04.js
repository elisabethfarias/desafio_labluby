function convertArrayToObject(arr) {
  return Object.fromEntries(arr);
}

convertArrayToObject([["c",2],["d",4]]);