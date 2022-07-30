import { log } from '../linked_list/utils';

function selectionSort(arr: number[]): number[] {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) min = j;
    }
    [arr[i], arr[min]] = [arr[min], arr[i]];
  }

  return arr;
}

export function testSelectionSort() {
  log('Expected [0, 1, 2, 3, 4], got: ', selectionSort([4, 3, 2, 1, 0]));
  log('Expected [0, 1, 2, 3, 4, 5], got: ', selectionSort([5, 4, 3, 2, 1, 0]));
}
