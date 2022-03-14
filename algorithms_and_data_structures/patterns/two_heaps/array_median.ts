import Heap from 'collections/heap';
import { log } from '../../linked_list/utils';

// https://www.educative.io/courses/grokking-the-coding-interview/3Yj2BmpyEy4
class MedianArray {
  private minHeap = new Heap([], null, (a, b) => b - a);
  private maxHeap = new Heap();

  push(num: number) {
    if (this.maxHeap.length === 0 || this.maxHeap.peek() >= num) {
      this.maxHeap.push(num);
    } else {
      this.minHeap.push(num);
    }

    // Keep more or equal elements in the maxHeap.
    if (this.minHeap.length > this.maxHeap.length) {
      this.maxHeap.push(this.minHeap.pop());
    } else if (this.maxHeap.length > this.minHeap.length + 1) {
      this.minHeap.push(this.maxHeap.pop());
    }

    return this;
  }

  getMedian(): number {
    return this.minHeap.length === this.maxHeap.length
      ? (this.minHeap.peek() + this.maxHeap.peek()) / 2
      : this.maxHeap.peek();
  }
}

export function testArrayMedian() {
  const arr = new MedianArray();
  arr.push(5).push(1);
  log('Expected 3, got: ', arr.getMedian());

  arr.push(4);
  log('Expected 4, got: ', arr.getMedian());

  arr.push(3);
  log('Expected 3.5, got: ', arr.getMedian());
}
