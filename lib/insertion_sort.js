function insertionSort(list) {
  // the `i` loop will iterate through every element of the array
  // we begin at i = 1, because we can consider the first element of the array as a
  // trivially sorted region of only one element
  // insertion sort allows us to insert new elements anywhere within the sorted region
  for (let i = 1; i < list.length; i++) {
    // grab the first element of the unsorted region
    let currentValue = list[i];
    let j = 0;

    // the `j` loop will iterate left through the sorted region,
    // looking for a legal spot to insert currElement
    for (j = i - 1; j >= 0 && currentValue < list[j]; j--) {
      // keep moving left while currElement is less than the j-th element

      list[j + 1] = list[j];
      // the line above will move the j-th element to the right,
      // leaving a gap to potentially insert currElement
    }
    // insert currElement into that gap
    list[j + 1] = currentValue;
  }
  return list;
}

console.log(insertionSort([6, 4, 5, 6, 3, 7]));

module.exports = {
  insertionSort,
};
