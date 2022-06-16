import Deque from 'collections/deque';
import { log } from '../../linked_list/utils';

// https://www.educative.io/courses/grokking-the-coding-interview/7nDN8y7JKVA
function getMinHeightTreeRoots(
  vertices: number,
  edges: Array<[number, number]>
): number[] {
  if (!vertices || !edges.length) return [];
  if (edges.length === 1) return edges[0];

  const depsCounts: { [key: number]: number } = {};
  const graph: { [key: number]: number[] } = {};

  for (let i = 0; i < vertices; i++) {
    depsCounts[i] = 0;
    graph[i] = [];
  }

  // Use both nodes as parent and child to each other as graph is undirected.
  for (const [node1, node2] of edges) {
    depsCounts[node1]++;
    depsCounts[node2]++;
    graph[node1].push(node2);
    graph[node2].push(node1);
  }

  const sources = new Deque();

  // Add leaf nodes to sources.
  for (const node of Object.keys(depsCounts).map(Number)) {
    if (depsCounts[node] === 1) sources.push(node);
  }

  let totalNodes = vertices;
  while (totalNodes > 2) {
    const len = sources.length;
    for (let i = 0; i < len; i++) {
      const node = sources.shift();
      totalNodes--;
      for (const child of graph[node]) {
        depsCounts[child]--;
        if (depsCounts[child] === 1) sources.push(child);
      }
    }
  }

  return sources.toArray();
}

export function testMinHeightTreeRoots() {
  log('Expected [], got: ', getMinHeightTreeRoots(0, [[1, 2]]));
  log('Expected [], got: ', getMinHeightTreeRoots(1, []));
  log(
    'Expected [1, 2], got: ',
    getMinHeightTreeRoots(5, [
      [0, 1],
      [1, 2],
      [1, 3],
      [2, 4],
    ])
  );
  log(
    'Expected [0, 2], got: ',
    getMinHeightTreeRoots(4, [
      [0, 1],
      [0, 2],
      [2, 3],
    ])
  );
  log(
    'Expected [1], got: ',
    getMinHeightTreeRoots(4, [
      [0, 1],
      [1, 2],
      [1, 3],
    ])
  );
}
