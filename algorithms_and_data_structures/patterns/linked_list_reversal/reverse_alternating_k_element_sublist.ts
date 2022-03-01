import { ILinkedListNode } from '../../linked_list/model';
import { getListItemsString, log } from '../../linked_list/utils';

// https://www.educative.io/courses/grokking-the-coding-interview/q2lZKgLm980
function reverseSublists(head: ILinkedListNode, k: number): ILinkedListNode {
  if (k <= 1 || !head) return head;

  let current = head,
    previous = null;

  while (current) {
    let previousPartLastNode = previous;
    // current will point to a sublist tail after reversal.
    let currentSublistTail = current;

    let i = 0;
    while (current && i < k) {
      const next = current.next;
      current.next = previous;
      previous = current;
      current = next;
      i++;
    }

    if (previousPartLastNode) previousPartLastNode.next = previous;
    else head = previous;

    currentSublistTail.next = current;

    i = 0;
    while (current && i < k) {
      previous = current;
      current = current.next;
      i++;
    }
  }

  return head;
}

export function testSublistsReversal() {
  const head: ILinkedListNode = { val: 1, next: null };
  head.next = { val: 2, next: null };
  head.next.next = { val: 3, next: null };
  head.next.next.next = { val: 4, next: null };
  head.next.next.next.next = { val: 5, next: null };
  head.next.next.next.next.next = { val: 6, next: null };
  head.next.next.next.next.next.next = { val: 7, next: null };
  head.next.next.next.next.next.next.next = { val: 8, next: null };

  log(
    'Expected [2, 1, 3, 4, 6, 5, 7, 8], got: ',
    getListItemsString(reverseSublists(head, 2))
  );

  const head2: ILinkedListNode = { val: 1, next: null };
  head2.next = { val: 2, next: null };

  log('Expected [2, 1], got: ', getListItemsString(reverseSublists(head2, 3)));
}
