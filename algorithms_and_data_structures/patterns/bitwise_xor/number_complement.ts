import { log } from '../../linked_list/utils';

// https://www.educative.io/courses/grokking-the-coding-interview/N0yqGR18jND
function getNumberComplement(num: number): number {
  // num ^ complement = allBitsSetNumber =>
  // num ^ num ^ complement = num ^ allBitsSetNumber =>
  // complement = num ^ allBitsSetNumber
  let bitsCount = 0;
  let numCopy = num;
  while (numCopy) {
    numCopy = numCopy >> 1;
    bitsCount++;
  }

  const allBitsSetNumber = Math.pow(2, bitsCount) - 1;

  return num ^ allBitsSetNumber;
}

export function testNumberComplement() {
  log('Expected 0, got: ', getNumberComplement(0));
  log('Expected 0, got: ', getNumberComplement(1));
  log('Expected 7, got: ', getNumberComplement(8));
  log('Expected 5, got: ', getNumberComplement(10));
}

