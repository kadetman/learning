import { log } from '../../linked_list/utils';

// https://www.educative.io/courses/grokking-the-coding-interview/gk20xz4VwpG
function getSingleNumber(arr: number[]): number {
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    // 1. x ^ x => 0
    // 2. x ^ 0 => x
    num ^= arr[i];
  }

  return num;
}

export function testSingleNumber() {
  log('Expected 0, got: ', getSingleNumber([]));
  log('Expected 0, got: ', getSingleNumber([1, 0, 1]));
  log('Expected 4, got: ', getSingleNumber([1, 4, 2, 1, 3, 2, 3]));
  log('Expected 9, got: ', getSingleNumber([7, 9, 7]));
}
