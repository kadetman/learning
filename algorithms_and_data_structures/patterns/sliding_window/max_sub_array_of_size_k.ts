import { log } from '../../linked_list/utils';

function maxSubArrayOfSizeK(arr: number[], k: number): number {
  let sum = 0,
    maxSum = 0,
    windowStart = 0;

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    sum += arr[windowEnd];

    if (windowEnd >= k - 1) {
      maxSum = Math.max(maxSum, sum);
      sum -= arr[windowStart];
      windowStart++;
    }
  }

  return maxSum;
}

export function testMaxSum() {
  log('Expected 14, got: ', maxSubArrayOfSizeK([1, 2, 3, 4, 5], 4));
  log('Expected 22, got: ', maxSubArrayOfSizeK([5, 2, 3, 4, 7, 6, 1], 5));
}
