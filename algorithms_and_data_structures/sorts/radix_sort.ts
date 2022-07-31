import { log } from '../linked_list/utils';

function radixSort(arr: number[]): number[] {
  const maxDigits = Math.max(...arr).toString().length;

  for (let i = 1; i <= maxDigits; i++) {
    const digitBuckets = [];
    for (let j = 0; j < arr.length; j++) {
      const digit = getDigit(arr[j], i);
      digitBuckets[digit] = digitBuckets[digit] ?? [];
      digitBuckets[digit].push(arr[j]);
    }

    let next = 0;
    for (let k = 0; k < 10; k++) {
      for (const num of digitBuckets[k] ?? []) arr[next++] = num;
    }
  }

  return arr;
}

function getDigit(num: number, position: number) {
  let digit = 0;
  while (position--) {
    digit = num % 10;
    num = Math.floor(num / 10);
  }

  return digit;
}

export function testRadixSort() {
  log(
    'Expected [0, 1, 10, 11, 100, 110, 909, 1000], got: ',
    radixSort([11, 909, 0, 100, 10, 1000, 1, 110])
  );
}
