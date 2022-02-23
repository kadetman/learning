import { ILinkedListNode } from '../../linked_list/model';
import { getListItemsString, log } from '../../linked_list/utils';

// https://www.educative.io/courses/grokking-the-coding-interview/RMZylvkGznR
function reverseSublists(head: ILinkedListNode, k: number): ILinkedListNode {
  let current = head,
    previous = null,
    currentSublistTail = null,
    previousSublistTail = null;

  while (true) {
    currentSublistTail = current;

    let i = 0;
    while (current && i < k) {
      const next = current.next;
      current.next = previous;
      previous = current;
      current = next;
      i++;
    }

    // previous points to sublist head after reversal.
    if (previousSublistTail) previousSublistTail.next = previous;
    if (currentSublistTail === head) head = previous;

    if (!current) break;

    previousSublistTail = currentSublistTail;
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
    'Expected [3, 2, 1, 6, 5, 4, 8, 7], got: ',
    getListItemsString(reverseSublists(head, 3))
  );
}
