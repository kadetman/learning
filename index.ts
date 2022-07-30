import { log } from '../linked_list/utils';

function mergeSort(arr: number[], start = 0, end = arr.length - 1): number[] {
  if (start === end) return [arr[start]];
  const mid = start + Math.floor((end - start) / 2);

  return merge(mergeSort(arr, start, mid), mergeSort(arr, mid + 1, end));
}

function merge(arr1: number[], arr2: number[]): number[] {
  let i = 0,
    j = 0;
  const result: number[] = [];
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) result.push(arr1[i++]);
    else result.push(arr2[j++]);
  }

  while (i < arr1.length) result.push(arr1[i++]);
  while (j < arr2.length) result.push(arr2[j++]);

  return result;
}

export function testMergeSort() {
  log('Expected [0, 1, 2, 3, 4], got: ', mergeSort([4, 3, 2, 1, 0]));
  log('Expected [0, 1, 2, 3, 4, 5], got: ', mergeSort([5, 4, 3, 2, 1, 0]));
}
