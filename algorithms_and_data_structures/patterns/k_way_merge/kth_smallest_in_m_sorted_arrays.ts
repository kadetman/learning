import Heap from 'collections/heap';
import { log } from '../../linked_list/utils';

// https://www.educative.io/courses/grokking-the-coding-interview/myAqDMyRXn3
function getKthSmallest(lists: Array<number[]>, k: number): number {
  const minHeap = new Heap([], null, (a, b) => b[0] - a[0]);
  for (let i = 0; i < lists.length; i++) {
    minHeap.push([lists[i][0], 0, lists[i]]);
  }

  let counter = 0,
    result = -1;
  while (minHeap.length) {
    const [value, i, list] = minHeap.pop();
    counter++;
    if (counter === k) {
      result = value;
      break;
    }

    if (i + 1 < lists.length) {
      minHeap.push([list[i + 1], i + 1, list]);
    }
  }

  return result;
}

export function testKthSmallest() {
  log('Expected -1, got: ', getKthSmallest([], 1));
  log(
    'Expected 4, got: ',
    getKthSmallest(
      [
        [2, 6, 8],
        [3, 6, 7],
        [1, 3, 4]
      ],
      5
    )
  );
}
