import { Point } from '../../utils/point';
import Heap from 'collections/heap';
import { log } from '../../linked_list/utils';

// https://www.educative.io/courses/grokking-the-coding-interview/3YxNVYwNR5p
function getClosestPoints(points: Point[], k: number): Point[] {
  if (k >= points.length) return [];

  const heap = new Heap(points.slice(0, k), null, (p1, p2) =>
    p1.compareByDistance(p2)
  );
  for (let i = k; i < points.length; i++) {
    if (points[i].compareByDistance(heap.peek()) < 0) {
      heap.pop();
      heap.push(points[i]);
    }
  }

  return heap.toArray();
}

export function testClosestPoints() {
  log('Expected [], got: ', getClosestPoints([], 0));
  log(
    'Expected [{"x":1,"y":2}], got: ',
    JSON.stringify(getClosestPoints([new Point(1, 2), new Point(1, 3)], 1))
  );
  log(
    'Expected [], got: ',
    JSON.stringify(
      getClosestPoints([new Point(1, 3), new Point(3, 4), new Point(2, -1)], 2)
    )
  );
}
