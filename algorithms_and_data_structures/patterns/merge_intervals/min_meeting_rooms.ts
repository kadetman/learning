import { Interval } from './model';
import Heap from 'collections/heap';
import { log } from '../../linked_list/utils';

// https://www.educative.io/courses/grokking-the-coding-interview/JQMAmrVPL7l
function getMinRooms(arr: Interval[]): number {
  let minRooms = 0;
  const minHeap = new Heap([], null, ([end1], [end2]) => end2 - end1);
  arr.sort(([start1], [start2]) => start1 - start2);

  for (let i = 0; i < arr.length; i++) {
    // Remove already finished meetings.
    while (minHeap.length && minHeap.peek()[1] <= arr[i][0]) {
      minHeap.pop();
    }

    // Add current meeting to the heap.
    minHeap.push(arr[i]);

    minRooms = Math.max(minRooms, minHeap.length);
  }

  return minRooms;
}

export function testMinRooms() {
  log('Expected 0, got: ', getMinRooms([]));
  log(
    'Expected 1, got: ',
    getMinRooms([
      [6, 7],
      [2, 6],
      [7, 12],
    ])
  );
  log(
    'Expected 2, got: ',
    getMinRooms([
      [1, 4],
      [2, 5],
      [7, 9],
    ])
  );
  log(
    'Expected 3, got: ',
    getMinRooms([
      [1, 7],
      [2, 6],
      [5, 9],
      [9, 10],
    ])
  );
}
