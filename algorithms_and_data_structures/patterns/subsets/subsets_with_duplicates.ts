import { log } from '../../linked_list/utils';

// https://www.educative.io/courses/grokking-the-coding-interview/7npk3V3JQNr
function getSubsets(nums: number[]): Array<number[]> {
  const subsets: Array<number[]> = [[]];

  // Sort numbers so duplicates go in a row.
  nums.sort((a, b) => a - b);
  let startIndex = 0,
    endIndex = 1;
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      // Iterate only through the subsets added for a previous duplicate.
      startIndex = endIndex + 1;
    } else startIndex = 0;
    endIndex = subsets.length - 1;

    for (let j = startIndex; j <= endIndex; j++) {
      subsets.push([...subsets[j], nums[i]]);
    }
  }

  return subsets;
}

export function testSubsets() {
  log('Expected [[]], got: ', JSON.stringify(getSubsets([])));
  log(
    'Expected [[],[1],[3],[1,3],[3,3],[1,3,3]], got: ',
    JSON.stringify(getSubsets([3, 1, 3]))
  );
  log(
    'Expected [[],[1],[3],[1,3],[3,3],[1,3,3],[5],[1,5],[3,5],[1,3,5],[3,3,5],[1,3,3,5]], got: ',
    JSON.stringify(getSubsets([1, 3, 5, 3]))
  );
}
