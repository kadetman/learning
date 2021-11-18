import { ILinkedListNode } from './model';
import { log } from './utils';

// https://leetcode.com/explore/learn/card/linked-list/214/two-pointer-technique/1212/
function hasCycle(head: ILinkedListNode | null): boolean {
  if (!head?.next) return false;

  let p1 = head;
  let p2 = head.next;

  while (p2 && p2 !== p1) {
    p1 = p1?.next;
    p2 = p2?.next?.next;
  }

  return !!p2;
}

export function testCycle() {
  const head: ILinkedListNode = { val: 0, next: null };
  const node1: ILinkedListNode = { val: 1, next: null };
  const node2: ILinkedListNode = { val: 2, next: null };
  const node3: ILinkedListNode = { val: 3, next: null };

  head.next = node1;
  node1.next = node2;
  node2.next = node3;
  node3.next = node1;

  log('Expected true, got: ', hasCycle(head));

  node3.next = null;
  log('Expected false, got: ', hasCycle(head));
}
