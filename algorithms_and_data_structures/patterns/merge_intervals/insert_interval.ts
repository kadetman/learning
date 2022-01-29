import { log } from '../../linked_list/utils';
import { Interval } from './model';

// https://www.educative.io/courses/grokking-the-coding-interview/3jKlyNMJPEM
function insertInterval(arr: Interval[], interval: Interval): Interval[] {
  if (arr.length === 0) return [interval];

  const merged: Interval[] = [];
  let [start, end] = interval;

  for (let i = 0; i < arr.length; i++) {
    const [start1, end1] = arr[i];
    if (end1 < start) {
      merged.push([start1, end1]);
    } else if (start1 > end) {
      if (start >= 0) {
        merged.push([start, end]);
        start = -1;
      }
      merged.push([start1, end1]);
    } else {
      start = Math.min(start, start1);
      end = Math.max(end, end1);
      if (i === arr.length - 1) merged.push([start, end]);
    }
  }

  return merged;
}

export function testInsert() {
  log('Expected [1, 2], got: ', JSON.stringify(insertInterval([], [1, 2])));
  log(
    'Expected [[1, 5], [7, 9]], got: ',
    JSON.stringify(
      insertInterval(
        [
          [1, 3],
          [7, 9],
        ],
        [2, 5]
      )
    )
  );
  log(
    'Expected [[2, 4], [5, 9]], got: ',
    JSON.stringify(
      insertInterval(
        [
          [2, 4],
          [5, 9],
        ],
        [6, 7]
      )
    )
  );
  log(
    'Expected [[1, 6]], got: ',
    JSON.stringify(
      insertInterval(
        [
          [1, 4],
          [2, 6],
        ],
        [3, 5]
      )
    )
  );
}
