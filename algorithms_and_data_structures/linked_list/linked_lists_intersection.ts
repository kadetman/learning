import { ILinkedListNode as ListNode } from './model';
import { log } from './utils';

// https://leetcode.com/explore/learn/card/linked-list/214/two-pointer-technique/1215/
function getIntersectionNode(
  headA: ListNode | null,
  headB: ListNode | null
): ListNode | null {
  if (headA === headB) return headA;
  if (!headA || !headB) return null;

  let nextA = headA;
  let nextB = headB;
  const visited: Map<ListNode, boolean> = new Map([
    [nextA, true],
    [nextB, true],
  ]);

  while (nextA || nextB) {
    nextA = nextA?.next;
    if (visited.has(nextA)) return nextA;
    if (nextA) visited.set(nextA, true);

    nextB = nextB?.next;
    if (visited.has(nextB)) return nextB;
    if (nextB) visited.set(nextB, true);
  }

  return null;
}

export function testIntersection() {
  const headA = { val: 0, next: null };
  const nodeA1 = { val: 1, next: null };
  const nodeA2 = { val: 2, next: null };
  const nodeA3 = { val: 3, next: null };

  headA.next = nodeA1;
  nodeA1.next = nodeA2;
  nodeA2.next = nodeA3;

  const headB = { val: 4, next: null };
  const nodeB1 = { val: 5, next: null };
  const nodeB2 = { val: 6, next: null };

  headB.next = nodeB1;
  nodeB1.next = nodeB2;
  nodeB2.next = nodeA2;

  log('Expected "val: 2", got: ', getIntersectionNode(headA, headB)?.val);

  nodeB2.next = null;
  log('Expected null, got: ', getIntersectionNode(headA, headB));
}
