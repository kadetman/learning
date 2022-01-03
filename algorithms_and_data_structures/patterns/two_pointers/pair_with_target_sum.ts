import { log } from '../../linked_list/utils';

// https://www.educative.io/courses/grokking-the-coding-interview/xog6q15W9GP
function findPairWithSum(arr: number[], sum: number): [number, number] {
  let left = 0,
    right = arr.length - 1;

  while (left < right) {
    const s = arr[left] + arr[right];
    if (s === sum) return [left, right];

    if (s < sum) left++;
    else right--;
  }

  return [-1, -1];
}

export function testPairWithSum() {
  log('Expected [-1, -1], got: ', findPairWithSum([], 10));
  log('Expected [1, 3], got: ', findPairWithSum([1, 2, 3, 4, 6], 6));
  log('Expected [0, 2], got: ', findPairWithSum([2, 5, 9, 11], 11));
}
