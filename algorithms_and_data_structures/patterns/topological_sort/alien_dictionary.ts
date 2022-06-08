import Deque from 'collections/deque';
import { log } from '../../linked_list/utils';

// https://www.educative.io/courses/grokking-the-coding-interview/R8AJWOMxw2q
function getCharsOrder(sortedWords: string[]): string {
  const depsCounts: { [key: string]: number } = {};
  const graph: { [key: string]: string[] } = {};
  for (const word of sortedWords) {
    for (const char of word) {
      depsCounts[char] = 0;
      graph[char] = [];
    }
  }

  const deps = new Set<string>();
  for (let i = 0; i < sortedWords.length - 1; i++) {
    const word1 = sortedWords[i],
      word2 = sortedWords[i + 1];
    for (let j = 0; j < Math.min(word1.length, word2.length); j++) {
      if (word1[j] !== word2[j]) {
        deps.add(word1[j] + word2[j]);
        break;
      }
    }
  }

  for (const [parent, child] of deps) {
    depsCounts[child]++;
    graph[parent].push(child);
  }

  const sources = new Deque();
  for (const [char, count] of Object.entries(depsCounts)) {
    if (count === 0) sources.push(char);
  }

  const sortedChars: string[] = [];
  while (sources.length) {
    const char = sources.shift();
    sortedChars.push(char);

    for (const child of graph[char]) {
      depsCounts[child]--;
      if (depsCounts[child] === 0) sources.push(child);
    }
  }

  return sortedChars.join('');
}

export function testCharsOrder() {
  log('Expected "", got: ', `"${getCharsOrder([])}"`);
  log('Expected "bac", got: ', `"${getCharsOrder(['ba', 'bc', 'ac', 'cab'])}"`);
  log('Expected "cab", got: ', `"${getCharsOrder(['cab', 'aaa', 'aab'])}"`);
  log(
    'Expected "ywxz", got: ',
    `"${getCharsOrder(['ywx', 'wz', 'xww', 'xz', 'zyy', 'zwz'])}"`
  );
}

