import Heap from 'collections/heap';
import { log } from '../../linked_list/utils';

// https://www.educative.io/courses/grokking-the-coding-interview/qVZmZJVxPY0
function connectRopes(arr: number[]): number {
  const minHeap = new Heap(arr, null, (a, b) => b - a);
  let sum = 0;
  while (minHeap.length > 1) {
    const cost = minHeap.pop() + minHeap.pop();
    sum += cost;
    minHeap.push(cost);
  }

  return sum;
}

export function testRopes() {
  log('Expected 0, got: ', connectRopes([]));
  log('Expected 33, got: ', connectRopes([1, 3, 11, 5]));
  log('Expected 36, got: ', connectRopes([3, 4, 5, 6]));
  log('Expected 42, got: ', connectRopes([1, 3, 11, 5, 2]));
}

