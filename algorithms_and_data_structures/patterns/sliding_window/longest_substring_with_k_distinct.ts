import { log } from '../../linked_list/utils';

// https://www.educative.io/courses/grokking-the-coding-interview/YQQwQMWLx80
function longestSubstringWithKDistinct(str: string, k: number): number {
  let countByChar: Map<string, number> = new Map();
  let maxLength = 0;

  for (let start = 0, end = 0; end < str.length; end++) {
    const char = str[end];
    const count = countByChar.get(char) || 0;
    countByChar.set(char, count + 1);

    while (countByChar.size > k) {
      const startChar = str[start];
      const startCount = countByChar.get(startChar);
      if (startCount === 1) countByChar.delete(startChar);
      else countByChar.set(startChar, startCount - 1);
      start++;
    }

    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
}

export function testLongestSubstr() {
  log('Expected 7, got: ', longestSubstringWithKDistinct('aaaaabcde', 3));
  log('Expected 8, got: ', longestSubstringWithKDistinct('abcdeeeeee', 3));
  log('Expected 9, got: ', longestSubstringWithKDistinct('aaaaabcde', 5));
}
