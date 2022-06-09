import Deque from 'collections/deque';
import { log } from '../../linked_list/utils';

// https://www.educative.io/courses/grokking-the-coding-interview/m7VAO5OrQr3
function canReconstruct(
  originalSequence: number[],
  sequences: Array<number[]>
): boolean {
  if (!originalSequence.length || !sequences.length) return false;

  const depsCounts: { [key: number]: number } = {};
  const graph: { [key: number]: number[] } = {};

  for (const sequence of sequences) {
    for (const num of sequence) {
      depsCounts[num] = 0;
      graph[num] = [];
    }
  }

  // Can't build originalSequence if there are not all nums in subsequences.
  if (Object.keys(depsCounts).length !== originalSequence.length) {
    return false;
  }

  for (const sequence of sequences) {
    for (let i = 0; i < sequence.length - 1; i++) {
      depsCounts[sequence[i + 1]]++;
      graph[sequence[i]].push(sequence[i + 1]);
    }
  }

  const sources = new Deque();
  for (const [num, count] of Object.entries(depsCounts)) {
    if (count === 0) sources.push(Number(num));
  }

  const sortedNums = [];
  while (sources.length) {
    // Other sequences can be formed if there are more then one source at current level.
    if (sources.length > 1) return false;

    const num = sources.shift();
    // Original and sorted sequences don't match.
    if (originalSequence[sortedNums.length] !== num) return false;

    sortedNums.push(num);
    for (const child of graph[num]) {
      depsCounts[child]--;
      if (depsCounts[child] === 0) sources.push(child);
    }
  }

  log('sorted nums: ', sortedNums);
  // Can't build sorted nums due to cycle deps.
  if (sortedNums.length !== originalSequence.length) return false;

  return true;
}

export function testSequenceReconstruction() {
  log('Expected false, got: ', canReconstruct([], []));
  log(
    'Expected true, got: ',
    canReconstruct(
      [1, 2, 3, 4],
      [
        [1, 2],
        [2, 3],
        [3, 4],
      ]
    )
  );
  log(
    'Expected false, got: ',
    canReconstruct(
      [1, 2, 3, 4],
      [
        [1, 2],
        [2, 3],
        [2, 4],
      ]
    )
  );
  log(
    'Expected true, got: ',
    canReconstruct(
      [3, 1, 4, 2, 5],
      [
        [3, 1, 5],
        [1, 4, 2, 5],
      ]
    )
  );
}

