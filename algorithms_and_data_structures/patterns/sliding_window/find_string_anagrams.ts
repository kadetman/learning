import { log } from '../../linked_list/utils';

// https://www.educative.io/courses/grokking-the-coding-interview/YQ8N2OZq0VM
function findStringAnagrams(str: string, pattern: string): number[] {
  const resultIndices = [];
  const charFrequencies = new Map();
  let matched = 0;

  for (let i = 0; i < pattern.length; i++) {
    const char = pattern[i];
    charFrequencies.set(char, (charFrequencies.get(char) || 0) + 1);
  }

  for (let start = 0, end = 0; end < str.length; end++) {
    const char = str[end];
    if (charFrequencies.has(char)) {
      let count = charFrequencies.get(char);
      charFrequencies.set(char, --count);
      if (count === 0) matched++;
    }

    if (matched === pattern.length) {
      resultIndices.push(start);
    }

    if (end >= pattern.length - 1) {
      const startChar = str[start++];
      if (charFrequencies.has(startChar)) {
        let startCount = charFrequencies.get(startChar);
        charFrequencies.set(startChar, ++startCount);
        if (startCount === 1) matched--;
      }
    }
  }

  return resultIndices;
}

export function testAnagrams() {
  log('Expected [], got: ', findStringAnagrams('a', 'b'));
  log('Expected [1,2], got: ', findStringAnagrams('ppqp', 'pq'));
  log('Expected [2,3,4], got: ', findStringAnagrams('abbcabc', 'abc'));
}
