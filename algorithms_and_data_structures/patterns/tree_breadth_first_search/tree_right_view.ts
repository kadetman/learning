import { log } from '../../linked_list/utils';
import { BinaryTreeNode } from '../../utils/tree';

// https://www.educative.io/courses/grokking-the-coding-interview/gxVWnvZjMn9
function getRightView(root: BinaryTreeNode): number[] {
  const result: number[] = [];
  const queue: BinaryTreeNode[] = [root];

  let levelSize = 0;
  while ((levelSize = queue.length)) {
    while (levelSize) {
      const node = queue.shift();
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);

      if (levelSize === 1) result.push(node.value);
      levelSize--;
    }
  }

  return result;
}

export function testRightView() {
  const root = new BinaryTreeNode(1);
  root.left = new BinaryTreeNode(2);
  root.right = new BinaryTreeNode(3);
  root.left.left = new BinaryTreeNode(4);
  root.left.right = new BinaryTreeNode(5);
  root.right.right = new BinaryTreeNode(6);

  log('Expected [1, 3, 6], got: ', getRightView(root));
}
