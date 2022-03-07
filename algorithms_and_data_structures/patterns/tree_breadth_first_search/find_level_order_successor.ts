import { log } from '../../linked_list/utils';
import { BinaryTreeNode } from '../../utils/tree';

// https://www.educative.io/courses/grokking-the-coding-interview/7nO4VmA74Lr
function findLevelOrderSuccessor(
  root: BinaryTreeNode,
  key: number
): BinaryTreeNode | null {
  const queue: BinaryTreeNode[] = [root];

  while (queue.length) {
      const node = queue.shift();
      if (node.value === key) break;

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
  }

  return queue.length ? queue.shift() : null;
}

export function testLevelOrderSuccessor() {
  const root = new BinaryTreeNode(1);
  root.left = new BinaryTreeNode(2);
  root.right = new BinaryTreeNode(3);
  root.left.left = new BinaryTreeNode(4);
  root.left.right = new BinaryTreeNode(5);
  root.right.right = new BinaryTreeNode(6);

  log('Expected 5, got: ', findLevelOrderSuccessor(root, 4)?.value);
}
