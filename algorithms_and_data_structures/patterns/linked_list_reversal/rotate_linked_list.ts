import { ILinkedListNode } from '../../linked_list/model';
import { getListItemsString, log } from '../../linked_list/utils';

// https://www.educative.io/courses/grokking-the-coding-interview/gkAM9kxgY8Z
function rotateList(head: ILinkedListNode, k: number): ILinkedListNode {
  if (!head?.next || k < 1) return head;

  let current = head,
    length = 1;
  while (current.next) {
    current = current.next;
    length++;
  }

  // Cycle the list.
  current.next = head;

  // Makes no sense to rotate more than "length" items;
  k = k % length;
  let skipCount = length - k;
  current = head;
  while (skipCount > 1) {
    skipCount--;
    current = current.next;
  }

  head = current.next;
  current.next = null;

  return head;
}

export function testRotations() {
  const head: ILinkedListNode = { val: 1, next: null };
  head.next = { val: 2, next: null };
  head.next.next = { val: 3, next: null };
  head.next.next.next = { val: 4, next: null };
  head.next.next.next.next = { val: 5, next: null };
  head.next.next.next.next.next = { val: 6, next: null };

  log(
    'Expected [4, 5, 6, 1, 2, 3], got: ',
    getListItemsString(rotateList(head, 9))
  );
  
}
