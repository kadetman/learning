import { log } from '../../linked_list/utils';

// https://www.educative.io/courses/grokking-the-coding-interview/xVKE8MJDlzq
function compareStrings(str1: string, str2: string): boolean {
  let index1 = str1.length - 1,
    index2 = str2.length - 1;
  while (index1 >= 0 && index2 >= 0) {
    index1 = getNextValidIndex(str1, index1);
    index2 = getNextValidIndex(str2, index2);
    if (index1 <= 0 && index2 <= 0) return true;
    if (index1 <= 0 || index2 <= 0) return false;
    if (str1[index1] !== str2[index2]) return false;
    index1--;
    index2--;
  }

  return true;
}

function getNextValidIndex(str: string, index: number): number {
  let backspacesCount = 0;
  for (let i = index; i >= 0; i--) {
    if (str[i] === '#') backspacesCount++;
    else {
      if (backspacesCount === 0) return i;
      backspacesCount--;
    }
  }

  return -1;
}

export function testStrings() {
  log('Expected true, got: ', compareStrings('', ''));
  log('Expected true, got: ', compareStrings('#', '###'));
  log('Expected true, got: ', compareStrings('xy#z', 'xzz#'));
  log('Expected false, got: ', compareStrings('xy#z', 'xyz#'));
  log('Expected true, got: ', compareStrings('xp#', 'xyz##'));
  log('Expected true, got: ', compareStrings('xywrrmp', 'xywrrmu#p'));
}
