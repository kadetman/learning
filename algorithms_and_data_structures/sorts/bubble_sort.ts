import { log } from '../linked_list/utils';

function bubbleSort(arr: number[]) {
  let swapped = true;
  while (swapped) {
    swapped = false;

    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }
  }

  return arr;
}

export function testBubbleSort() {
  log('Expected [0, 1, 2, 3, 4], got: ', bubbleSort([4, 3, 2, 1, 0]));
}
