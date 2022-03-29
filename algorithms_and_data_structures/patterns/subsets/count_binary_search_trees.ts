import { log } from '../../linked_list/utils';

// https://www.educative.io/courses/grokking-the-coding-interview/NE1V3EDAnWN
function countTrees(n: number): number {
  return countTreesRecursive(n, new Map());
}

function countTreesRecursive(n: number, map: Map<number, number>): number {
  // "null" subtree.
  if (n <= 0) return 1;
  // Return memoized value.
  if (map.has(n)) return map.get(n);

  let result = 0;
  // Go through each number considerring current "i" as a root.
  for (let i = 1; i <= n; i++) {
    // We don't need to provide exact start/end numbers,
    // only the number of items is important for counting.
    const leftTreesCount = countTreesRecursive(i - 1, map);
    const rightTreesCount = countTreesRecursive(n - i, map);
    result += leftTreesCount * rightTreesCount;
  }

  map.set(n, result);

  return result;
}

export function testTreesCount() {
  log('Expected 0, got: ', countTrees(0));
  log('Expected 1, got: ', countTrees(1));
  log('Expected 2, got: ', countTrees(2));
  log('Expected 5, got: ', countTrees(3));
}
