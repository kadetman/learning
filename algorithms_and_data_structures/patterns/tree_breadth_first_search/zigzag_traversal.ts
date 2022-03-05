import { log } from '../../linked_list/utils';
import { BinaryTreeNode } from '../../utils/tree';

// https://www.educative.io/courses/grokking-the-coding-interview/qVA27MMYYn0
function zigzagTraverse(root: BinaryTreeNode): Array<number[]> {
  const result: Array<number[]> = [];

  let levelSize = 0;
  let leftToRight = true;
  const queue: BinaryTreeNode[] = [root];

  while ((levelSize = queue.length)) {
    const values: number[] = [];
    while (levelSize) {
      const node = queue.shift();
      if (leftToRight) values.push(node.value);
      else values.unshift(node.value);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
      levelSize--;
    }

    result.push(values);
    leftToRight = !leftToRight;
  }

  return result;
}

export function testTraversal() {
  const root = new BinaryTreeNode(1);
  root.left = new BinaryTreeNode(2);
  root.right = new BinaryTreeNode(3);
  root.left.left = new BinaryTreeNode(4);
  root.left.right = new BinaryTreeNode(5);
  root.right.right = new BinaryTreeNode(6);

  log(
    'Expected [[1], [3, 2], [4, 5, 6]], got: ',
    JSON.stringify(zigzagTraverse(root))
  );
}
