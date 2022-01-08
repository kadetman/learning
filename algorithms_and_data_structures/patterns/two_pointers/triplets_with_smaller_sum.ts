import { log } from '../../linked_list/utils';

// https://www.educative.io/courses/grokking-the-coding-interview/mElknO5OKBO
function getTripletsCount(arr: number[], targetSum): number {
  if (arr.length < 3) return 0;

  arr.sort((a, b) => a - b);
  let count = 0;

  for (let i = 0; i < arr.length - 2; i++) {
    let left = i + 1,
      right = arr.length - 1;
    while (left < right) {
      const sum = arr[i] + arr[left] + arr[right];
      if (sum < targetSum) {
        count += right - left;
        left++;
      } else right--;
    }
  }

  return count;
}

export function testTriplets() {
  log('Expected 0, got: ', getTripletsCount([], 10));
  log('Expected 2, got: ', getTripletsCount([-1, 0, 2, 3], 3));
  log('Expected 4, got: ', getTripletsCount([-1, 4, 2, 1, 3], 5));
}
