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

function getCycleStart(head: ILinkedListNode): ILinkedListNode | null {
  let cycleLength = getCycleLength(head);
  if (cycleLength === 0) return null;

  let p1 = head,
    p2 = head;
  while (cycleLength) {
    p2 = p2.next;
    cycleLength--;
  }

  while (p1 !== p2) {
    p2 = p2.next;
    p1 = p1.next;
  }

  return p1;
}

export function testCycle() {
  const head: ILinkedListNode = { val: 0, next: null };
  head.next = { val: 1, next: null };
  head.next.next = { val: 2, next: null };
  head.next.next.next = { val: 3, next: null };
  head.next.next.next.next = { val: 4, next: null };

  log('Expected false, got: ', hasCycle(head));
  log('Expected 0 nodes, got: ', getCycleLength(head));
  log('Expected null, got: ', getCycleStart(head)?.val ?? null);

  head.next.next.next.next = head;
  log('Expected true, got: ', hasCycle(head));
  log('Expected 0 nodes, got: ', getCycleLength(head));
  log('Expected node 0, got: ', getCycleStart(head)?.val ?? null);
}
