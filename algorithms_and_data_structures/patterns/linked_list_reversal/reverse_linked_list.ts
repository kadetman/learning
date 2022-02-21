import { ILinkedListNode } from '../../linked_list/model';
import { getListItemsString, log } from '../../linked_list/utils';

// https://www.educative.io/courses/grokking-the-coding-interview/3wENz1N4WW9
function reverse(head: ILinkedListNode): ILinkedListNode {
  let previous = null;

  while (head) {
    const next = head.next;
    head.next = previous;
    previous = head;
    head = next;
  }

  return previous;
}

export function testReversal() {
  const head: ILinkedListNode = { val: 1, next: null };
  head.next = { val: 2, next: null };
  head.next.next = { val: 3, next: null };
  head.next.next.next = { val: 4, next: null };

  log('Expected [4, 3, 2, 1], got: ', getListItemsString(reverse(head)));
}
