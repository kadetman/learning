import { log } from '../../linked_list/utils';

// https://www.educative.io/courses/grokking-the-coding-interview/R8DVgjq78yR
function longestSubstringWithKReplaced(str: string, k: number): number {
  let maxRepeats = 0,
    maxLength = 0,
    countByChar = new Map<string, number>();

  for (let start = 0, end = 0; end < str.length; end++) {
    const rightChar = str[end];
    const rightCount = countByChar.get(rightChar) || 0;
    countByChar.set(rightChar, rightCount + 1);

    maxRepeats = Math.max(maxRepeats, rightCount + 1);

    while (end - start + 1 > maxRepeats + k) {
      const leftChar = str[start];
      const leftCount = countByChar.get(leftChar);
      countByChar.set(leftChar, leftCount - 1);
      start++;
    }

    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
}

export function testLongestSubstr() {
  log('Expected 0, got: ', longestSubstringWithKReplaced('', 2));
  log('Expected 3, got: ', longestSubstringWithKReplaced('abccde', 1));
  log('Expected 4, got: ', longestSubstringWithKReplaced('abbcb', 1));
  log('Expected 5, got: ', longestSubstringWithKReplaced('aabccbb', 2));
  log('Expected 6, got: ', longestSubstringWithKReplaced('aaabbaccbb', 2));
}
