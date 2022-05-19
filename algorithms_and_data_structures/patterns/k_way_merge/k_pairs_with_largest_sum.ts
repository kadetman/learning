import Heap from 'collections/heap';
import { log } from '../../linked_list/utils';

// https://www.educative.io/courses/grokking-the-coding-interview/N767x7VoYmK
function getPairs(list1: number[], list2: number[], k: number): number[] {
  const minHeap = new Heap([], null, (a, b) => b[0] + b[1] - (a[0] + a[1]));

  for (let i = 0; i < Math.min(list1.length, k); i++) {
    for (let j = 0; j < Math.min(list2.length, k); j++) {
      if (minHeap.length < k) {
        minHeap.push([list1[i], list2[j]]);
      } else if (list1[i] + list2[j] > minHeap.peek()[0] + minHeap.peek()[1]) {
        minHeap.pop();
        minHeap.push([list1[i], list2[j]]);
      }
      else {
        // If the sum of the two numbers from the two arrays is smaller than the smallest (top)
        // element of the heap, we can 'break' here. Since the arrays are sorted in the
        // descending order, we won't be able to find a pair with a higher sum moving forward.
        break;
      }
    }
  }

  return minHeap.toArray();
}

export function testPairs() {
  log(
    'Expected [[9,3],[9,6],[8,6]], got: ',
    JSON.stringify(getPairs([9, 8, 2], [6, 3, 1], 3))
  );

  log(
    'Expected [[5,-1],[5,2],[2,2]], got: ',
    JSON.stringify(getPairs([5, 2, 1], [2, -1], 3))
  );
}

