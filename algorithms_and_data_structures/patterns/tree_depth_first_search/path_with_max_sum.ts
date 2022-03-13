import { log } from '../../linked_list/utils';
import { BinaryTreeNode } from '../../utils/tree';

// https://www.educative.io/courses/grokking-the-coding-interview/xVPgnOvWVJq
function findMaxSumPath(root: BinaryTreeNode): number {
  const sums = [-Infinity];
  calculateNodeMaxSum(root, sums);
  return sums[0];
}

function calculateNodeMaxSum(node: BinaryTreeNode, sums): number {
  if (!node) return 0;

  const leftNodeMaxSum = Math.max(calculateNodeMaxSum(node.left, sums), 0);
  const rightNodeMaxSum = Math.max(calculateNodeMaxSum(node.right, sums), 0);
  sums[0] = Math.max(sums[0], leftNodeMaxSum + rightNodeMaxSum + node.value);

  return Math.max(leftNodeMaxSum, rightNodeMaxSum) + node.value;
}

export function testMaxSumPath() {
  let root = new BinaryTreeNode(1);
  root.left = new BinaryTreeNode(2);
  root.right = new BinaryTreeNode(3);
  log('Expected 6, got: ', findMaxSumPath(root));

  root.left.left = new BinaryTreeNode(1);
  root.left.right = new BinaryTreeNode(3);
  root.right.left = new BinaryTreeNode(5);
  root.right.right = new BinaryTreeNode(6);
  root.right.left.left = new BinaryTreeNode(7);
  root.right.left.right = new BinaryTreeNode(8);
  root.right.right.left = new BinaryTreeNode(9);
  log('Expected 31, got: ', findMaxSumPath(root));

  root = new BinaryTreeNode(-1);
  root.left = new BinaryTreeNode(-3);
  log('Expected -1, got: ', findMaxSumPath(root));
}
