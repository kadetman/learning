import { log } from '../../linked_list/utils';
import { BinaryTreeNode } from '../../utils/tree';

// https://www.educative.io/courses/grokking-the-coding-interview/3jwVx84OMkO
function findMinDepth(root: BinaryTreeNode): number {
  let minDepth = 0;
  const queue: BinaryTreeNode[] = [root];

  while (queue.length) {
    minDepth++;
    const levelSize = queue.length;
    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      if (!node.left && !node.right) return minDepth;

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }
}

export function testMinDepth() {
  const root = new BinaryTreeNode(1);
  root.left = new BinaryTreeNode(2);
  root.right = new BinaryTreeNode(3);
  root.left.left = new BinaryTreeNode(4);
  log('Expected 2, got: ', findMinDepth(root));

  root.right.right = new BinaryTreeNode(5);
  log('Expected 3, got: ', findMinDepth(root));
}
