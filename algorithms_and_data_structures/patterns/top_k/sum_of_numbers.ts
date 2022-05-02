import Heap from 'collections/heap';
import { log } from '../../linked_list/utils';

// https://www.educative.io/courses/grokking-the-coding-interview/qVljv3Plr67
function getSum(arr: number[], k1: number, k2: number): number {
  if (arr.length < k1 + 1) return 0;

  const maxHeap = new Heap(arr.slice(0, k2 - 1));
  for (let i = k2 - 1; i < arr.length; i++) {
    if (arr[i] < maxHeap.peek()) {
      maxHeap.pop();
      maxHeap.push(arr[i]);
    }
  }

  let sum = 0;
  for (let i = 0; i < k2 - k1 - 1; i++) {
    sum += maxHeap.pop();
  }

  return sum;
}

export function testSum() {
  log('Expected 0, got: ', getSum([], 1, 3));
  log('Expected 2, got: ', getSum([2, 1], 1, 3));
  log('Expected 23, got: ', getSum([1, 3, 12, 5, 15, 11], 3, 6));
  log('Expected 12, got: ', getSum([3, 5, 8, 7], 1, 4));
}

