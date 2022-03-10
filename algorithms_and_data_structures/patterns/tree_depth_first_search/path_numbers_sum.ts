import { log } from '../../linked_list/utils';
import { BinaryTreeNode } from '../../utils/tree';

// https://www.educative.io/courses/grokking-the-coding-interview/YQ5o5vEXP69
function getPathNumbersSum(root: BinaryTreeNode): number {
  return getNodePathSum(root, 0);
}

function getNodePathSum(node: BinaryTreeNode | null, pathSum: number): number {
  if (!node) return 0;

  pathSum = 10 * pathSum + node.value;
  if (!node.left && !node.right) {
    return pathSum;
  }

  return (
    getNodePathSum(node.left, pathSum) + getNodePathSum(node.right, pathSum)
  );
}

export function testPathNumbersSum() {
  const root = new BinaryTreeNode(1);
  root.left = new BinaryTreeNode(2);
  root.right = new BinaryTreeNode(3);
  root.left.left = new BinaryTreeNode(4);
  root.left.right = new BinaryTreeNode(5);
  root.right.right = new BinaryTreeNode(6);

  log('Expected 385, got: ', getPathNumbersSum(root));
}
