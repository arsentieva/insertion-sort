function insertionSort(list) {
  // for i from 1 to length(list) inclusive do:
  for (let i = 1; i < list.length; i++) {
    let value = list[i];
    let j = 0;
    for (j = i - 1; j >= 0 && value < list[j]; j--) {
      list[j + 1] = list[j];
    }
    list[j + 1] = value;
  }
  return list;
}

console.log(insertionSort([6, 4, 5, 6, 3, 7]));

module.exports = {
  insertionSort,
};
