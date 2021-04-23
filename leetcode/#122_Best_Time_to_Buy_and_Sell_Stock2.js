// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/

const maxProfit = (prices) => {
  let profit = 0;

  for (let i = 1; i < prices.length; i++) {
    let prev = prices[i - 1];
    let current = prices[i];

    if (prev < current) {
      profit += current - prev;
    }
  }

  return profit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4])); //7
console.log(maxProfit([1, 2, 3, 4, 5])); //4
console.log(maxProfit([7, 6, 4, 3, 1])); //0
