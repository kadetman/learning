import { log } from '../../linked_list/utils';

// https://www.educative.io/courses/grokking-the-coding-interview/g2w6QPBA2Nk
function getNextLetter(letters: string[], key: string): string {
  const n = letters.length;
  if (n === 0) return '';

  let start = 0,
    end = n - 1;
  while (start <= end) {
    const mid = Math.floor(start + (end - start) / 2);
    if (key < letters[mid]) end = mid - 1;
    else start = mid + 1;
  }

  // "start" can point to the nth letter if it's less than or equal to "key".
  return letters[start % n];
}

export function testNextLetter() {
  log('Expected "", got: ', `"${getNextLetter([], 'a')}"`);
  log('Expected "h", got: ', `"${getNextLetter(['a', 'c', 'f', 'h'], 'f')}"`);
  log('Expected "c", got: ', `"${getNextLetter(['a', 'c', 'f', 'h'], 'b')}"`);
  log('Expected "a", got: ', `"${getNextLetter(['a', 'c', 'f', 'h'], 'm')}"`);
  log('Expected "a", got: ', `"${getNextLetter(['a', 'c', 'f', 'h'], 'h')}"`);
}

