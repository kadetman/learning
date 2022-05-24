import { log } from '../../linked_list/utils';

// https://www.educative.io/courses/grokking-the-coding-interview/gkZNLjV2kBk
function getMaxKnapsackProfit(
  profits: number[],
  weights: number[],
  capacity: number
): number {
  const n = profits.length;
  if (n === 0 || weights.length !== n || capacity <= 0) return -1;

  const capacityProfits = Array(capacity + 1).fill(0);
  // Fill capacity profits with first item profits for the capacities it fits into.
  for (let i = 1; i <= capacity; i++) {
    if (weights[0] <= i) capacityProfits[i] = profits[0];
  }

  for (let i = 1; i < n; i++) {
    for (let c = capacity; c > 0; c--) {
      let profit1 = 0,
        profit2 = 0;
      // Put this item in the knapsack if it fits into the current capacity
      // and sum it with the profit of remaining capacity from previously processed item.
      if (weights[i] <= c) {
        profit1 = profits[i] + capacityProfits[c - weights[i]];
      }
      // Otherwise use the profit of current capacity from previously processed item.
      else {
        profit2 = capacityProfits[c];
      }
      // Update capacity profits map with the new max profit for current item.
      capacityProfits[c] = Math.max(profit1, profit2);
    }
  }

  // Max profit is at the max capaci
  return capacityProfits[capacity];
}

export function testMaxKnapsackProfit() {
  const profits = [1, 6, 10, 16];
  const weights = [1, 2, 3, 5];
  log('Expected 22, got: ', getMaxKnapsackProfit(profits, weights, 7));
  log('Expected 17, got: ', getMaxKnapsackProfit(profits, weights, 6));
}
