import { log } from '../../linked_list/utils';

// https://www.educative.io/courses/grokking-the-coding-interview/N8nMBvDQJ0m
function getConcatinatedWordsIndices(str: string, words: string[]): number[] {
  if (!str.length || !words.length || !words[0].length) return [];

  const wordLength = words[0].length;
  const substringLength = wordLength * words.length;
  const resultIndices: number[] = [];
  const countByWordOriginal = new Map<string, number>();
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    countByWordOriginal.set(word, (countByWordOriginal.get(word) || 0) + 1);
  }

  for (let start = 0, end = 0; end < str.length; end++) {
    if (end - start + 1 === substringLength) {
      const countByWord = new Map<string, number>();
      for (let i = 0; i < words.length; i++) {
        const word = str.substr(start + i * wordLength, wordLength);
        if (!countByWordOriginal.has(word)) break;

        countByWord.set(word, (countByWord.get(word) || 0) + 1);
      }

      if (
        [...countByWordOriginal.entries()].every(
          ([word, count]) => countByWord.get(word) === count
        )
      ) {
        resultIndices.push(start);
      }

      start++;
    }
  }

  return resultIndices;
}

export function testConcatinatedWords() {
  log('Expected [], got: ', getConcatinatedWordsIndices('cast', ['cat']));
  log(
    'Expected [0, 3], got: ',
    getConcatinatedWordsIndices('catfoxcat', ['cat', 'fox'])
  );
  log(
    'Expected [3], got: ',
    getConcatinatedWordsIndices('foxcatfoxcatfox', ['cat', 'fox', 'cat'])
  );
  log(
    'Expected [0], got: ',
    getConcatinatedWordsIndices('rognfrogn', ['frog', 'rogn'])
  );
}
