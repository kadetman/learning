import { log } from '../../linked_list/utils';

// https://www.educative.io/courses/grokking-the-coding-interview/3wDJAYG2pAR
function findSmallestSubstring(str: string, pattern: string): string {
  const charFrequencies = new Map();
  let minStart = -1,
    minEnd = str.length,
    matchedCount = 0;

  for (let i = 0; i < pattern.length; i++) {
    const char = pattern[i];
    charFrequencies.set(char, (charFrequencies.get(char) || 0) + 1);
  }

  for (let start = 0, end = 0; end < str.length; end++) {
    const rightChar = str[end];
    if (charFrequencies.has(rightChar)) {
      const count = charFrequencies.get(rightChar);
      if (count >= 1) matchedCount++;
      charFrequencies.set(rightChar, count - 1);
    }

    while (matchedCount === pattern.length) {
      if (end - start < minEnd - minStart) {
        minEnd = end;
        minStart = start;
      }

      const leftChar = str[start++];
      if (charFrequencies.has(leftChar)) {
        const count = charFrequencies.get(leftChar);
        if (count >= 0) matchedCount--;
        charFrequencies.set(leftChar, count + 1);
      }
    }
  }

  return minStart >= 0 ? str.substring(minStart, minEnd + 1) : '';
}

export function testSmallestSubstring() {
  log('Expected "", got: ', findSmallestSubstring('abc', 'd'));
  log('Expected "aabdec", got: ', findSmallestSubstring('aaaaaabdec', 'aabc'));
  log('Expected "bca", got: ', findSmallestSubstring('abdbca', 'abc'));
}
