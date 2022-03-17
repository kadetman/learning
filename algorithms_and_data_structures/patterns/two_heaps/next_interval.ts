import Heap from 'collections/heap';
import { log } from '../../linked_list/utils';
import { Interval } from '../merge_intervals/model';

// https://www.educative.io/courses/grokking-the-coding-interview/JP8VKGOEpXl
function getNextIntervals(intervals: Interval[]): number[] {
  const result = new Array(intervals.length).fill(-1);
  const maxStartHeap = new Heap([], null, (a, b) => a[0] - b[0]);
  const maxEndHeap = new Heap([], null, (a, b) => a[0] - b[0]);

  for (const [i, [start, end]] of intervals.entries()) {
    maxStartHeap.push([start, i]);
    maxEndHeap.push([end, i]);
  }

  while (maxEndHeap.length) {
    const [end, i] = maxEndHeap.pop();
    let topStart,
      startIndex = -1;
    while (maxStartHeap.length && maxStartHeap.peek()[0] >= end) {
      // Remove max start intervals until we find the closest.
      [topStart, startIndex] = maxStartHeap.pop();
    }
    if (startIndex >= 0) {
      result[i] = startIndex;
      // Push the closest max start interval back as it can be the next interval for other intervals.
      maxStartHeap.push([topStart, startIndex]);
    }
  }

  return result;
}

export function testNextIntervals() {
  log(
    'Expected [-1, 0, 1], got: ',
    getNextIntervals([
      [5, 6],
      [3, 4],
      [2, 3],
    ])
  );
  log(
    'Expected [2, -1, -1], got: ',
    getNextIntervals([
      [3, 4],
      [1, 5],
      [4, 6],
    ])
  );
}
