import Heap from 'collections/heap';
import { log } from '../../linked_list/utils';

// https://www.educative.io/courses/grokking-the-coding-interview/xV7wx4o8ymB
function rearrangeString(str: string): string {
  const countByChar = new Map<string, number>();
  for (const char of str) {
    countByChar.set(char, (countByChar.get(char) ?? 0) + 1);
  }

  const uniqueChars = [...countByChar.keys()];
  const maxHeap = new Heap(
    uniqueChars,
    null,
    (a, b) => countByChar.get(a) - countByChar.get(b)
  );
  const result: string[] = [];

  let unmatchedChar = '',
    unmatchedCount = 0;
  while (maxHeap.length) {
    const char = maxHeap.pop();
    const count = countByChar.get(char);
    if (unmatchedCount === 0) {
      unmatchedChar = char;
      unmatchedCount = count;
      continue;
    }

    // Push all matched pairs into the result.
    let matchedCount = Math.min(unmatchedCount, count);
    while (matchedCount) {
      result.push(unmatchedChar);
      result.push(char);
      matchedCount--;
    }

    unmatchedCount -= count;
    // Change unmatched char if all previous chars where matched by current one.
    if (unmatchedCount < 0) {
      unmatchedCount *= -1;
      unmatchedChar = char;
    }
  }

  if (unmatchedCount > 0) result.push(unmatchedChar);

  return unmatchedCount > 1 ? '' : result.join('');
}

export function testRearrangedString() {
  log('Expected "", got: ', `"${rearrangeString('')}"`);
  log('Expected "", got: ', `"${rearrangeString('aapa')}"`);
  log('Expected "papap", got: ', `"${rearrangeString('aappp')}"`);
  log('Expected "rgrgmomaPin", got: ', `"${rearrangeString('Programming')}"`);
}

