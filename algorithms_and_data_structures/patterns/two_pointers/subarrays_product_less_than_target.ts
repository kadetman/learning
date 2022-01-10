import { log } from '../../linked_list/utils';

// https://www.educative.io/courses/grokking-the-coding-interview/RMV1GV1yPYz
function findSubarrays(arr: number[], target: number): Array<number[]> {
  const subarrays: Array<number[]> = [];

  let left = 0,
    right = 0,
    product = 1;

  while (right < arr.length) {
    product *= arr[right];

    if (product < target) {
      subarrays.push(arr.slice(left, right + 1));
      right++;
    }

    if (product >= target || right === arr.length) {
      product = 1;
      left += 1;
      right = left;
    }
  }

  return subarrays;
}

export function testSubarrays() {
  log('Expected [], got: ', JSON.stringify(findSubarrays([], 10)));
  log(
    'Expected [ [ 2 ], [ 5 ], [ 2, 5 ], [ 3 ], [ 5, 3 ], [ 10 ] ], got: ',
    JSON.stringify(findSubarrays([2, 5, 3, 10], 30))
  );
  log(
    'Expected [ [ 8 ], [ 2 ], [ 8, 2 ], [ 6 ], [ 2, 6 ], [ 5 ], [ 6, 5 ] ], got: ',
    JSON.stringify(findSubarrays([8, 2, 6, 5], 50))
  );
}
