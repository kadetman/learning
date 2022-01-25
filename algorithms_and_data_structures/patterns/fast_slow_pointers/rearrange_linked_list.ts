import { ILinkedListNode } from '../../linked_list/model';
import { getListItemsString, log } from '../../linked_list/utils';

// https://www.educative.io/courses/grokking-the-coding-interview/qAo438WozV7
function rearrangeList(head: ILinkedListNode) {
  let slow = head,
    fast = head;
  while (fast?.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let secondHalfHead = reverse(slow);
  let temp = null;
  while (head && secondHalfHead) {
    temp = head.next;
    head.next = secondHalfHead;
    head = temp;

    temp = secondHalfHead.next;
    secondHalfHead.next = head;
    secondHalfHead = temp;
  }

  if (head) head.next = null;
}

function reverse(head: ILinkedListNode): ILinkedListNode {
  let next = null,
    prev = null;
  while (head) {
    next = head.next;
    head.next = prev;
    prev = head;
    head = next;
  }

  return prev;
}

export function testRearrange() {
  const head: ILinkedListNode = { val: 1, next: null };
  head.next = { val: 2, next: null };
  head.next.next = { val: 3, next: null };
  head.next.next.next = { val: 4, next: null };
  head.next.next.next.next = { val: 5, next: null };
  log('Before', getListItemsString(head));
  rearrangeList(head);
  log('Expected [1, 5, 2, 4, 3], got ', getListItemsString(head));

  const head2: ILinkedListNode = { val: 1, next: null };
  head2.next = { val: 2, next: null };
  head2.next.next = { val: 3, next: null };
  head2.next.next.next = { val: 4, next: null };
  head2.next.next.next.next = { val: 5, next: null };
  head2.next.next.next.next.next = { val: 6, next: null };
  log('Before', getListItemsString(head2));
  rearrangeList(head2);
  log('Expected [1, 6, 2, 5, 3, 4], got ', getListItemsString(head2));
}
