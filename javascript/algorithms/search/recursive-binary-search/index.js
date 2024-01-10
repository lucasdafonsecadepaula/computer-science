// Recursive Binary search
// Problem - Given a sorted array of 'n' elements and a target element 't', find the index of 't' in the
// array. Return -1 if the target element is not found.
// arr = [-5, 2, 4, 6, 10], t = 10 -> Should return 4
// arr = [-5, 2, 4, 6, 10], t = 6 -> Should return 3
// arr = [-5, 2, 4, 6, 10], t = 20 -> Should return -1.

function search(arr, target, leftIndex, rightIndex) {
  if (leftIndex > rightIndex) return -1;

  let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

  if (arr[middleIndex] === target) return middleIndex;

  if (arr[middleIndex] > target) {
    return search(arr, target, leftIndex, middleIndex - 1);
  }

  if (arr[middleIndex] < target) {
    return search(arr, target, middleIndex + 1, rightIndex);
  }
}

function recursiveBinarySearch(arr, target) {
  return search(arr, target, 0, arr.length - 1);
}

const list = [-5, 2, 4, 6, 10];

console.log(recursiveBinarySearch(list, 10));
console.log(recursiveBinarySearch(list, 6));
console.log(recursiveBinarySearch(list, 20));

// function recursiveBinarySearch(arr, target, offset = 0) {
//   if (arr.length === 0) return -1;

//   const middleIndex = Math.floor((arr.length - 1) / 2);

//   if (arr[middleIndex] === target) return middleIndex + offset;

//   if (arr[middleIndex] > target) {
//     return recursiveBinarySearch(arr.slice(0, middleIndex), target, 0);
//   }

//   if (arr[middleIndex] < target) {
//     return recursiveBinarySearch(
//       arr.slice(middleIndex + 1),
//       target,
//       middleIndex + 1
//     );
//   }
// }
