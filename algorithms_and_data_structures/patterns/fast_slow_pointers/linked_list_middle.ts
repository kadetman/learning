import { ILinkedListNode } from '../../linked_list/model';
import { log } from '../../linked_list/utils';

// https://www.educative.io/courses/grokking-the-coding-interview/3j5GD3EQMGM
function findMiddle(head: ILinkedListNode): ILinkedListNode {
  let slow = head,
    fast = head;
  while (fast?.next) {
    slow = slow.next;
    fast = fast.next?.next;
  }

  return slow;
}

export function testMiddle() {
  const head: ILinkedListNode = { val: 1, next: null };
  head.next = { val: 2, next: null };
  head.next.next = { val: 3, next: null };
  head.next.next.next = { val: 4, next: null };
  head.next.next.next.next = { val: 5, next: null };
  log('Expected 3, got: ', findMiddle(head).val);

  head.next.next.next.next.next = { val: 6, next: null };
  log('Expected 4, got: ', findMiddle(head).val);

  head.next.next.next.next.next.next = { val: 7, next: null };
  log('Expected 4, got: ', findMiddle(head).val);
}
