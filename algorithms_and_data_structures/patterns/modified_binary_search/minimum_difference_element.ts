import { log } from '../../linked_list/utils';

// https://www.educative.io/courses/grokking-the-coding-interview/mymvP915LY9
function getMinimumDifferenceElement(arr: number[], key: number): number {
  if (!arr.length) return -1;

  let start = 0,
    end = arr.length - 1;
  if (arr[start] > key) return arr[start];
  if (arr[end] < key) return arr[en];

  while (start <= end) {
    const mid = Math.floor(start + (end - start) / 2);
    const value = arr[mid];
    if (value === key) return value;
    if (value > key) end = mid - 1;
    else start = mid + 1;
  }

  // start points to the end + 1.
  const startDiff = arr[start] - key;
  const endDiff = key - arr[end];

  return startDiff < endDiff ? arr[start] : arr[end];
}

export function testMinimumDifferenceElement() {
  log('Expected -1, got: ', getMinimumDifferenceElement([], 1));
  log('Expected 6, got: ', getMinimumDifferenceElement([4, 6, 10], 7));
  log('Expected 4, got: ', getMinimumDifferenceElement([4, 6, 10], 4));
  log('Expected 10, got: ', getMinimumDifferenceElement([1, 3, 8, 10, 15], 12));
  log('Expected 10, got: ', getMinimumDifferenceElement([4, 6, 10], 17));
}
