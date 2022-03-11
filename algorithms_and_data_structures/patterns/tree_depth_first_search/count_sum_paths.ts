import { log } from '../../linked_list/utils';
import { BinaryTreeNode } from '../../utils/tree';

// https://www.educative.io/courses/grokking-the-coding-interview/xV2J7jvN1or
function countSumPaths(root: BinaryTreeNode, sum: number): number {
  return countNodeSumPaths(root, sum, []);
}

function countNodeSumPaths(
  node: BinaryTreeNode,
  sum: number,
  currentPath: number[]
): number {
  if (!node) return 0;

  currentPath.push(node.value);
  let sumCount = 0,
    currentSum = 0;
  // Try to find subPath with `sum` starting from current node and going up.
  for (let i = currentPath.length - 1; i >= 0; i--) {
    currentSum += currentPath[i];
    if (currentSum === sum) {
      sumCount++;
      break;
    }
  }

  sumCount += countNodeSumPaths(node.left, sum, currentPath);
  sumCount += countNodeSumPaths(node.right, sum, currentPath);

  currentPath.pop();
  return sumCount;
}

export function testSumPathsCount() {
  const root = new BinaryTreeNode(12);
  root.left = new BinaryTreeNode(7);
  root.right = new BinaryTreeNode(1);
  root.left.left = new BinaryTreeNode(4);
  root.right.left = new BinaryTreeNode(10);
  root.right.right = new BinaryTreeNode(5);

  log('Expected 2, got: ', countSumPaths(root, 11));
}
