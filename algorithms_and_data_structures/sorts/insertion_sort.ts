import { log } from '../linked_list/utils';

function insertionSort(arr: number[]) {
  for (let i = 1; i < arr.length; i++) {
    const num = arr[i];
    let j = i - 1;
    // Shift items to the right until we find the right index for current num.
    while (j >= 0 && arr[j] > num) {
      arr[j + 1] = arr[j];
      j--;
    }

    // Insert current num in the right index.
    arr[j + 1] = num;
  }

  return arr;
}

export function testInsertionSort() {
  log('Expected [0, 1, 2, 3, 4], got: ', insertionSort([4, 3, 2, 1, 0]));
}
