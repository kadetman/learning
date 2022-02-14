import { log } from '../../linked_list/utils';

// https://www.educative.io/courses/grokking-the-coding-interview/3wEkKy6Pr9A
function findDuplicateNumber(arr: number[]): number {
  for (let i = 0; i < arr.length; i++) {
    let nextIndex = arr[i] - 1;
    while (arr[i] !== arr[nextIndex]) {
      [arr[i], arr[nextIndex]] = [arr[nextIndex], arr[i]];
      nextIndex = arr[i] - 1;
    }
    // If values are the same and indexes are different - we found the duplicate.
    if (i !== nextIndex) return arr[i];
  }

  return -1;
}

export function testDuplicateNumber() {
  log('Expected -1, got: ', findDuplicateNumber([]));
  log('Expected 4, got: ', findDuplicateNumber([1, 4, 4, 3, 2]));
  log('Expected 3, got: ', findDuplicateNumber([2, 1, 3, 3, 5, 4]));
  log('Expected 4, got: ', findDuplicateNumber([2, 4, 1, 4, 4]));
}
