import { log } from '../../linked_list/utils';

// https://www.educative.io/courses/grokking-the-coding-interview/RLw1Pjk1GQ0
function findAllDuplicates(nums: number[]): number[] {
  const result: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    let nextIndex = nums[i] - 1;
    while (nums[i] !== nums[nextIndex]) {
      [nums[i], nums[nextIndex]] = [nums[nextIndex], nums[i]];
      nextIndex = nums[i] - 1;
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i + 1) result.push(nums[i]);
  }

  return result;
}

export function testDuplicates() {
  log('Expected [], got: ', findAllDuplicates([]));
  log('Expected [5, 4], got: ', findAllDuplicates([3, 4, 4, 5, 5]));
  log('Expected [3, 5], got: ', findAllDuplicates([5, 4, 7, 2, 3, 5, 3]));
}
