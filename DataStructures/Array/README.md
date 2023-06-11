Array have fixed size
Array have same type

To create dinamic arrays, we can create a function to check if the next block of
the memory is already allocated for something else, if is we can recreate the array
in other place in the memory, and release the memory of the first array, and if isn't
we can just extend the allocated memory for the array;

To create a array with different types we can pick the type that require the biggest
bit allocation and supose that all the other items in the array is the same type as
the biggest one. That way we can make sure that we can access all the indexes.
this action is called by "boxing" the size.

algorithmic complexity const array = [1, 2, 3]

array[0] // O(1)

array.insertAt(4, 0) // O(n)

array.deletingAt(2) // O(n)

array.insertEnd(4) // O(1)

array.deletingEnd(2) // O(1)

array[0] = 8 // O(1)
