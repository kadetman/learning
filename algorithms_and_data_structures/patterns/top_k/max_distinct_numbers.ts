import Heap from 'collections/heap';
import { log } from '../../linked_list/utils';

// https://www.educative.io/courses/grokking-the-coding-interview/gx6oKY8PGYY
function getMaxDistinctNumbersCount(arr: number[], k: number): number {
  if (arr.length <= k) return 0;

  const countByNumber = new Map<number, number>();
  for (let num of arr) {
    countByNumber.set(num, (countByNumber.get(num) ?? 0) + 1);
  }

  const frequences = [...countByNumber.values()];
  const minHeap = new Heap([], null, (a, b) => b - a);
  let distinctNumbersCount = 0;
  for (let i = 0; i < frequences.length; i++) {
    const frequency = frequences[i];
    if (frequency === 1) {
      distinctNumbersCount++;
    } else {
      minHeap.push(frequency);
    }
  }

  while (k && minHeap.length) {
    const frequency = minHeap.pop();
    // Remove all duplicates of current number.
    k -= frequency - 1;
    if (k >= 0) {
      distinctNumbersCount++;
    } else k = 0;
  }

  return distinctNumbersCount - k;
}

export function testMaxDistinctNumbersCount() {
  log('Expected 0, got: ', getMaxDistinctNumbersCount([], 1));
  log(
    'Expected 3, got: ',
    getMaxDistinctNumbersCount([7, 3, 5, 8, 5, 3, 3], 2)
  );
  log('Expected 2, got: ', getMaxDistinctNumbersCount([3, 5, 12, 11, 12], 3));
  log(
    'Expected 3, got: ',
    getMaxDistinctNumbersCount([1, 2, 3, 3, 3, 3, 4, 4, 5, 5, 5], 2)
  );
}

