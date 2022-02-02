import { log } from '../../linked_list/utils';
import { Interval } from './model';

// https://www.educative.io/courses/grokking-the-coding-interview/qVV79nGVgAG
function getConflictingAppointments(
  arr: Interval[]
): Array<[Interval, Interval]> {
  const result: Array<[Interval, Interval]> = [];
  arr.sort(([start1], [start2]) => start1 - start2);

  for (let i = 0; i < arr.length - 1; i++) {
    const [start, end] = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      const [start1, end1] = arr[j];
      if (end > start1) {
        result.push([
          [start, end],
          [start1, end1],
        ]);
      } else break;
    }
  }

  return result;
}

export function testConflictingAppointments() {
  log('Expected [], got: ', JSON.stringify(getConflictingAppointments([])));
  log(
    'Expected [], got: ',
    JSON.stringify(getConflictingAppointments([[1, 2]]))
  );
  log(
    'Expected [], got: ',
    JSON.stringify(
      getConflictingAppointments([
        [1, 2],
        [2, 3],
      ])
    )
  );
  log(
    'Expected [ [[3,6], [4,5]], [[3,6], [5,7]] ], got: ',
    JSON.stringify(
      getConflictingAppointments([
        [4, 5],
        [2, 3],
        [3, 6],
        [5, 7],
        [7, 8],
      ])
    )
  );
  log(
    'Expected [[[1,6],[1,10]],[[1,6],[2,5]],[[1,6],[3,5]],[[1,10],[2,5]],[[1,10],[3,5]],[[1,10],[7,8]],[[2,5],[3,5]]], got: ',
    JSON.stringify(
      getConflictingAppointments([
        [3, 5],
        [2, 5],
        [1, 6],
        [1, 10],
        [7, 8],
      ])
    )
  );
}
