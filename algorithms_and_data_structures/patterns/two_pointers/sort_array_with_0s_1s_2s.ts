import { log } from '../../linked_list/utils';

// https://www.educative.io/courses/grokking-the-coding-interview/RMBxV6jz6Q0
function sortArray(arr: number[]) {
  let low = 0,
    high = arr.length - 1,
    i = 0;

  while (i <= high) {
    const value = arr[i];
    if (value === 2) {
      [arr[i], arr[high]] = [arr[high], value];
      high--;
    } else if (value === 0) {
      [arr[i], arr[low]] = [arr[low], value];
      low++;
      i++;
    } else i++;
  }
}

export function testArray() {
  const arr1 = [];
  sortArray(arr1);
  log('Expected [], got: ', arr1);

  const arr2 = [1, 0, 2, 1, 0];
  sortArray(arr2);
  log('Expected [0,0,1,1,2], got: ', arr2);

  const arr3 = [2, 2, 0, 1, 2, 0];
  sortArray(arr3);
  log('Expected [0,0,1,2,2,2], got: ', arr3);
}
