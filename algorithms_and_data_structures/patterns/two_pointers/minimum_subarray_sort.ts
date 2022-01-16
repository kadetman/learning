import { log } from '../../linked_list/utils';

// https://www.educative.io/courses/grokking-the-coding-interview/gxL951y9xj3
function getMinimumSubarraySortLength(arr: number[]): number {
  let left = 1,
    right = arr.length - 2;
  while (left <= right) {
    if (arr[left] < arr[left - 1] && arr[right] > arr[right + 1]) {
      break;
    }
    if (arr[left] >= arr[left - 1]) left++;
    if (arr[right] <= arr[right + 1]) right--;
  }

  if (left > right) return 0;

  let min = arr[left],
    max = arr[right];
  for (let i = left; i <= right; i++) {
    min = Math.min(min, arr[i]);
    max = Math.max(max, arr[i]);
  }

  for (let i = left; i >= 0; i--) {
    if (arr[i] > min) left = i;
  }
  for (let i = right; i < arr.length; i++) {
    if (arr[i] < max) right = i;
  }

  if (left >= right) return 0;

  return right - left + 1;
}

export function testSubarray() {
  log('Expected 0, got: ', getMinimumSubarraySortLength([1, 2, 3]));
  log('Expected 3, got: ', getMinimumSubarraySortLength([3, 2, 1]));
  log(
    'Expected 7, got: ',
    getMinimumSubarraySortLength([3, 4, 5, 2, -1, 9, 7, 10])
  );
}
