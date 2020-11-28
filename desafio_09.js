function chunkArray(array, size) {
  let result = []
  for (value of array){
    let lastArray = result[result.length -1 ]
    if(!lastArray || lastArray.length == size){
        result.push([value])
    } else{
        lastArray.push(value)
    }
  }
  return result
}

chunkArray([1, 2, 3, 4, 5], 2);
