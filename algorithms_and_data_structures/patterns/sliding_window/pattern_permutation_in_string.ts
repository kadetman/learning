import { log } from '../../linked_list/utils';

// https://www.educative.io/courses/grokking-the-coding-interview/N0o9QnPLKNv
function hasPatternPermutation(str: string, pattern: string): boolean {
  let charFrequencies = new Map(),
    matched = 0;
  for (let i = 0; i < pattern.length; i++) {
    const char = pattern[i];
    charFrequencies.set(char, (charFrequencies.get(char) || 0) + 1);
  }

  for (let start = 0, end = 0; end < str.length; end++) {
    const char = str[end];
    if (charFrequencies.has(char)) {
      charFrequencies.set(char, charFrequencies.get(char) - 1);
      matched++;
    }

    if (matched === charFrequencies.size) return true;

    if (end >= pattern.length - 1) {
      const leftChar = str[start++];
      if (charFrequencies.has(leftChar)) {
        charFrequencies.set(leftChar, charFrequencies.get(leftChar) + 1);
        matched--;
      }
    }
  }

  return false;
}

export function testPermutation() {
  log(`Expected false, got ${hasPatternPermutation('dicf', 'dc')}`);
  log(`Expected true, got ${hasPatternPermutation('oidbcaf', 'abc')}`);
  log(`Expected true, got ${hasPatternPermutation('bcdxabcdy', 'bcdyabcdx')}`);
  log(`Expected true, got ${hasPatternPermutation('aaacb', 'abc')}`);
}
