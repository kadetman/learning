import { log } from '../../linked_list/utils';
import { BinaryTreeNode } from '../../utils/tree';

// https://www.educative.io/courses/grokking-the-coding-interview/B815A0y2Ajn
function findAllPaths(root: BinaryTreeNode, sum: number): Array<number[]> {
  const result: Array<number[]> = [];
  findNodePaths(root, sum, [], result);
  return result;
}

function findNodePaths(
  node: BinaryTreeNode,
  sum: number,
  stack: number[],
  allPaths: Array<number[]>
) {
  if (!node) return;

  // Add node before checking his children.
  stack.push(node.value);
  if (node.value === sum && !node.left && !node.right) {
    allPaths.push([...stack]);
  } else {
    findNodePaths(node.left, sum - node.value, stack, allPaths);
    findNodePaths(node.right, sum - node.value, stack, allPaths);
  }

  // Remove node after it and its children have been processed.
  stack.pop();
}

export function testAllPathsSum() {
  const root = new BinaryTreeNode(12);
  root.left = new BinaryTreeNode(7);
  root.right = new BinaryTreeNode(1);
  root.left.left = new BinaryTreeNode(4);
  root.right.left = new BinaryTreeNode(10);
  root.right.right = new BinaryTreeNode(5);

  log(
    'Expected [[12, 7, 4], [12, 1, 10]], got: ',
    JSON.stringify(findAllPaths(root, 23))
  );
}
