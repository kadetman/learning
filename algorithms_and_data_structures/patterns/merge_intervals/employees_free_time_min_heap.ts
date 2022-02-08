import { Interval } from './model';
import Heap from 'collections/heap';
import { log } from '../../linked_list/utils';

class Employee {
  constructor(
    public readonly intervals: Interval[],
    public readonly intervalIndex: number
  ) {}
}

// https://www.educative.io/courses/grokking-the-coding-interview/RLwKZWgMJ1q
function getEmployeesFreeTime(arr: Array<Interval[]>): Interval[] {
  const result: Interval[] = [];
  // Min Head with the earlest start time at the top.
  const minHeap = new Heap(
    [],
    null,
    (a, b) => b.intervals[b.intervalIndex][0] - a.intervals[a.intervalIndex][0]
  );

  for (let i = 0; i < arr.length; i++) {
    const intervals = arr[i];
    minHeap.push(new Employee(intervals, 0));
  }

  if (!minHeap.length) return [];

  let previousInterval = minHeap.peek().intervals[0];

  while (minHeap.length) {
    const employee = minHeap.pop();
    const interval = employee.intervals[employee.intervalIndex];
    // Add free time interval if previous and current don't intersect.
    if (previousInterval[1] < interval[0]) {
      result.push([previousInterval[1], interval[0]]);
      previousInterval = interval;
    } else {
      // If intervals intersect, use the widest as previous.
      if (previousInterval[1] < interval[1]) {
        previousInterval = interval;
      }
    }

    if (employee.intervals.length > employee.intervalIndex + 1) {
      minHeap.push(
        new Employee(employee.intervals, employee.intervalIndex + 1)
      );
    }
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
  log(
    'Expected [[6,7]], got: ',
    JSON.stringify(
      getEmployeesFreeTime([
        [
          [1, 6],
          [5, 6],
        ],
        [
          [1, 3],
          [7, 8],
        ],
      ])
    )
  );
}
