import { log } from '../../linked_list/utils';
import { BinaryTreeNode } from '../../utils/tree';

// https://www.educative.io/courses/grokking-the-coding-interview/YQWkA2l67GW
function findLevelAverages(root: BinaryTreeNode): number[] {
  const result: number[] = [];
  const queue: BinaryTreeNode[] = [root];

  while (queue.length) {
    const levelSize = queue.length;
    let levelSum = 0;
    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      levelSum += node.value;
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    result.push(levelSum / levelSize);
  }

  return result;
}

export function testLevelAverages() {
  const root = new BinaryTreeNode(1);
  root.left = new BinaryTreeNode(2);
  root.right = new BinaryTreeNode(3);
  root.left.left = new BinaryTreeNode(4);
  root.left.right = new BinaryTreeNode(5);
  root.right.right = new BinaryTreeNode(6);

  log('Expected [1, 2.5, 5], got: ', JSON.stringify(findLevelAverages(root)));
}
