import { ILinkedListNode as ListNode } from './model';
import { getListItemsString, log } from './utils';

function deletedNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  if (!head) return null;

  let node = head;
  const items: ListNode[] = [];
  while (node) {
    items.push(node);
    node = node.next;
  }

  const index = items.length - n;
  if (index < 0) return null;
  if (index === 0) return head.next;

  items[index - 1].next = items[index].next;

  return head;
}

export function testDeletion() {
  const head: ListNode = { val: 0, next: null };
  const node1: ListNode = { val: 1, next: null };
  const node2: ListNode = { val: 2, next: null };
  const node3: ListNode = { val: 3, next: null };

  head.next = node1;
  node1.next = node2;
  node2.next = node3;

  log(
    'Expected [0, 1, 3], got: ',
    getListItemsString(deletedNthFromEnd(head, 2))
  );
}
