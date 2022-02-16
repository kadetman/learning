import { log } from '../../linked_list/utils';

// https://www.educative.io/courses/grokking-the-coding-interview/R1GXQ071GQ0
function findFirstSmallestMissingNumber(nums: number[]): number {
  for (let i = 0; i < nums.length; i++) {
    let nextIndex = nums[i] - 1;
    while (
      nextIndex >= 0 &&
      nextIndex < nums.length &&
      nums[i] !== nums[nextIndex]
    ) {
      [nums[i], nums[nextIndex]] = [nums[nextIndex], nums[i]];
      nextIndex = nums[i] - 1;
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i + 1) return i + 1;
  }

  return -1;
}

export function testMissingNumber() {
  log('Expected -1, got: ', findFirstSmallestMissingNumber([]));
  log('Expected 3, got: ', findFirstSmallestMissingNumber([-3, 1, 5, 4, 2]));
  log('Expected 4, got: ', findFirstSmallestMissingNumber([3, -2, 0, 1, 2]));
  log('Expected 4, got: ', findFirstSmallestMissingNumber([3, 2, 5, 1]));
}

