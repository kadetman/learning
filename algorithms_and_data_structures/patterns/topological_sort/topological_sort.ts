import Deque from 'collections/deque';
import { log } from '../../linked_list/utils';

// https://www.educative.io/courses/grokking-the-coding-interview/m25rBmwLV00
function topologicalSort(
  vertices: number,
  edges: Array<[number, number]>
): number[] {
  const parentsCountByChild = new Map<number, number>();
  const childrenByParent = new Map<number, number[]>();
  // 1. Initialization - fill parents count by child and children by parent maps.
  for (const [parent, child] of edges) {
    parentsCountByChild.set(child, (parentsCountByChild.get(child) ?? 0) + 1);
    if (!parentsCountByChild.has(parent)) parentsCountByChild.set(parent, 0);

    if (!childrenByParent.has(parent)) childrenByParent.set(parent, []);
    childrenByParent.get(parent).push(child);
  }

  // 2. Add current sources to the queue.
  const sources = new Deque();
  for (const child of [...parentsCountByChild.keys()]) {
    if (parentsCountByChild.get(child) === 0) sources.push(child);
  }

  const sortedList = [];
  // 3. Traverse all sources.
  while (sources.length) {
    const source = sources.shift();
    sortedList.push(source);

    for (const child of childrenByParent.get(source) ?? []) {
      const count = parentsCountByChild.get(child) - 1;
      parentsCountByChild.set(child, count);
      if (count === 0) sources.push(child);
    }
  }

  // Can't sort the graph with cycles.
  if (sortedList.length < vertices) return [];

  return sortedList;
}

export function testTopologicalSort() {
  log(
    'Expected [], got: ',
    topologicalSort(2, [
      [1, 2],
      [2, 1],
    ])
  );
  log(
    'Expected [3,2,0,1], got: ',
    topologicalSort(4, [
      [3, 2],
      [3, 0],
      [2, 0],
      [2, 1],
    ])
  );
  log(
    'Expected [4,2,3,0,1], got: ',
    topologicalSort(5, [
      [4, 2],
      [4, 3],
      [2, 0],
      [2, 1],
      [3, 1],
    ])
  );
  log(
    'Expected [6,5,3,4,0,2,1], got: ',
    topologicalSort(7, [
      [6, 4],
      [6, 2],
      [5, 3],
      [5, 4],
      [3, 0],
      [3, 1],
      [3, 2],
      [4, 1],
    ])
  );
}

