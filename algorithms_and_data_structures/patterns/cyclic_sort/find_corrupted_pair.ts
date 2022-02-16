import { log } from '../../linked_list/utils';

// https://www.educative.io/courses/grokking-the-coding-interview/N7Vw2GBQr6D
function findCorruptedPair(nums: number[]): [number, number] {
  for (let i = 0; i < nums.length; i++) {
    let nextIndex = nums[i] - 1;
    while (nums[i] !== nums[nextIndex]) {
      [nums[i], nums[nextIndex]] = [nums[nextIndex], nums[i]];
      nextIndex = nums[i] - 1;
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i + 1) return [nums[i], i + 1];
  }

  return [-1, -1];
}

export function testCorruptedPair() {
  log('Expected [-1, -1], got: ', findCorruptedPair([]));
  log('Expected [2, 4], got: ', findCorruptedPair([3, 1, 2, 5, 2]));
  log('Expected [3, 5], got: ', findCorruptedPair([3, 1, 2, 3, 6, 4]));
}
