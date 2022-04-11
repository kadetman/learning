import { log } from '../../linked_list/utils';

// https://www.educative.io/courses/grokking-the-coding-interview/R1v4P0R7VZw
function getRotationsCount(arr: number[]): number {
  if (!arr.length) return 0;

  // Routations count is the same as an index of min number.
  let start = 0,
    end = arr.length - 1;
  if (arr[start] < arr[end]) return start;

  while (start <= end) {
    const mid = Math.floor(start + (end - start) / 2);
    if (arr[start] < arr[mid]) {
      start = mid + 1;
    } else if (arr[start] === arr[mid]) {
      if (arr[mid] > arr[mid + 1]) return mid + 1;
    } else {
      if (arr[mid] < arr[mid - 1]) return mid;
      else end = mid - 1;
    }
  }

  return end;
}

export function testRotationsCount() {
  log('Expected 0, got: ', getRotationsCount([]));
  log('Expected 0, got: ', getRotationsCount([1, 3, 8, 10]));
  log('Expected 4, got: ', getRotationsCount([1, 3, 8, 10, 0]));
  log('Expected 2, got: ', getRotationsCount([10, 15, 1, 3, 8]));
  log('Expected 5, got: ', getRotationsCount([4, 5, 7, 9, 10, -1, 2]));
}
