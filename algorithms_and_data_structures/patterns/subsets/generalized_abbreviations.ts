import { log } from '../../linked_list/utils';

// https://www.educative.io/courses/grokking-the-coding-interview/NEOZDEg5PlN
function getAbbreviations(word: string): string[] {
  const result: string[] = [];
  const queue: string[] = [''];

  for (let i = 0; i < word.length; i++) {
    let n = queue.length;
    while (n) {
      const substring = queue.shift();
      const abbreviated = `${substring}_`;
      const skipped = `${substring}${word[i]}`;
      if (abbreviated.length === word.length) {
        result.push(getAbbreviation(abbreviated));
        result.push(getAbbreviation(skipped));
      } else {
        queue.push(abbreviated);
        queue.push(skipped);
      }

      n--;
    }
  }

  return result;
}

function getAbbreviation(abbreviatedWord: string): string {
  let abbreviation: string[] = [];
  let counter = 0;
  for (let i = 0; i < abbreviatedWord.length; i++) {
    const char = abbreviatedWord[i];
    if (char !== '_') {
      if (counter > 0) abbreviation.push(`${counter}`);
      abbreviation.push(char);
      counter = 0;
    } else {
      counter++;
      if (i === abbreviatedWord.length - 1) {
        abbreviation.push(`${counter}`);
      }
    }
  }

  return abbreviation.join('');
}

export function testAbbreviations() {
  log('Expected [""], got: ', getAbbreviations(''));
  log('Expected [3,2T,1A1,1AT,B2,B1T,BA1,BAT], got: ', getAbbreviations('BAT'));
  log(
    'Expected [4,3e,2d1,2de,1o2,1o1e,1od1,1ode,c3,c2e,c1d1,c1de,co2,co1e,cod1,code], got: ',
    getAbbreviations('code')
  );
}
