import { log } from '../../linked_list/utils';

// https://www.educative.io/courses/grokking-the-coding-interview/g286M2Gk3YY
function findFirstKMissingNumbers(nums: number[], k: number): number[] {
  const result: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    let nextIndex = nums[i] - 1;
    while (
      nextIndex < nums.length &&
      nextIndex >= 0 &&
      nums[i] !== nums[nextIndex]
    ) {
      [nums[i], nums[nextIndex]] = [nums[nextIndex], nums[i]];
      nextIndex = nums[i] - 1;
    }
  }

  let extraNumbers = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i + 1 && result.length < k) {
      result.push(i + 1);
      extraNumbers.add(nums[i]);
    }
  }

  let offset = 1;
  while (result.length < k) {
    const nextNumber = nums.length + offset;
    if (!extraNumbers.has(nextNumber)) {
      result.push(nextNumber);
    }
    offset++;
  }

  return result;
}

export function testMissingNumbers() {
  log('Expected [1, 2, 3], got: ', findFirstKMissingNumbers([], 3));
  log(
    'Expected [1, 2, 6], got: ',
    findFirstKMissingNumbers([3, -1, 4, 5, 5], 3)
  );
  log('Expected [1, 5, 6], got: ', findFirstKMissingNumbers([2, 3, 4], 3));
  log('Expected [1, 2], got: ', findFirstKMissingNumbers([-2, -3, 4], 2));
}
