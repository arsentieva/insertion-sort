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

/*
! Algo explication
There are a few key pieces to point out in the above solution before moving forward:

1. The outer for loop starts at the 1st index, not the 0th index, and moves to the right.

2. The inner for loop starts immediately to the left of the current element, and moves to the left.

3. The condition for the inner for loop is complicated, and behaves similarly to a while loop!

   - It continues iterating to the left toward j = 0, only while the currElement is less than arr[j].
   - It does this over and over until it finds the proper place to insert currElement, and then we exit the inner loop!
4. When shifting elements in the sorted region to the right, it does not replace the value at their old index! If the input array is [1, 2, 4, 3], and currElement is 3, after comparing 4 and 3, but before inserting 3 between 2 and 4, the array will look like this: [1, 2, 4, 4].

*/

console.log(insertionSort([6, 4, 5, 6, 3, 7]));

module.exports = {
  insertionSort,
};
