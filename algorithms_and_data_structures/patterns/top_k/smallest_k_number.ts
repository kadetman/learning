import Heap from 'collections/heap';
import { log } from '../../linked_list/utils';

// https://www.educative.io/courses/grokking-the-coding-interview/gxxPGn8vE8G
function getSmallestNumber(arr: number[], k: number): number {
  if (k >= arr.length) return -1;

  const heap = new Heap(arr.slice(0, k));
  for (let i = k; i < arr.length; i++) {
    // Keep k smallest numbers in the heap.
    if (arr[i] < heap.peek()) {
      heap.pop();
      heap.push(arr[i]);
    }
  }

  return heap.peek();
}

export function testSmallestNumber() {
  log('Expected -1, got; ', getSmallestNumber([], 0));
  log('Expected 5, got; ', getSmallestNumber([1, 5, 12, 2, 11, 5], 3));
  log('Expected 5, got; ', getSmallestNumber([1, 5, 12, 2, 11, 5], 4));
  log('Expected 11, got; ', getSmallestNumber([5, 12, 11, -1, 12], 3));
}

