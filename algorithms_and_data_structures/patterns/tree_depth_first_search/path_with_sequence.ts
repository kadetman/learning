import { log } from '../../linked_list/utils';
import { BinaryTreeNode } from '../../utils/tree';

// https://www.educative.io/courses/grokking-the-coding-interview/m280XNlPOkn
function hasPathWithSequence(
  root: BinaryTreeNode,
  sequence: number[]
): boolean {
  return hasNodePathWithSequence(root, sequence, 0);
}

function hasNodePathWithSequence(
  node: BinaryTreeNode,
  sequence: number[],
  index: number
): boolean {
  if (!node || index >= sequence.length || node.value !== sequence[index])
    return false;
  if (!node.left && !node.right) return sequence.length === index + 1;

  return (
    hasNodePathWithSequence(node.left, sequence, index + 1) ||
    hasNodePathWithSequence(node.right, sequence, index + 1)
  );
}

export function testPathWithSequence() {
  const root = new BinaryTreeNode(1);
  root.left = new BinaryTreeNode(2);
  root.right = new BinaryTreeNode(3);
  root.left.left = new BinaryTreeNode(4);
  root.left.right = new BinaryTreeNode(5);
  root.right.right = new BinaryTreeNode(6);

  log('Expected true, got: ', hasPathWithSequence(root, [1, 2, 5]));
  log('Expected false, got: ', hasPathWithSequence(root, [1, 2, 5, 6]));
  log('Expected false, got: ', hasPathWithSequence(root, [1, 2, 3]));
}
