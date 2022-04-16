import { log } from '../../linked_list/utils';

type Matrix = Array<number[]>;

// https://www.educative.io/courses/grokking-the-coding-interview/3j7zEJzL2y9
function flipAndInvert(matrix: Matrix) {
  for (let i = 0; i < matrix.length; i++) {
    const row = matrix[i];
    let start = 0,
      end = row.length - 1;
    // Flip the row horizontaly.
    while (start <= end) {
      [row[start], row[end]] = [row[end], row[start]];
      start++;
      end--;
    }

    // Invert the row.
    for (let j = 0; j < row.length; j++) {
      row[j] = row[j] ^ 1;
    }
  }
}

export function testFlipAndInvert() {
  let matrix: Matrix = [
    [1, 0, 1],
    [1, 1, 1],
    [0, 1, 1],
  ];

  log(
    'Expected [[0,1,0],[0,0,0],[0,0,1]], got: ',
    JSON.stringify(flipAndInvert(matrix))
  );

  matrix = [
    [1, 1, 0, 0],
    [1, 0, 0, 1],
    [0, 1, 1, 1],
    [1, 0, 1, 0],
  ];

  log(
    'Expected [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]], got: ',
    JSON.stringify(flipAndInvert(matrix))
  );
}
