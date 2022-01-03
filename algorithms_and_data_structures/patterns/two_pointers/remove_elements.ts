import { log } from '../../linked_list/utils';

// https://www.educative.io/courses/grokking-the-coding-interview/mEEA22L5mNA
function removeElements(arr: number[], key: number): number {
  let left = 0;
  for (let right = 0; right < arr.length; right++) {
    if (arr[right] !== key) {
      arr[left++] = arr[right];
    }
  }

  return left;
}

export function testElements() {
  log('Expect 0, got: ', removeElements([], 2));
  log('Expect 0, got: ', removeElements([1], 1));
  log('Expect 0, got: ', removeElements([1, 1, 1], 1));
  log('Expect 4, got: ', removeElements([3, 2, 3, 6, 3, 10, 9, 3], 3));
  log('Expect 2, got: ', removeElements([2, 11, 2, 2, 1], 2));
}
