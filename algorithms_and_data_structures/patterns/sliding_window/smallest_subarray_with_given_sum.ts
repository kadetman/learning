import { log } from '../../linked_list/utils';

function smallestSubarrayWithGivenSum(s: number, arr: number[]): number {
  let sum = 0,
    start = 0,
    minLength = Infinity;

  for (let end = 0; end < arr.length; end++) {
    sum += arr[end];

    while (sum >= s) {
      minLength = Math.min(end - start + 1, minLength);
      sum -= arr[start++];
    }
  }

  return minLength === Infinity ? 0 : minLength;
}

export function testSmallestSubarray() {
  log('Expected 0, got ', smallestSubarrayWithGivenSum(10, [1, 1, 7]));
  log('Expected 1, got ', smallestSubarrayWithGivenSum(10, [1, 9, 10, 8, 3]));
}
