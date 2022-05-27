import { log } from '../../linked_list/utils';

// https://www.educative.io/courses/grokking-the-coding-interview/mE53y85Wqw9
function getMinDiff(nums: number[]): number {
  const sum = nums.reduce((acc, num) => acc + num, 0);
  const capacity = Math.floor(sum / 2);

  const capacityStates = Array(capacity + 1).fill(false);
  capacityStates[0] = true;
  if (nums[0] <= capacity) capacityStates[nums[0]] = true;

  for (let i = 1; i < nums.length; i++) {
    for (let c = capacity; c > 0; c--) {
      if (!capacityStates[c] && nums[i] <= c) {
        capacityStates[c] = capacityStates[c - nums[i]];
      }
    }
  }

  for (let c = capacity; c > 0; c--) {
    if (capacityStates[c]) return sum - 2 * c;
  }

  return -1;
}

export function testMinDiff() {
  log('Expected -1, got: ', getMinDiff([]));
  log('Expected 3, got: ', getMinDiff([1, 2, 3, 9]));
  log('Expected 0, got: ', getMinDiff([1, 2, 7, 1, 5]));
  log('Expected 92, got: ', getMinDiff([1, 3, 100, 4]));
}

