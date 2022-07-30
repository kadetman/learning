import { log } from '../linked_list/utils';

function quickSort(arr: number[], start = 0, end = arr.length - 1): number[] {
  if (start >= end) return arr;

  const pivot = partition(arr, start, end);

  quickSort(arr, start, pivot - 1);
  quickSort(arr, pivot + 1, end);

  return arr;
}

function partition(arr, start, end) {
  const pivotIndex = Math.floor(Math.random() * (end - start + 1)) + start;
  const pivot = arr[pivotIndex];

  while (start < end) {
    while (arr[start] < pivot) start++;
    while (arr[end] > pivot) end--;

    [arr[start], arr[end]] = [arr[end], arr[start]];
  }

  return start;
}

export function testQuickSort() {
  log('Expected [0, 1, 2, 3, 4], got: ', quickSort([4, 3, 2, 1, 0]));
  log('Expected [0, 1, 2, 3, 4, 5], got: ', quickSort([5, 4, 3, 2, 1, 0]));
}
