import { log } from '../../linked_list/utils';
import { Interval } from './model';

// https://www.educative.io/courses/grokking-the-coding-interview/JExVVqRAN9D
function findIntersections(arr1: Interval[], arr2: Interval[]): Interval[] {
  const result: Interval[] = [];

  let i1 = 0,
    i2 = 0;

  while (i1 < arr1.length && i2 < arr2.length) {
    const [start1, end1] = arr1[i1];
    const [start2, end2] = arr2[i2];

    // 2 intervals intersect if one of them has "start" inside the other.
    if (
      (start1 >= start2 && start1 <= end2) ||
      (start2 >= start1 && start2 <= end1)
    ) {
      result.push([Math.max(start1, start2), Math.min(end1, end2)]);
    }

    if (end1 < end2) i1++;
    else i2++;
  }

  return result;
}

export function testIntersection() {
  log('Expected [], got: ', JSON.stringify(findIntersections([], [])));
  log('Expected [], got: ', JSON.stringify(findIntersections([[1, 2]], [])));
  log(
    'Expected [], got: ',
    JSON.stringify(
      findIntersections(
        [
          [1, 2],
          [5, 10],
        ],
        [[3, 4]]
      )
    )
  );
  log(
    'Expected [[1,4], [5,5], [8,9]], got: ',
    JSON.stringify(
      findIntersections(
        [
          [1, 5],
          [8, 10],
        ],
        [
          [0, 4],
          [5, 9],
        ]
      )
    )
  );
  log(
    'Expected [[2, 3], [5, 6], [7, 7]], got: ',
    JSON.stringify(
      findIntersections(
        [
          [1, 3],
          [5, 6],
          [7, 9],
        ],
        [
          [2, 3],
          [5, 7],
        ]
      )
    )
  );
}
