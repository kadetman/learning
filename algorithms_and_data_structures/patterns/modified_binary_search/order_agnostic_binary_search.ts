import { log } from '../../linked_list/utils';

// https://www.educative.io/courses/grokking-the-coding-interview/R8LzZQlj8lO
function binarySearch(arr: number[], key: number): number {
  let start = 0,
    end = arr.length - 1;
  const asc = arr[start] < arr[end];
  while (start <= end) {
    const middle = Math.floor(start + (end - start) / 2);
    if (arr[middle] === key) return middle;

    if ((asc && arr[middle] > key) || (!asc && arr[middle] < key))
      end = middle - 1;
    else start = middle + 1;
  }

  return -1;
}

export function testBinarySearch() {
  log('Expected -1, got: ', binarySearch([], 1));
  log('Expected 2, got: ', binarySearch([4, 6, 10], 10));
  log('Expected 4, got: ', binarySearch([1, 2, 3, 4, 5, 6, 7], 5));
  log('Expected 0, got: ', binarySearch([10, 6, 4], 10));
  log('Expected 2, got: ', binarySearch([10, 6, 4], 4));
  log('Expected -1, got: ', binarySearch([10, 6, 5], 4));
}
