import Heap from 'collections/heap';
import { log } from '../../linked_list/utils';

// https://www.educative.io/courses/grokking-the-coding-interview/RM535yM9DW0
function getTopNumbers(arr: number[], k: number): number[] {
  const minHeap = new Heap(arr.slice(0, k), null, (a, b) => b - a);

  for (let i = k; i < arr.length; i++) {
    // Keep k max values in the heap.
    if (arr[i] > minHeap.peek()) {
      minHeap.pop();
      minHeap.push(arr[i]);
    }
  }

  return minHeap.toArray();
}

export function testTopNumbers() {
  log('Expected [], got: ', getTopNumbers([], 10));
  log('Expected [5,11,12], got: ', getTopNumbers([3, 1, 5, 12, 2, 11], 3));
  log('Expected [11,12,12], got: ', getTopNumbers([5, 12, 11, -1, 12], 3));
}
