import { log } from '../../linked_list/utils';
import { Interval } from './model';

// https://www.educative.io/courses/grokking-the-coding-interview/3jyVPKRA8yx
function mergeIntervals(arr: Interval[]): Interval[] {
  if (arr.length < 2) return arr;

  arr.sort(([start1], [start2]) => start1 - start2);
  const merged: Interval[] = [];

  let [start, end] = arr[0];
  for (let i = 1; i < arr.length; i++) {
    const [start1, end1] = arr[i];
    if (end >= start1) {
      end = Math.max(end, end1);
    } else {
      merged.push([start, end]);
      start = start1;
      end = end1;
    }
  }

  merged.push([start, end]);

  return merged;
}

export function testMerged() {
  log('Expected [], got: ', mergeIntervals([]));
  log(
    'Expected [[1, 5], [7, 9]], got: ',
    JSON.stringify(
      mergeIntervals([
        [1, 3],
        [2, 5],
        [7, 9],
      ])
    )
  );
  log(
    'Expected [[2, 4], [5, 9]], got: ',
    JSON.stringify(
      mergeIntervals([
        [6, 7],
        [2, 4],
        [5, 9],
      ])
    )
  );
  log(
    'Expected [[1, 6]], got: ',
    JSON.stringify(
      mergeIntervals([
        [3, 5],
        [1, 4],
        [2, 6],
      ])
    )
  );
}
