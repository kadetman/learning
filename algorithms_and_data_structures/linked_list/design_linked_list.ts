import { ILinkedList, ILinkedListNode } from './model';
import { log, printList } from './utils';

// https://leetcode.com/explore/learn/card/linked-list/209/singly-linked-list/1290/
class MyLinkedList implements ILinkedList {
  private head: ILinkedListNode | null = null;
  private count = 0;

  constructor() {}

  private getNode(index: number): ILinkedListNode | null {
    if (index < 0 || index >= this.count) return null;
    if (index === 0) return this.head;

    let node: ILinkedListNode | null = this.head;
    let i = 0;

    while ((node = node?.next) && ++i < index) {}

    return i == index ? node : null;
  }

  get(index: number): number {
    return this.getNode(index)?.val ?? -1;
  }

  addAtHead(val: number): void {
    this.addAtIndex(0, val);
  }

  addAtTail(val: number): void {
    this.addAtIndex(this.count, val);
  }

  addAtIndex(index: number, val: number): void {
    if (index < 0 || index > this.count) return;
    if (index === 0) {
      this.head = { val, next: this.head };
      this.count++;
      return;
    }

    const prev = this.getNode(index - 1);
    const next = prev?.next ?? this.getNode(index);
    const node = { val, next };

    if (prev) prev.next = node;

    this.count++;
  }

  deleteAtIndex(index: number): void {
    if (index < 0 || index >= this.count) return;
    if (index === 0) {
      this.head = this.head?.next;
      this.count--;
      return;
    }

    const prev = this.getNode(index - 1);
    const next = prev?.next?.next ?? this.getNode(index)?.next;

    if (prev) prev.next = next;
    this.count--;
  }
}

export function testLinkedList() {
  const list = new MyLinkedList();
  printList(list);
  log('get(0): ', list.get(0));
  list.addAtHead(1);
  log('addAtHead(1)');
  printList(list);
  list.addAtTail(2);
  log('addAtTail(2)');
  printList(list);
  list.addAtIndex(1, 3);
  log('addAtIndex(1, 3)');
  printList(list);
  list.deleteAtIndex(1);
  log('deleteAtIndex(1)');
  printList(list);
  list.addAtHead(4);
  log('addAtHead(4)');
  printList(list);
}
