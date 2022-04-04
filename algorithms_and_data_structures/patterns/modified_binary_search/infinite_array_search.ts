import { log } from '../../linked_list/utils';

// https://www.educative.io/courses/grokking-the-coding-interview/B1ZW38kXJB2
class ArrayReader {
  constructor(private readonly arr: number[]) {}

  get(index: number) {
    return index < this.arr.length ? this.arr[index] : Number.MAX_SAFE_INTEGER;
  }
}

function search(reader: ArrayReader, key: number): number {
  let start = 0,
    end = 1;
  while (reader.get(end) < key) {
    start = end + 1;
    end *= 2;
  }

  while (start <= end) {
    const mid = Math.floor(start + (end - start) / 2);
    const value = reader.get(mid);
    if (value === key) return mid;
    if (value > key) end = mid - 1;
    else start = mid + 1;
  }

  return -1;
}

export function testInfiniteArraySearch() {
  log('Expected -1, got: ', search(new ArrayReader([]), 1));

  let reader = new ArrayReader([
    4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30,
  ]);
  log('Expected -1, got: ', search(reader, 11));
  log('Expected 6, got: ', search(reader, 16));

  reader = new ArrayReader([1, 3, 8, 10, 15]);
  log('Expected -1, got: ', search(reader, 200));
  log('Expected 4, got: ', search(reader, 15));
}
