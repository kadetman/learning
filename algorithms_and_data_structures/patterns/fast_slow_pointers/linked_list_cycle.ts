import { ILinkedListNode } from '../../linked_list/model';
import { log } from '../../linked_list/utils';

// https://www.educative.io/courses/grokking-the-coding-interview/N7rwVyAZl6D
function hasCycle(head: ILinkedListNode): boolean {
  let slow = head,
    fast = head;
  while (fast?.next) {
    fast = fast?.next?.next;
    slow = slow.next;
    if (slow === fast) return true;
  }

  return false;
}

export function testCycle() {
  const head: ILinkedListNode = { val: 0, next: null };
  head.next = { val: 1, next: null };
  head.next.next = { val: 2, next: null };
  head.next.next.next = { val: 3, next: null };
  head.next.next.next.next = { val: 4, next: null };

  log('Expected false, got: ', hasCycle(head));

  head.next.next.next.next = head;
  log('Expected true, got: ', hasCycle(head));
}
