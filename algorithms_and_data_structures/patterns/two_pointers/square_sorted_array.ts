import { log } from '../../linked_list/utils';

// https://www.educative.io/courses/grokking-the-coding-interview/R1ppNG3nV9R
function squareArray(arr: number[]): number[] {
  const n = arr.length;
  const result = Array(n).fill(0);
  let currentIndex = n - 1,
    left = 0,
    right = n - 1;

  while (left <= right) {
    const leftSquare = arr[left] * arr[left];
    const rightSquare = arr[right] * arr[right];
    if (rightSquare > leftSquare) {
      result[currentIndex] = rightSquare;
      right--;
    } else {
      result[currentIndex] = leftSquare;
      left++;
    }
    currentIndex--;
  }

  return result;
}

export function testSquares() {
  log('Expected [], got: ', squareArray([]));
  log('Expected [0, 1, 4, 4, 9], got: ', squareArray([-2, -1, 0, 2, 3]));
  log('Expected [0, 1, 1, 4, 9], got: ', squareArray([-3, -1, 0, 1, 2]));
}
