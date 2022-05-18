import Heap from 'collections/heap';
import { log } from '../../linked_list/utils';

// https://www.educative.io/courses/grokking-the-coding-interview/JPGWDNRx3w2
function getSmallestRange(lists: Array<number[]>): [number, number] {
  const minHeap = new Heap([], null, (a, b) => b[0] - a[0]);
  let currentMax = -Infinity;
  for (const list of lists) {
    minHeap.push([list[0], 0, list]);
    currentMax = Math.max(currentMax, list[0]);
  }

  // Keep building the range until one of the lists is fully traversed.
  let rangeStart = -Infinity,
    rangeEnd = Infinity;
  while (minHeap.length === lists.length) {
    const [value, i, list] = minHeap.pop();
    if (rangeEnd - rangeStart > currentMax - value) {
      rangeStart = value;
      rangeEnd = currentMax;
    }

    if (i + 1 < list.length) {
      minHeap.push([list[i + 1], i + 1, list]);
      currentMax = Math.max(currentMax, list[i + 1]);
    }
  }

  return [rangeStart, rangeEnd];
}

export function testSmallestRange() {
  log(
    'Expected [4, 7], got: ',
    getSmallestRange([
      [1, 5, 8],
      [4, 12],
      [7, 8, 10],
    ])
  );
  log(
    'Expected [9, 12], got: ',
    getSmallestRange([
      [1, 9],
      [4, 12],
      [7, 10, 16],
    ])
  );
}
