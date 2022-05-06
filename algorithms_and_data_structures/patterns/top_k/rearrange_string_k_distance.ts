import Heap from 'collections/heap';
import Deque from 'collections/deque';
import { log } from '../../linked_list/utils';

// https://www.educative.io/courses/grokking-the-coding-interview/qA7n6820GjG
function rearrangeString(str: string, k: number): string {
  const countByChar = new Map<string, number>();
  for (const char of str) {
    countByChar.set(char, (countByChar.get(char) ?? 0) + 1);
  }

  const maxHeap = new Heap(
    [...countByChar.keys()],
    null,
    (a, b) => countByChar.get(a) - countByChar.get(b)
  );
  const queue = new Deque();
  const result: string[] = [];

  while (maxHeap.length) {
    const char = maxHeap.pop();
    queue.push(char);
    result.push(char);
    countByChar.set(char, countByChar.get(char) - 1);

    if (queue.length === k) {
      const char = queue.shift();
      if (countByChar.get(char) > 0) maxHeap.push(char);
    }
  }

  return str.length === result.length ? result.join('') : '';
}

export function testRearrangedString() {
  log('Expected "", got: ', `"${rearrangeString('', 1)}"`);
  log('Expected "", got: ', `"${rearrangeString('aapa', 3)}"`);
  log('Expected "mpmp", got: ', `"${rearrangeString('mmpp', 2)}"`);
  log(
    'Expected "rgmorgmaPin", got: ',
    `"${rearrangeString('Programming', 3)}"`
  );
  log('Expected "aba", got: ', `"${rearrangeString('aab', 2)}"`);
}
