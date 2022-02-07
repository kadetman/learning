import { log } from '../../linked_list/utils';
import { Interval } from './model';

// https://www.educative.io/courses/grokking-the-coding-interview/RLwKZWgMJ1q
function getEmployeesFreeTime(arr: Array<Interval[]>): Interval[] {
  const tmp: Interval[] = [];
  const result: Interval[] = [];

  for (let i = 0; i < arr.length; i++) {
    const intervals = arr[i];
    for (let j = 0; j < intervals.length; j++) {
      tmp.push(intervals[j]);
    }
  }
  tmp.sort((a, b) => a[0] - b[0]);

  for (let i = 1; i < tmp.length; i++) {
    const [, end] = tmp[i - 1];
    const [start1] = tmp[i];
    if (end < start1) result.push([end, start1]);
  }

  return result;
}

export function testEmployeesFreeTime() {
  log('Expected [], got: ', JSON.stringify(getEmployeesFreeTime([])));
  log(
    'Expected [[3,5]], got: ',
    JSON.stringify(
      getEmployeesFreeTime([
        [
          [1, 3],
          [5, 6],
        ],
        [
          [2, 3],
          [6, 8],
        ],
      ])
    )
  );
  log(
    'Expected [[4,6], [8,9]], got: ',
    JSON.stringify(
      getEmployeesFreeTime([
        [
          [1, 3],
          [9, 12],
        ],
        [[2, 4]],
        [[6, 8]],
      ])
    )
  );
  log(
    'Expected [[5,7]], got: ',
    JSON.stringify(
      getEmployeesFreeTime([
        [[1, 3]],
        [[2, 4]],
        [
          [3, 5],
          [7, 9],
        ],
      ])
    )
  );
}
