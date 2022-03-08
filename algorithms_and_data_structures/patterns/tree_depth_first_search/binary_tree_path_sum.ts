import { log } from '../../linked_list/utils';
import { BinaryTreeNode } from '../../utils/tree';

// https://www.educative.io/courses/grokking-the-coding-interview/RMlGwgpoKKY
function hasPathSum(root: BinaryTreeNode, sum: number): boolean {
  if (!root) return false;
  if (!root.left && !root.right) return sum === root.value;

  sum -= root.value;
  return hasPathSum(root.left, sum) || hasPathSum(root.right, sum);
}

export function testPathSum() {
  const root = new BinaryTreeNode(1);
  root.left = new BinaryTreeNode(2);
  root.right = new BinaryTreeNode(3);
  root.left.left = new BinaryTreeNode(4);
  root.left.right = new BinaryTreeNode(5);
  root.right.right = new BinaryTreeNode(6);

  log('Expected true, got: ', hasPathSum(root, 8));
  log('Expected true, got: ', hasPathSum(root, 10));
  log('Expected false, got: ', hasPathSum(root, 11));
}
