import { log } from '../../linked_list/utils';

// https://www.educative.io/courses/grokking-the-coding-interview/7n3BlOvqW0r
function bitonicArraySearch(arr: number[], key: number): number {
  let start = 0,
    end = arr.length - 1;
  while (start < end) {
    const mid = Math.floor(start + (end - start) / 2);
    if (arr[mid] === key) return mid;
    if (arr[mid] > arr[mid + 1]) end = mid;
    else start = mid + 1;
  }

  // start points to max item index.
  let index = binarySearch(arr, key, 0, start);
  if (index >= 0) return index;

  return binarySearch(arr, key, start + 1, arr.length - 1);
}

function binarySearch(
  arr: number[],
  key: number,
  start: number,
  end: number
): number {
  const isDesc = arr[start] > arr[end];
  while (start <= end) {
    const mid = Math.floor(start + (end - start) / 2);
    if (arr[mid] === key) return mid;
    if ((isDesc && arr[mid] < key) || (!isDesc && arr[mid] > key))
      end = mid - 1;
    else start = mid + 1;
  }

  return -1;
}

export function testBitonicArraySearch() {
  log('Expected -1, got', bitonicArraySearch([], 1));
  log('Expected 3, got', bitonicArraySearch([1, 3, 8, 12], 12));
  log('Expected 3, got', bitonicArraySearch([1, 3, 8, 4, 3], 4));
  log('Expected 1, got', bitonicArraySearch([1, 3, 8, 4, 3], 3));
  log('Expected 1, got', bitonicArraySearch([3, 8, 3, 1], 8));
  log('Expected 0, got', bitonicArraySearch([10, 9, 8], 10));
  log('Expected -1, got', bitonicArraySearch([1, 3, 8, 4, 3], 2));
}

