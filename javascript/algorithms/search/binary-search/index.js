// Binary search
// Problem - Given a sorted array of 'n' elements and a target element 't', find the index of 't' in the
// array. Return -1 if the target element is not found.
// arr = [-5, 2, 4, 6, 10], t = 10 -> Should return 4
// arr = [-5, 2, 4, 6, 10], t = 6 -> Should return 3
// arr = [-5, 2, 4, 6, 10], t = 20 -> Should return -1.

function binarySearch(arr, target, prevIndex = 0) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

    if (arr[middleIndex] === target) return middleIndex;

    if (arr[middleIndex] > target) rightIndex = middleIndex - 1;
    if (arr[middleIndex] < target) leftIndex = middleIndex + 1;
  }

  return -1;
}

const list = [-5, 2, 4, 6, 10];

console.log(binarySearch(list, 10));
console.log(binarySearch(list, 6));
console.log(binarySearch(list, 20));
