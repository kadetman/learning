import { log } from '../../linked_list/utils';
import { BinaryTreeNode } from '../../utils/tree';

// https://www.educative.io/courses/grokking-the-coding-interview/JYVW7l2L4EJ
function getDiameterLength(root: BinaryTreeNode): number {
  const diameters: number[] = [0];
  calculateNodeHeight(root, diameters);

  return diameters[0];
}

function calculateNodeHeight(node: BinaryTreeNode, diameters): number {
  if (!node) return 0;

  const leftNodeHeight = calculateNodeHeight(node.left, diameters);
  const rightNodeHeight = calculateNodeHeight(node.right, diameters);

  // If there is no left or right child node - they can't form a diameter.
  if (leftNodeHeight && rightNodeHeight) {
    diameters[0] = Math.max(diameters[0], leftNodeHeight + rightNodeHeight + 1);
  }

  return Math.max(leftNodeHeight, rightNodeHeight) + 1;
}

export function testDiameter() {
  const root = new BinaryTreeNode(1);
  root.left = new BinaryTreeNode(2);
  root.right = new BinaryTreeNode(3);
  root.left.left = new BinaryTreeNode(4);
  root.right.left = new BinaryTreeNode(5);
  root.right.right = new BinaryTreeNode(6);
  log('Expected 5, got: ', getDiameterLength(root));

  root.left.left = null;
  root.right.left.left = new BinaryTreeNode(7);
  root.right.left.right = new BinaryTreeNode(8);
  root.right.right.left = new BinaryTreeNode(9);
  root.right.left.right.left = new BinaryTreeNode(10);
  root.right.right.left.left = new BinaryTreeNode(11);
  log('Expected 7, got: ', getDiameterLength(root));
}
