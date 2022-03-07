export class BinaryTreeNode {
  left?: BinaryTreeNode;
  right?: BinaryTreeNode;

  constructor(public readonly value: number) {}
}

export class BinaryTreeLinkedNode {
  left?: BinaryTreeLinkedNode;
  right?: BinaryTreeLinkedNode;
  next?: BinaryTreeLinkedNode;

  constructor(public readonly value: number) {}

  printLinkedNodes() {
    const result: string[] = [];
    let current: BinaryTreeLinkedNode | undefined = this;
    while (current) {
      result.push(current.value.toString());
      current = current.next;
    }

    console.log(result.join(', '));
  }
}
