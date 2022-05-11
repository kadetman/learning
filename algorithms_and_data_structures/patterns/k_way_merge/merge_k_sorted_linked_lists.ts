import { ILinkedListNode } from '../../linked_list/model';
import { getListItemsString, log } from '../../linked_list/utils';
import Heap from 'collections/heap';

// https://www.educative.io/courses/grokking-the-coding-interview/Y5n0n3vAgYK
function mergeLists(lists: ILinkedListNode[]): ILinkedListNode {
  const minHeap = new Heap([], null, (a, b) => b.val - a.val);
  for (const head of lists) {
    minHeap.push(head);
  }

  let head = null,
    tail = null;
  while (minHeap.length) {
    const minNode = minHeap.pop();
    if (!head) {
      head = tail = minNode;
    } else {
      tail.next = minNode;
      tail = tail.next;
    }

    // Get the next node from the list with current min value and add itto the heap.
    const nextNode = minNode.next;
    if (nextNode) {
      minHeap.push(nextNode);
    }
  }

  return head;
}

export function testMergedLists() {
  const head1: ILinkedListNode = { val: 2, next: null };
  head1.next = { val: 6, next: null };
  head1.next.next = { val: 8, next: null };

  const head2: ILinkedListNode = { val: 3, next: null };
  head2.next = { val: 6, next: null };
  head2.next.next = { val: 7, next: null };

  const head3: ILinkedListNode = { val: 1, next: null };
  head3.next = { val: 3, next: null };
  head3.next.next = { val: 4, next: null };

  log(
    'Expected [1, 2, 3, 3, 4, 6, 6, 7, 8], got: ',
    getListItemsString(mergeLists([head1, head2, head3]))
  );
}
