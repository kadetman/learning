import Heap from 'collections/heap';
import { log } from '../../linked_list/utils';

// https://www.educative.io/courses/grokking-the-coding-interview/B819G5DZBxX
class KthLargestNumberInStream {
  readonly minHeap: Heap;

  constructor(nums: number[], private readonly k: number) {
    this.minHeap = new Heap(nums.slice(0, k), null, (a, b) => b - a);
    for (let i = k; i < nums.length; i++) {
      this.add(nums[i]);
    }
  }

  add(num: number) {
    // Keep k largest numbers in the heap.
    if (num > this.minHeap.peek()) {
      this.minHeap.pop();
      this.minHeap.push(num);
    }

    return this.minHeap.peek();
  }
}

export function testKthLargestNumberInStream() {
  const kthLargestNumber = new KthLargestNumberInStream(
    [3, 1, 5, 12, 2, 11],
    4
  );
  log(`Expected 5, got: ${kthLargestNumber.add(6)}`);
  log(`Expected 6, got: ${kthLargestNumber.add(13)}`);
  log(`Expected 6, got: ${kthLargestNumber.add(4)}`);
}
