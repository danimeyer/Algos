function bubbleSort(array) {
  // Initiate a counter to keep track of how many times the array has been iterated over
  let counter = 0;

  // The maximum number of times we'll want to go over the array is equal to the length of the array
  while (counter < array.length) {
    // Create the for loop so that the number of elements iterated over shrinks with time, since we know the largest unsorted number will move to the end with each iteration
    for (let i = 0; i < array.length - 1 - counter; i++) {
      let first = array[i];
      let second = array[i + 1];

      // If the two elements aren't in order, swap them in place
      if (first > second) {
        array[i] = second;
        array[i + 1] = first;
      }
    }
    // Increase the counter so the while loop doesn't continue forever
    counter++;
  }

  // Return the final sorted array
  return array;
}
