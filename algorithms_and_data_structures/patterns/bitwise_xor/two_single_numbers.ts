import { log } from '../../linked_list/utils';

// https://www.educative.io/courses/grokking-the-coding-interview/N7VMDGgr9Vm
function getSingleNumbers(arr: number[]): [number, number] {
  let n1xn2 = 0;
  for (let i = 0; i < arr.length; i++) {
    n1xn2 ^= arr[i];
  }
  // n1xn2 is now equal to num1 ^ num2.
  // Find the right most set bit, so we can split all numbers by this bit:
  // one group with '1' at this place and one group with '0'.
  let rightMostSetBit = 1;
  while ((rightMostSetBit & n1xn2) === 0) {
    rightMostSetBit = rightMostSetBit << 1;
  }

  let num1 = 0,
    num2 = 0;
  for (let i = 0; i < arr.length; i++) {
    if (rightMostSetBit & arr[i]) num2 ^= arr[i];
    else num1 ^= arr[i];
  }

  return [num1, num2];
}

export function testSingleNumbers() {
  log('Expected [1, 3], got: ', getSingleNumbers([2, 1, 3, 2]));
  log('Expected [4, 6], got: ', getSingleNumbers([1, 4, 2, 1, 3, 5, 6, 2, 3, 5]));
}

