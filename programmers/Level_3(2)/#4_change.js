// https://programmers.co.kr/learn/courses/30/lessons/12907

function solution(n, money) {
  const dp = [1, ...new Array(n).fill(0)];

  for (let i = 0; i < money.length; i++) {
    for (let j = 0; j <= n; j++) {
      if (j >= money[i]) dp[j] += dp[j - money[i]] & 1000000007;
    }
  }

  return dp[n];
}

console.log(solution(5, [1, 2, 5])); // 4
