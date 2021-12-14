import { log } from '../../linked_list/utils';

// https://www.educative.io/courses/grokking-the-coding-interview/B6VypRxPolJ
function longestSubarrayWithOnes(arr: number[], k: number): number {
  let maxOnes = 0,
    maxLength = 0;

  for (let start = 0, end = 0; end < arr.length; end++) {
    if (arr[end]) maxOnes++;

    while (end - start + 1 > maxOnes + k) {
      if (arr[start++]) maxOnes--;
    }

    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
}

export function testLongestSubarray() {
  log('Expected 0, got: ', longestSubarrayWithOnes([], 2));
  log(
    'Expected 6, got: ',
    longestSubarrayWithOnes([0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], 2)
  );
  log(
    'Expected 9, got: ',
    longestSubarrayWithOnes([0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1], 3)
  );
}
