import { log } from '../../linked_list/utils';

// https://screenshot.googleplex.com/5ttKLApZjukkN9k
function evaluateExpression(input: string): number[] {
  return input ? evaluateInput(input, new Map()) : [];
}

function evaluateInput(input: string, map: Map<string, number[]>): number[] {
  if (map.has(input)) return map.get(input);

  const result: number[] = [];
  // If it's a digit - parse and push to result.
  if (isDigit(input)) {
    result.push(parseInt(input, 10));
  } else {
    for (let i = 0; i < input.length; i++) {
      const char = input[i];
      if (isDigit(char)) continue;

      // Split into left and right parts by current operator and evaluate them.
      const leftPartResults = evaluateInput(input.substring(0, i), map);
      const rightPartResults = evaluateInput(input.substring(i + 1), map);

      // Apply operator for each result of left and right parts.
      for (let l = 0; l < leftPartResults.length; l++) {
        for (let r = 0; r < rightPartResults.length; r++) {
          const left = leftPartResults[l];
          const right = rightPartResults[r];
          result.push(applyOperator(left, right, char));
        }
      }
    }
  }

  map.set(input, result);

  return result;
}

function isDigit(input: string) {
  return ['+', '-', '*'].every((char) => !input.includes(char));
}

function applyOperator(left: number, right: number, operator: string) {
  switch (operator) {
    case '+':
      return left + right;
    case '-':
      return left - right;
    case '*':
      return left * right;
    default:
      throw new Error(`Unknown operator "${operator}"`);
  }
}

export function testExpressions() {
  log('Expected [], got: ', evaluateExpression(''));
  log('Expected [7, 9], got: ', evaluateExpression('1+2*3'));
  log('Expected [8, -12, 7, -7, -3], got: ', evaluateExpression('2*3-4-5'));
}
