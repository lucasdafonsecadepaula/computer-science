// Insertion sort idea
// Virtually split the array into a sorted and an unsorted part
// Assume that the first element is already sorted and remaining elements are unsorted
// Select an unsorted element and compare with all elements in the sorted part
// If the elements in the sorted part is smaller than the selected element, proceed to the next
// element in the unsorted part. Else, shift larger elements in the sorted part towards the right.
// Insert the selected element at the right index
// Repeat till all the unsorted elements are placed in the right order

function insertSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let numberToInsert = arr[i];
    let j = i - 1; // indexOfTheSortedElement

    while (j >= 0 && arr[j] > numberToInsert) {
      arr[j + 1] = arr[j];
      j -= 1;
    }

    arr[j + 1] = numberToInsert;
  }
  return arr;
}

console.log(insertSort([-2, 20, 8, -6, 4]));
