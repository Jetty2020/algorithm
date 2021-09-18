//https://programmers.co.kr/learn/courses/30/lessons/12914

function solution(n) {
  return fibonacci(n);
}

const fibonacci = (n) => {
  const dp = new Array(n + 1).fill(0);
  dp[0] = 1;
  dp[1] = 1;

  for (let i = 2; i <= n; i++) dp[i] = (dp[i - 1] + dp[i - 2]) % 1234567;

  return dp[n];
};

console.log(solution(4)); // 5
// console.log(solution(3)); // 3
