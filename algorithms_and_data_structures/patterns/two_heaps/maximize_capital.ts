import Heap from 'collections/heap';
import { log } from '../../linked_list/utils';

// https://www.educative.io/courses/grokking-the-coding-interview/B6x69OLX4jY
function maximizeCapital(
  capitals: number[],
  profits: number[],
  numberOfProjects: number,
  initialCapital: number
): number {
  let maxCapital = initialCapital;
  const minCapitals = new Heap(
    capitals.map((c, i) => [c, i]),
    null,
    (a, b) => b[0] - a[0]
  );
  const maxProfits = new Heap([], null, (a, b) => a[0] - b[0]);

  for (let i = 0; i < numberOfProjects; i++) {
    while (minCapitals.length && minCapitals.peek()[0] <= maxCapital) {
      const index = minCapitals.pop()[1];
      maxProfits.push([profits[index], index]);
    }

    if (maxProfits.length === 0) break;

    maxCapital += maxProfits.pop()[0];
  }

  return maxCapital;
}

export function testMaxCapital() {
  log('Expected 6, got: ', maximizeCapital([1, 2, 0], [3, 2, 1], 2, 1));
  log('Expected 8, got: ', maximizeCapital([1, 2, 0, 3], [2, 3, 1, 5], 3, 0));
}
