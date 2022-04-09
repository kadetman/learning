import { log } from '../../linked_list/utils';

// https://www.educative.io/courses/grokking-the-coding-interview/RMPVM2Y4PW0
function rotatedArraySearch(arr: number[], key: number): number {
  let start = 0,
    end = arr.length - 1;
  while (start <= end) {
    const mid = Math.floor(start + (end - start) / 2);
    if (key === arr[mid]) return mid;

    if (arr[mid] === arr[start] && arr[mid] === arr[end]) {
      start += 1;
      end -= 1;
    } else if (arr[start] <= arr[mid]) {
      if (key < arr[mid] && key >= arr[start]) end = mid - 1;
      else start = mid + 1;
    } else if (key > arr[mid] && key <= arr[end]) {
      start = mid + 1;
    } else end = mid - 1;
  }

  return -1;
}

export function testRotatedArraySearch() {
  log('Expected -1, got: ', rotatedArraySearch([], 1));
  log('Expected -1, got: ', rotatedArraySearch([1, 2, 3, -1, 0], 4));
  log('Expected 1, got: ', rotatedArraySearch([10, 15, 1, 3, 8], 15));
  log('Expected 6, got: ', rotatedArraySearch([4, 5, 7, 9, 10, -1, 2], 2));
  log('Expected 1, got: ', rotatedArraySearch([3, 7, 3, 3, 3], 7));
  log('Expected 4, got: ', rotatedArraySearch([3, 3, 3, 3, 7, 1, 2], 7));
}

