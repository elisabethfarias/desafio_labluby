function checkCommonelementsInArray(arr1, arr2) {
  return arr1.filter(value => arr2.includes(value))
}

checkCommonelementsInArray([6, 8], [8, 9]);
