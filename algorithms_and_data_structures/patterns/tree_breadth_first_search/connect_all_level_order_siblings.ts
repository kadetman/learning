import { log } from '../../linked_list/utils';
import { BinaryTreeLinkedNode } from '../../utils/tree';

// https://www.educative.io/courses/grokking-the-coding-interview/qVxy1qop77p
function connectAllLevelOrderSibligns(root: BinaryTreeLinkedNode) {
  const queue: BinaryTreeLinkedNode[] = [root];

  while (queue.length) {
    const node = queue.shift();
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
    node.next = queue[0];
  }
}

export function testConnectedSiblings() {
  const root = new BinaryTreeLinkedNode(1);
  root.left = new BinaryTreeLinkedNode(2);
  root.right = new BinaryTreeLinkedNode(3);
  root.left.left = new BinaryTreeLinkedNode(4);
  root.left.right = new BinaryTreeLinkedNode(6);
  root.right.right = new BinaryTreeLinkedNode(5);

  connectAllLevelOrderSibligns(root);
  log('Expected 1, 2, 3, 4, 6, 5. Got: ');
  root.printLinkedNodes();
}
