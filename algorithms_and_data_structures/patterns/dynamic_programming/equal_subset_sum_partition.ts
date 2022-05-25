import { log } from '../../linked_list/utils';

// https://www.educative.io/courses/grokking-the-coding-interview/g7QYlD8RwRr
function canPartition(nums: number[]): boolean {
  const n = nums.length;
  if (n === 0) return false;

  const sum = nums.reduce((acc, num) => acc + num, 0);
  // Can't partition in 2 equal subsets if the sum is not even.
  if (sum % 2) return false;

  const capacity = sum / 2;
  const capacityStates = Array(capacity + 1).fill(false);
  // We can always form a 0 sum from the empty set.
  capacityStates[0] = true;
  // Set state to true if the number is equal to some capacity.
  if (nums[0] <= capacity) capacityStates[nums[0]] = true;

  for (let i = 1; i < n; i++) {
    log('capacityStates', capacityStates);
    for (let c = capacity; c >= 0; c--) {
      // Set capacity state to true if previous numbers didn't fit the capacity
      // but they fit it now if we add the current number.
      if (!capacityStates[c] && nums[i] <= c) {
        capacityStates[c] = capacityStates[c - nums[i]];
      }
    }
  }
  log('capacityStates', capacityStates);

  return capacityStates[capacity];
}

export function testPartitioning() {
  log('Expected false, got: ', canPartition([]));
  log('Expected true, got: ', canPartition([1, 2, 3, 4]));
  log('Expected true, got: ', canPartition([1, 1, 3, 4, 7]));
  log('Expected false, got: ', canPartition([2, 3, 4, 6]));
}
