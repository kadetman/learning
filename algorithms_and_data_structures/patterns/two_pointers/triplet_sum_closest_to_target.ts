import { log } from '../../linked_list/utils';

// https://www.educative.io/courses/grokking-the-coding-interview/3YlQz7PE7OA
function findTripletSum(arr: number[], targetSum: number): number {
  if (arr.length < 3) return 0;

  arr.sort((a, b) => a - b);

  let sum = Infinity;

  for (let i = 0; i < arr.length; i++) {
    let left = i + 1,
      right = arr.length - 1;
    while (left < right) {
      const currentSum = arr[i] + arr[left] + arr[right];
      if (currentSum === targetSum) return targetSum;

      if (currentSum > targetSum) right--;
      else left++;

      const currentAbsDiff = Math.abs(targetSum - currentSum);
      const absDiff = Math.abs(targetSum - sum);
      if (
        currentAbsDiff < absDiff ||
        (currentAbsDiff === absDiff && currentSum < sum)
      ) {
        sum = currentSum;
      }
    }
  }

  return sum;
}

export function testTriplet() {
  log('Expected 0, got: ', findTripletSum([], 100));
  log('Expected 1, got: ', findTripletSum([-2, 0, 1, 2], 2));
  log('Expected 0, got: ', findTripletSum([-3, -1, 1, 2], 1));
  log('Expected 3, got: ', findTripletSum([1, 0, 1, 1], 100));
}
