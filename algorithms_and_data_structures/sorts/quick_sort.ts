import { log } from '../linked_list/utils';

function quickSort(arr: number[], start = 0, end = arr.length - 1): number[] {
  if (start >= end) return arr;

  const pivot = partition(arr, start, end);

  console.log('start', start, 'end', end, 'pivot', pivot);
  quickSort(arr, start, pivot - 1);
  quickSort(arr, pivot + 1, end);

  return arr;
}

function partition(arr: number[], start: number, end: number): number {
  const pivotIndex = end;
  const pivot = arr[pivotIndex];
  end--;

  while (start < end) {
    if (arr[start] > pivot && arr[end] < pivot) {
      while (start < end && arr[start] < pivot) start++;
      while (end > start && arr[end] > pivot) end--;

      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
    }
  }

  [arr[pivotIndex], arr[start]] = [arr[start], arr[pivotIndex]];

  return start;
}

export function testQuickSort() {
  log('Expected [0, 1, 2, 3, 4], got: ', quickSort([4, 3, 2, 1, 0]));
  // log('Expected [0, 1, 2, 3, 4, 5], got: ', quickSort([5, 4, 3, 2, 1, 0]));
}
