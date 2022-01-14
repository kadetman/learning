import { log } from '../../linked_list/utils';

type Quadruplet = [number, number, number, number];

// https://www.educative.io/courses/grokking-the-coding-interview/B6XOq8KlkWo
function findQuadruplets(arr: number[], target: number): Quadruplet[] {
  arr.sort((a, b) => a - b);
  const quadruplets: Quadruplet[] = [];

  for (let i = 0; i < arr.length - 3; i++) {
    if (i > 0 && arr[i - 1] === arr[i]) continue;

    for (let j = i + 1; j < arr.length - 1; j++) {
      let left = j + 1,
        right = arr.length - 1;
      while (left < right) {
        const sum = arr[i] + arr[j] + arr[left] + arr[right];

        if (sum === target) {
          quadruplets.push([arr[i], arr[j], arr[left], arr[right]]);
          left++;
          right--;
          while (left < right && arr[left] === arr[left - 1]) left++;
          while (left < right && arr[right] === arr[right + 1]) right--;
        } else if (sum > target) right--;
        else left++;
      }
    }
  }

  return quadruplets;
}

export function testQuadruplets() {
  log('Expected [], got: ', JSON.stringify(findQuadruplets([], 10)));
  log(
    'Expected [[-3,-1,1,4],[-3,1,1,2]], got: ',
    JSON.stringify(findQuadruplets([4, 1, 2, -1, 1, -3], 1))
  );
  log(
    'Expected [[-2,0,2,2],[-1,0,1,2]], got: ',
    JSON.stringify(findQuadruplets([2, 0, -1, 1, -2, 2], 2))
  );
}
