import { log } from '../../linked_list/utils';

// https://www.educative.io/courses/grokking-the-coding-interview/RMyRR6wZoYK
function getMaximum(arr: number[]): number {
  if (!arr.length) return -1;

  let start = 0,
    end = arr.length - 1;
  while (start < end) {
    const mid = Math.floor(start + (end - start) / 2);
    if (arr[mid] < arr[mid + 1]) start = mid + 1;
    // mid can point to the maximum or to a descending number after the maximum.
    else end = mid;
  }

  return arr[start];
}

export function testMaximum() {
  log('Expected -1, got: ', getMaximum([]));
  log('Expected 12, got: ', getMaximum([1, 3, 8, 12]));
  log('Expected 12, got: ', getMaximum([1, 3, 8, 12, 4, 2]));
  log('Expected 8, got: ', getMaximum([3, 8, 3, 1]));
  log('Expected 10, got: ', getMaximum([10, 9, 8]));
}
