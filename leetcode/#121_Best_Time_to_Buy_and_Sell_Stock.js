// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

const maxProfit = (prices) => {
  let min = Number.MAX_SAFE_INTEGER; 
  let max = 0;
  for (let i = 0; i < prices.length; i++) {
      min = Math.min(min, prices[i]);
      max = Math.max(max, prices[i] - min);
  }
  return max;
};

console.log(maxProfit([7,1,5,3,6,4])); //5
console.log(maxProfit([7,6,4,3,1])); //0
