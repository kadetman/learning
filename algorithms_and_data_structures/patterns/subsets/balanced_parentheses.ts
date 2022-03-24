import { log } from '../../linked_list/utils';

// https://www.educative.io/courses/grokking-the-coding-interview/NEXBg8YA5A2
class ParenthesesString {
  constructor(
    public readonly str: string,
    public readonly openCount: number,
    public readonly closeCount: number
  ) {}
}

function getBalancedParentheses(count: number): string[] {
  const result: string[] = [];
  if (count === 0) return [];

  const queue: ParenthesesString[] = [new ParenthesesString('', 0, 0)];
  while (queue.length) {
    const ps = queue.shift();
    if (ps.closeCount === count && ps.openCount === count) {
      result.push(ps.str);
    } else {
      if (ps.openCount < count) {
        queue.push(
          new ParenthesesString(`${ps.str}(`, ps.openCount + 1, ps.closeCount)
        );
      }
      if (ps.openCount > ps.closeCount) {
        queue.push(
          new ParenthesesString(`${ps.str})`, ps.openCount, ps.closeCount + 1)
        );
      }
    }
  }

  return result;
}

export function testBalancedParentheses() {
  log('Expected [], got: ', getBalancedParentheses(0));
  log('Expected ["(())", "()()"], got: ', getBalancedParentheses(2));
  log(
    'Expected ["((()))", "(()())", "(())()", "()(())", "()()()"], got: ',
    getBalancedParentheses(3)
  );
}
