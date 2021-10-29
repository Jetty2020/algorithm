// https://programmers.co.kr/learn/courses/30/lessons/12929

function solution(n) {
  const dp = new Array(n + 1).fill(0);
  dp[0] = dp[1] = 1;

  for (let i = 2; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      dp[i] += dp[j - 1] * dp[i - j];
    }
  }

  return dp[n];
}

console.log(solution(2)); // 2
// console.log(solution(3)); // 5
