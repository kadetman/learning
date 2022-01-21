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

function getCycleLength(head: ILinkedListNode): number {
  let slow = head,
    fast = head;
  while (fast?.next) {
    fast = fast.next?.next;
    slow = slow.next;
    if (fast === slow) {
      return calculateCycleLength(slow);
    }
  }

  return 0;
}

function calculateCycleLength(node: ILinkedListNode): number {
  const slow = node;
  let counter = 1;

  while (node.next !== slow) {
    counter++;
    node = node.next;
  }

  return counter;
}

export function testCycle() {
  const head: ILinkedListNode = { val: 0, next: null };
  head.next = { val: 1, next: null };
  head.next.next = { val: 2, next: null };
  head.next.next.next = { val: 3, next: null };
  head.next.next.next.next = { val: 4, next: null };

  log('Expected false, got: ', hasCycle(head));
  log('Expected 0, got: ', getCycleLength(head));

  head.next.next.next.next = head;
  log('Expected true, got: ', hasCycle(head));
  log('Expected 4, got: ', getCycleLength(head));
}
