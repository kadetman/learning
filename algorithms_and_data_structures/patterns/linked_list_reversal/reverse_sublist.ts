import { ILinkedListNode } from '../../linked_list/model';
import { getListItemsString, log } from '../../linked_list/utils';

// https://www.educative.io/courses/grokking-the-coding-interview/qVANqMonoB2
function reverseSublist(
  head: ILinkedListNode,
  start: number,
  end: number
): ILinkedListNode {
  let firstPartEnd = null,
    sublistHead = null,
    secondPartStart = null;
  let pos = 1;
  let current = head;
  while (current && pos <= end) {
    if (start === 1 && pos === 1) {
      sublistHead = head;
    } else if (pos === start - 1) {
      firstPartEnd = current;
      sublistHead = current.next;
    } else if (pos === end) {
      secondPartStart = current.next;
      current.next = null;
      break;
    }

    current = current.next;
    pos++;
  }

  const newSublistHead = reverse(sublistHead);
  if (firstPartEnd) firstPartEnd.next = newSublistHead;
  else head = newSublistHead;
  // sublistHead now points to the sublist tail.
  sublistHead.next = secondPartStart;

  return head;
}

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

export function testSublistReversal() {
  const head: ILinkedListNode = { val: 1, next: null };
  head.next = { val: 2, next: null };
  head.next.next = { val: 3, next: null };
  head.next.next.next = { val: 4, next: null };

  log(
    'Expected [3, 2, 1, 4], got',
    getListItemsString(reverseSublist(head, 1, 3))
  );

  const head2: ILinkedListNode = { val: 1, next: null };
  head2.next = { val: 2, next: null };
  head2.next.next = { val: 3, next: null };
  head2.next.next.next = { val: 4, next: null };
  head2.next.next.next.next = { val: 5, next: null };

  log(
    'Expected [1, 4, 3, 2, 5], got',
    getListItemsString(reverseSublist(head2, 2, 4))
  );
}
