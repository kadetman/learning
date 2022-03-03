import { log } from '../../linked_list/utils';
import { BinaryTreeNode } from '../../utils/tree';

// https://www.educative.io/courses/grokking-the-coding-interview/xV7E64m4lnz
function traverse(root: BinaryTreeNode): Array<number[]> {
  const result: Array<number[]> = [];

  let level = 0;
  const queue: BinaryTreeNode[] = [root];
  while (queue.length) {
    let levelSize = queue.length;
    const values: number[] = [];
    while (levelSize) {
      const node = queue.shift();
      values.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
      levelSize--;
    }

    result[level] = values;
    level++;
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
    'Expected [[1], [2, 3], [4, 5, 6]], got: ',
    JSON.stringify(traverse(root))
  );
}
