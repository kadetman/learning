import { ILinkedListNode } from './model';
import { log } from './utils';

function detectCycle(head: ILinkedListNode | null): ILinkedListNode | null {
  if (!head?.next) return null;

  let p1: ILinkedListNode | null = head;
  const visited: Map<ILinkedListNode, boolean> = new Map([[head, true]]);

  while (p1?.next && !visited.has(p1.next)) {
    p1 = p1.next;
    visited.set(p1, true);
  }

  return p1?.next;
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

  log(
    'Expected {val: 1}, got: ',
    JSON.stringify({ val: detectCycle(head)?.val })
  );

  node3.next = null;

  log('Expected null, got: ', detectCycle(head));
}
