import { log } from '../../linked_list/utils';

// https://www.educative.io/courses/grokking-the-coding-interview/mEEA22L5mNA
function removeDuplicates(arr: number[]): number {
  if (!arr.length) return 0;

  let left = 0;

  for (let right = 1; right < arr.length; right++) {
    if (arr[right] !== arr[left]) {
      arr[++left] = arr[right];
    }
  }

  return left + 1;
}

export function testDuplicates() {
  log('Expect 0, got: ', removeDuplicates([]));
  log('Expect 1, got: ', removeDuplicates([1]));
  log('Expect 1, got: ', removeDuplicates([1, 1, 1]));
  log('Expect 4, got: ', removeDuplicates([2, 3, 3, 3, 6, 9, 9]));
  log('Expect 2, got: ', removeDuplicates([2, 2, 2, 11]));
}
