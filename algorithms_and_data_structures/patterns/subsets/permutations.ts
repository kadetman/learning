import { log } from '../../linked_list/utils';

// https://www.educative.io/courses/grokking-the-coding-interview/B8R83jyN3KY
function getPermutations(nums: number[]): Array<number[]> {
  const result: Array<number[]> = [];
  const permutations: Array<number[]> = [[]];

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const n = permutations.length;
    for (let p = n - 1; p >= 0; p--) {
      const oldPermutation = permutations.splice(p, 1)[0];
      for (let j = 0; j < oldPermutation.length + 1; j++) {
        const newPermutation = [...oldPermutation];
        // Insert num into position j.
        newPermutation.splice(j, 0, num);
        if (newPermutation.length === nums.length) {
          result.push(newPermutation);
        } else permutations.push(newPermutation);
      }
    }
  }

  return result;
}

export function testPermutations() {
  log('Expected [[]], got: ', JSON.stringify(getPermutations([])));
  log('Expected [[3,1],[1,3]], got: ', JSON.stringify(getPermutations([1, 3])));
  log(
    'Expected [[5,1,3],[1,5,3],[1,3,5],[5,3,1],[3,5,1],[3,1,5]], got: ',
    JSON.stringify(getPermutations([1, 3, 5]))
  );
}
