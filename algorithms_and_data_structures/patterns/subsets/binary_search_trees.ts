import { log } from '../../linked_list/utils';
import { BinaryTreeNode } from '../../utils/tree';

// https://www.educative.io/courses/grokking-the-coding-interview/xVQyDZBMpKE
function getBinarySearchTrees(n: number): Array<BinaryTreeNode | null> {
  return n <= 0 ? [] : getBinarySearchTreesRecursive(1, n);
}

function getBinarySearchTreesRecursive(
  start: number,
  end: number
): Array<BinaryTreeNode | null> {
  if (start > end) return [null];

  const result: Array<BinaryTreeNode | null> = [];
  for (let i = start; i <= end; i++) {
    const leftTrees = getBinarySearchTreesRecursive(start, i - 1);
    const rightTrees = getBinarySearchTreesRecursive(i + 1, end);

    for (let l = 0; l < leftTrees.length; l++) {
      for (let r = 0; r < rightTrees.length; r++) {
        const root: BinaryTreeNode = {
          value: i,
          left: leftTrees[l],
          right: rightTrees[r],
        };
        result.push(root);
      }
    }
  }

  return result;
}

export function testBinarySearchTrees() {
  log('Expected 0, got: ', getBinarySearchTrees(0).length);
  log('Expected 1, got: ', getBinarySearchTrees(1).length);
  log('Expected 2, got: ', getBinarySearchTrees(2).length);
  log('Expected 5, got: ', getBinarySearchTrees(3).length);
}
