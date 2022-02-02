import { Interval } from './model';
import * as collections from 'collections';
import { log } from '../../linked_list/utils';

// https://www.educative.io/courses/grokking-the-coding-interview/JQMAmrVPL7l
function getMinRooms(arr: Interval[]): number {
  let minRooms = 0;
  log(collections);
  const minHeap = collections.Heap([], null, (a, b) => b - a);

  return minRooms;
}

export function testMinRooms() {
  log('Expected 0, got: ', getMinRooms([]));
}
