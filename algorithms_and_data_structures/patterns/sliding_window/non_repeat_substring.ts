import { log } from '../../linked_list/utils';

// https://www.educative.io/courses/grokking-the-coding-interview/YMzBx1gE5EO
function nonRepeatSubstring(str: string): number {
  let maxLength = 0,
    lastPositionByChar = new Map();

  for (let start = 0, end = 0; end < str.length; end++) {
    const char = str[end];
    const lastPosition = lastPositionByChar.get(char);
    if (lastPosition != null && start <= lastPosition) {
      start = lastPosition + 1;
    }

    lastPositionByChar.set(char, end);
    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
}

export function testNonRepeatSubstring() {
  log('Expected 0, got: ', nonRepeatSubstring(''));
  log('Expected 1, got: ', nonRepeatSubstring('aaaa'));
  log('Expected 3, got: ', nonRepeatSubstring('aaaaabccde'));
  log('Expected 5, got: ', nonRepeatSubstring('abcdaabcde'));
}
