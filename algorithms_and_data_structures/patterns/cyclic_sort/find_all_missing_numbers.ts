import { log } from '../../linked_list/utils';

// https://www.educative.io/courses/grokking-the-coding-interview/Y52qNM0ljWK
function findAllMissingNumbers(arr: number[]): number[] {
  const result: number[] = [];

  for (let i = 0; i < arr.length; i++) {
    while (arr[i] !== arr[arr[i] - 1]) {
      const index = arr[i] - 1;
      [arr[i], arr[index]] = [arr[index], arr[i]];
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== i + 1) result.push(i + 1);
  }
  return result;
}

export function testMissingNumbers() {
  log('Expected [], got: ', findAllMissingNumbers([]));
  // log(
  //   'Expected [4, 6, 7], got: ',
  //   findAllMissingNumbers([2, 3, 1, 8, 2, 3, 5, 1])
  // );
  // log('Expected [3], got: ', findAllMissingNumbers([2, 4, 1, 2]));
  // log('Expected [4], got: ', findAllMissingNumbers([2, 3, 2, 1]));
}
