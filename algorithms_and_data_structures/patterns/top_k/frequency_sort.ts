import Heap from 'collections/heap';
import { log } from '../../linked_list/utils';

// https://www.educative.io/courses/grokking-the-coding-interview/gxZz615BPPG
function sortByFrequency(str: string): string {
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

  const chars: string[] = [];
  while (maxHeap.length) {
    const char = maxHeap.pop();
    for (let i = 0, count = countByChar.get(char); i < count; i++) {
      chars.push(char);
    }
  }

  return chars.join('');
}

export function testFrequencySort() {
  log('Expected "", got: ', `"${sortByFrequency('')}"`);
  log('Expected "rrggmmoaPin", got: ', `"${sortByFrequency('Programming')}"`);
  log('Expected "bbbaac", got: ', `"${sortByFrequency('abcbab')}"`);
}

