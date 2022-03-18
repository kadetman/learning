import { log } from '../../linked_list/utils';

// https://www.educative.io/courses/grokking-the-coding-interview/gx2OqlvEnWG
function getSubsets(arr: number[]): Array<number[]> {
  const subsets: Array<number[]> = [[]];

  for (let i = 0; i < arr.length; i++) {
    const length = subsets.length;
    for (let j = 0; j < length; j++) {
      subsets.push([...subsets[j], arr[i]]);
    }
  }

  return subsets;
}

export function testSubsets() {
  log('Expected [[]], got: ', JSON.stringify(getSubsets([])));
  log(
    'Expected [[], [1], [3], [1, 3]], got: ',
    JSON.stringify(getSubsets([1, 3]))
  );
  log(
    'Expected [[], [1], [3], [1, 3], [5], [1, 5], [3, 5], [1, 3, 5]], got: ',
    JSON.stringify(getSubsets([1, 3, 5]))
  );
}
