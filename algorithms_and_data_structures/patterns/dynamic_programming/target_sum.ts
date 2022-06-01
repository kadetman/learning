import { log } from '../../linked_list/utils';

// https://www.educative.io/courses/grokking-the-coding-interview/JE0BWB8DgAJ
function getTargetSumCount(nums: number[], sum: number): number {
  if (!nums.length || sum <= 0) return 0;

  // s1 - subset 1, s2 - subset 2, s1 + s2 include all numbers from nums.
  // Sum(s1) + Sum(s2) = Sum(nums); Sum(s1) - Sum(s2) = sum;
  // => 2 * Sum(s1) = Sum(nums) + sum; => Sum(s1) = (Sum(nums) + sum) / 2
  // We need to count subsets with Sum(s1).
  const totalSum = nums.reduce((acc, num) => acc + num, 0);

  // We can't find a subset with target sum in these cases.
  if (totalSum < sum || (totalSum + sum) % 2 === 1) return 0;

  const sum1 = (totalSum + sum) / 2;
  const sumCounts = Array(sum1 + 1).fill(0);
  sumCounts[0] = 1;
  if (nums[0] <= sum1) sumCounts[nums[0]] = 1;

  for (let i = 1; i < nums.length; i++) {
    for (let s = sum1; s > 0; s--) {
      sumCounts[s] += nums[i] <= s ? sumCounts[s - nums[i]] : 0;
    }
  }

  return sumCounts[sum1];
}

export function testTargetSumCount() {
  log('Expected 0, got: ', getTargetSumCount([], 1));
  log('Expected 0, got: ', getTargetSumCount([1, 2, 7, 1], 8));
  log('Expected 2, got: ', getTargetSumCount([1, 2, 7, 1], 9));
  log('Expected 3, got: ', getTargetSumCount([1, 1, 2, 3], 1));
}

