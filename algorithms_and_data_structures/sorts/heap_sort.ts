import { log } from '../linked_list/utils';

function heapSort(arr: number[]): number[] {
  for (let i = arr.length - 1; i >= 0; i--) {
    const len = i + 1;
    // Call maxHeapify on non-leaf nodes.
    for (let j = Math.floor(len / 2) - 1; j >= 0; j--) {
      maxHeapify(arr, len, j);
    }

    // Swap current with first element which is current max.
    [arr[i], arr[0]] = [arr[0], arr[i]];
  }

  return arr;
}

function maxHeapify(arr: number[], len: number, parent: number) {
  const left = parent * 2 + 1;
  const right = left + 1;
  let max = parent;

  if (left < len && arr[max] < arr[left]) {
    max = left;
  }
  if (right < len && arr[max] < arr[right]) {
    max = right;
  }

  if (max !== parent) {
    [arr[max], arr[parent]] = [arr[parent], arr[max]];
    maxHeapify(arr, len, max);
  }
}

export function testHeapSort() {
  log('Expected [0, 1, 2, 3, 4, 5], got: ', heapSort([0, 4, 2, 5, 1, 3]));
}
