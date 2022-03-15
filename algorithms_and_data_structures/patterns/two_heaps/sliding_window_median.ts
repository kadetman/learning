import Heap from 'collections/heap';
import { log } from '../../linked_list/utils';

// https://www.educative.io/courses/grokking-the-coding-interview/3Y9jm7XRrXO
function getMedians(arr: number[], k: number): number[] {
  const result: number[] = [];
  const maxHeap = new Heap();
  const minHeap = new Heap([], null, (a, b) => b - a);

  for (let i = 0; i < arr.length; i++) {
    if (maxHeap.length === 0 || maxHeap.peek() >= arr[i]) {
      maxHeap.push(arr[i]);
    } else minHeap.push(arr[i]);
    rebalanceHeaps(minHeap, maxHeap);

    if (i >= k - 1) {
      const median =
        minHeap.length === maxHeap.length
          ? minHeap.peek() / 2 + maxHeap.peek() / 2
          : maxHeap.peek();
      result.push(median);

      const valueToRemove = arr[i - k + 1];
      if (maxHeap.peek() >= valueToRemove) maxHeap.delete(valueToRemove);
      else minHeap.delete(valueToRemove);

      rebalanceHeaps(minHeap, maxHeap);
    }
  }

  return result;
}

function rebalanceHeaps(minHeap: Heap, maxHeap: Heap) {
  if (maxHeap.length > minHeap.length + 1) {
    minHeap.push(maxHeap.pop());
  } else if (minHeap.length > maxHeap.length) {
    maxHeap.push(minHeap.pop());
  }
}

export function testMedians() {
  log('Expected [1.5, 0.5, 1, 4], got: ', getMedians([1, 2, -1, 3, 5], 2));
  log('Expected [1, 2, 3], got: ', getMedians([1, 2, -1, 3, 5], 3));
  log('Expected [1.5, 2.5], got: ', getMedians([1, 2, -1, 3, 5], 4));
}
