// Bubble sort
// Problem - Given an array of integers, sort the array.
// const arr = [-6, 20, 8, -2, 4]
// bubbleSort(arr) => Should return [-6, -2, 4, 8, 20]

// Bubble sort idea
// Compare adjacent elements in the array and swap the positions if they are not in the intended
// order
// Repeat the instruction as you step through each element in the array
// Once you step through the whole array with no swaps, the array is sorted

function bubbleSort(arr) {
  let isSwapped = false;
  do {
    isSwapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        isSwapped = true;
        const temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
  } while (isSwapped);

  return arr;
}

console.log(bubbleSort([-6, 20, 8, -2, 4]));
