import { log } from '../../linked_list/utils';

// https://www.educative.io/courses/grokking-the-coding-interview/gxrnL0GQGqk
function hasSubsetSum(nums: number[], sum: number): boolean {
  if (!nums.length || sum <= 0) return false;

  const sumStates = Array(sum + 1).fill(false);
  // Zero sum can be achieved by empty set.
  sumStates[0] = true;
  // Set state for the first number.
  if (nums[0] <= sum) sumStates[nums[0]] = true;

  for (let i = 1; i < nums.length; i++) {
    for (let s = sum; s > 0; s--) {
      // If previous sets don't have current sum,
      // set state to true if they have current sum minus current num.
      if (!sumStates[s] && nums[i] <= s) sumStates[s] = sumStates[s - nums[i]];
    }
  }

  return sumStates[sum];
}

export function testSubsetSum() {
  log('Expected false, got: ', hasSubsetSum([], 1));
  log('Expected true, got: ', hasSubsetSum([1, 2, 3, 4], 6));
  log('Expected true, got: ', hasSubsetSum([1, 2, 7, 1, 5], 10));
  log('Expected false, got: ', hasSubsetSum([1, 3, 4, 8], 6));
}
