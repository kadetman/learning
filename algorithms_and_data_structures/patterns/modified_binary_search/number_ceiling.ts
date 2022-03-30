import { log } from '../../linked_list/utils';

// https://www.educative.io/courses/grokking-the-coding-interview/qA5wW7R8ox7
function getCeiling(arr: number[], key: number): number {
  let start = 0,
    end = arr.length - 1;
  if (end < 0 || arr[end] < key) return -1;

  while (start <= end) {
    const middle = Math.floor(start + (end - start) / 2);
    if (arr[middle] === key) return middle;

    if (arr[middle] < key) start = middle + 1;
    else end = middle - 1;
  }

  return start;
}

export function testCeiling() {
  log('Expected -1, got: ', getCeiling([], 1));
  log('Expected 1, got: ', getCeiling([4, 6, 10], 6));
  log('Expected 4, got: ', getCeiling([1, 3, 8, 10, 15], 12));
  log('Expected -1, got: ', getCeiling([4, 6, 10], 17));
  log('Expected 0, got: ', getCeiling([4, 6, 10], -1));
}

