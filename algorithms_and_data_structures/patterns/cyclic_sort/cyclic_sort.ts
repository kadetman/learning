import { log } from '../../linked_list/utils';

// https://www.educative.io/courses/grokking-the-coding-interview/B8qXVqVwDKY
function sort(arr: number[]): number[] {
  if (arr.length < 2) return arr;

  for (let i = 0; i < arr.length; i++) {
    while (arr[i] !== i + 1) {
      const index = arr[i] - 1;
      [arr[i], arr[index]] = [arr[index], arr[i]];
    }
  }

  return arr;
}

export function testSort() {
  log('Expected [], got: ', sort([]));
  log('Expected [1], got: ', sort([1]));
  log('Expected [1, 2, 3, 4, 5], got: ', sort([3, 1, 5, 4, 2]));
  log('Expected [1, 2, 3, 4, 5, 6], got: ', sort([2, 6, 4, 3, 1, 5]));
  log('Expected [1, 2, 3, 4, 5, 6], got: ', sort([1, 5, 6, 4, 3, 2]));
}
