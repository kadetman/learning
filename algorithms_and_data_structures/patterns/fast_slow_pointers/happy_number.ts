import { log } from '../../linked_list/utils';

// https://www.educative.io/courses/grokking-the-coding-interview/39q3ZWq27jM
function isHappyNumber(num: number): boolean {
  let slow = num,
    fast = num;

  while (true) {
    slow = getDigitsSquareSum(slow);
    fast = getDigitsSquareSum(getDigitsSquareSum(fast));
    if (slow === fast) {
      break;
    }
  }

  return slow === 1;
}

function getDigitsSquareSum(num: number): number {
  let sum = 0;
  while (num) {
    sum += Math.pow(num % 10, 2);
    num = Math.floor(num / 10);
  }

  return sum;
}

export function testHappyNumber() {
  log('Expected true, got: ', isHappyNumber(23));
  log('Expected false, got: ', isHappyNumber(12));
}
