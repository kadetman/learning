import { log } from '../../linked_list/utils';

// https://www.educative.io/courses/grokking-the-coding-interview/xVlKmyX542P
function getPermutations(str: string): string[] {
  const permutations: string[] = [str];

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (!isNaN(parseInt(char, 10))) continue;

    const n = permutations.length;
    for (let j = 0; j < n; j++) {
      const chars = permutations[j].split('');
      if (chars[i] === char.toUpperCase()) chars[i] = char.toLowerCase();
      else chars[i] = char.toUpperCase();
      permutations.push(chars.join(''));
    }
  }

  return permutations;
}

export function testPermutations() {
  log('Expected [""], got: ', getPermutations(''));
  log(
    'Expected ["ad52", "Ad52", "aD52", "AD52"], got: ',
    getPermutations('ad52')
  );
  log(
    'Expected ["aB7c", "AB7c", "ab7c", "Ab7c", "aB7C", "AB7C", "ab7C", "Ab7C"], got: ',
    getPermutations('aB7c')
  );
}
