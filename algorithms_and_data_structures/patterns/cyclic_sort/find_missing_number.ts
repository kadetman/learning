import { log } from '../../linked_list/utils';

// https://www.educative.io/courses/grokking-the-coding-interview/JPnp17NYXE9
function findMissingNumber(arr: number[]) {
  for (let i = 0; i < arr.length; i++) {
    while (arr[i] !== i && arr[i] < arr.length) {
      const index = arr[i];
      [arr[i], arr[index]] = [arr[index], arr[i]];
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== i) return i;
  }

  // If all numbers are in the correct place - number "n" is missing.
  return arr.length;
}

export function testMissingNumber() {
  log('Expected -1, got: ', findMissingNumber([]));
  log('Expected 1, got: ', findMissingNumber([0, 4, 3, 2]));
  log('Expected 2, got: ', findMissingNumber([4, 0, 3, 1]));
  log('Expected 4, got: ', findMissingNumber([2, 0, 3, 1]));
  log('Expected 7, got: ', findMissingNumber([8, 3, 5, 2, 4, 6, 1, 0]));
}
