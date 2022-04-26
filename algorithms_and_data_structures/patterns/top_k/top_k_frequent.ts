import Heap from 'collections/heap';
import { log } from '../../linked_list/utils';

// https://www.educative.io/courses/grokking-the-coding-interview/B89rvR6XZ3J\
function getTopFrequentNumbers(arr: number[], k: number): number[] {
  const countByNumber = new Map<number, number>();
  for (const num of arr) {
    countByNumber.set(num, (countByNumber.get(num) ?? 0) + 1);
  }

  const uniqueNumbers = [...countByNumber.keys()];
  const minHeap = new Heap(
    uniqueNumbers.slice(0, k),
    null,
    (a, b) => countByNumber.get(b) - countByNumber.get(a)
  );

  for (let i = k; i < uniqueNumbers.length; i++) {
    if (
      countByNumber.get(uniqueNumbers[i]) > countByNumber.get(minHeap.peek())
    ) {
      minHeap.pop();
      minHeap.push(uniqueNumbers[i]);
    }
  }

  return minHeap.toArray();
}

export function testTopFrequentNumbers() {
  log('Expected [], got: ', getTopFrequentNumbers([], 1));
  log(
    'Expected [12, 11], got: ',
    getTopFrequentNumbers([1, 3, 5, 12, 11, 12, 11], 2)
  );
  log(
    'Expected [5, 12, 11], got: ',
    getTopFrequentNumbers([5, 12, 11, 3, 11], 3)
  );
}

