// https://programmers.co.kr/learn/courses/30/lessons/12902

const MOD = 1000000007;

function solution(n) {
  const dp = [0, 3, 11];
  const idx = n >> 1;

  if (n % 2) return 0;
  if (idx < 3) return dp[idx];

  for (let i = 3; i <= idx; i++) {
    dp[i] = dp[i - 1] * 3 + 2;

    for (let j = 1; j < i - 1; j++) {
      dp[i] += dp[j] * 2;
    }

    dp[i] %= MOD;
  }

  return dp[idx];
}

console.log(solution(4)); // 11
