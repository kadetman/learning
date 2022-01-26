import { log } from '../../linked_list/utils';

// https://www.educative.io/courses/grokking-the-coding-interview/NE67J9YMj3m
function hasCycle(arr: number[]): boolean {
  for (let i = 0; i < arr.length; i++) {
    let slow = i,
      fast = i;
    const isForward = arr[i] > 0;
    while (true) {
      slow = getNextIndex(arr, slow, isForward);
      if (slow < 0) break;
      fast = getNextIndex(arr, getNextIndex(arr, fast, isForward), isForward);
      if (fast < 0) break;

      if (fast === slow) return true;
    }
  }

  return false;
}

function getNextIndex(arr: number[], index: number, isForward: boolean) {
  if (index < 0 || index >= arr.length) return -1;
  const val = arr[index];
  if (isForward !== val > 0) return -1;
  const nextIndex = (index + val + arr.length) % arr.length;

  return nextIndex === index ? -1 : nextIndex;
}

export function testCycle() {
  log('Expected false, got: ', hasCycle([]));
  log('Expected true, got: ', hasCycle([1, 2, -1, 2, 2]));
  log('Expected true, got: ', hasCycle([2, 2, -1, 2]));
  log('Expected false, got: ', hasCycle([2, 1, -1, -2]));
}
