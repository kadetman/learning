import { log } from '../../linked_list/utils';

// https://www.educative.io/courses/grokking-the-coding-interview/3w5ZMYAOLMA
function getSubsetsCount(nums: number[], sum: number): number {
  if (nums.length < 1 || sum <= 0) return -1;

  const sumCounts = Array(sum + 1).fill(0);
  sumCounts[0] = 1;
  if (nums[0] <= sum) sumCounts[nums[0]] = 1;

  for (let i = 1; i < nums.length; i++) {
    for (let s = sum; s > 0; s--) {
      sumCounts[s] += nums[i] <= s ? sumCounts[s - nums[i]] : 0;
    }
  }

  return sumCounts[sum];
}

export function testSubsetsCount() {
  log('Expected -1, got: ', getSubsetsCount([], 1));
  log('Expected 3, got: ', getSubsetsCount([1, 1, 2, 3], 4));
  log('Expected 3, got: ', getSubsetsCount([1, 2, 7, 1, 5], 9));
}
