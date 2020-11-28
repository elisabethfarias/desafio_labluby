function filterElements(arr, elementsToFilter) {
  let filteredElements = arr.filter(function(element) {
    return !elementsToFilter.includes(element);
  });

  return filteredElements;
}

filterElements([5,4,3,2,5], [5,3]);