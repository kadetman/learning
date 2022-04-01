import { log } from '../../linked_list/utils';

// https://www.educative.io/courses/grokking-the-coding-interview/R1B78K9oBEz
function getNumberRange(arr: number[], key: number): [number, number] {
  if (!arr.length) return [-1, -1];

  const right = findNumberEdge(arr, key);
  if (right < 0) return [-1, -1];

  const left = findNumberEdge(arr, key, 'left');

  return [left, right];
}

function findNumberEdge(
  arr: number[],
  key: number,
  direction = 'right'
): number {
  let start = 0,
    end = arr.length - 1;
  let index = -1;

  while (start <= end) {
    const mid = Math.floor(start + (end - start) / 2);
    if (arr[mid] === key) {
      index = mid;
      if (direction === 'right') start = mid + 1;
      else end = mid - 1;
    } else if (key > arr[mid]) start = mid + 1;
    else end = mid - 1;
  }

  return index;
}

export function testNumberRange() {
  log('Expected [-1, -1], got: ', getNumberRange([], 1));
  log('Expected [1, 3], got: ', getNumberRange([4, 6, 6, 6, 9], 6));
  log('Expected [3, 3], got: ', getNumberRange([1, 3, 8, 10, 15], 10));
  log('Expected [-1,-1], got: ', getNumberRange([1, 3, 8, 10, 15], 12));
}


