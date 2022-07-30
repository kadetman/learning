import { log } from '../linked_list/utils';

function countingSort(arr: number[], min: number, max: number): number[] {
  const counts = [];
  // Initialize counts with 0.
  for (let i = min; i <= max; i++) counts[i] = 0;
  // Update counts with actual occuriences of nums in the arr.
  for (let i = 0; i < arr.length; i++) counts[arr[i]]++;

  let next = 0;
  for (let i = min; i <= max; i++) {
    // Place numbers into sorted positions in the arr.
    while (counts[i]--) arr[next++] = i;
  }

  return arr;
}

export function testCountingSort() {
  log(
    'Expected [0, 0, 2, 3, 4, 4, 5], got: ',
    countingSort([4, 3, 5, 4, 0, 2, 0], 0, 5)
  );
}
