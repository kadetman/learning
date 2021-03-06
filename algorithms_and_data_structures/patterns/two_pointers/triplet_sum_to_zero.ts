import { log } from '../../linked_list/utils';

type Triplet = [number, number, number];

// https://www.educative.io/courses/grokking-the-coding-interview/gxk639mrr5r
function findTripletSumToZero(arr: number[]): Triplet[] {
  const triplets: Triplet[] = [];
  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length - 1; i++) {
    if (i > 0 && arr[i] === arr[i - 1]) {
      // skip same element to avoid duplicate triplets
      continue;
    }
    findPairWithSum(arr, -arr[i], i + 1, triplets);
  }

  return triplets;
}

function findPairWithSum(
  arr: number[],
  sum: number,
  startIndex: number,
  triplets: Triplet[]
) {
  let left = startIndex,
    right = arr.length - 1;
  while (left < right) {
    const leftValue = arr[left];
    const rightValue = arr[right];
    let pairSum = leftValue + rightValue;
    if (pairSum === sum) {
      triplets.push([-sum, leftValue, rightValue]);
      while (left < right && arr[left] === leftValue) left++;
      while (left < right && arr[right] === rightValue) right--;
    } else if (pairSum > sum) {
      right--;
    } else {
      left++;
    }
  }
}

export function testTriplets() {
  log('Expected [], got: ', findTripletSumToZero([]));
  log(
    'Expected [[ -3, 1, 2 ], [ -2, 0, 2 ], [ -2, 1, 1 ], [ -1, 0, 1 ]], got: ',
    JSON.stringify(findTripletSumToZero([-3, 0, 1, 2, -1, 1, -2]))
  );
  log(
    'Expected [[ -5, 2, 3 ], [ -2, -1, 3 ]], got: ',
    JSON.stringify(findTripletSumToZero([-5, 2, -1, -2, 3]))
  );
}
