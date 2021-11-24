//

function solution(estimates, k) {
  let sum = 0;
  for (let j = 0; j < k; j++) {
    sum += estimates[j];
  }
  let ans = sum;
  for (let i = 1; i <= estimates.length - k; i++) {
    sum += -estimates[i - 1] + estimates[i + k - 1];
    if (sum > ans) ans = sum;
  }
  return ans;
}

console.log(solution([5, 1, 9, 8, 10, 5], 3)); // 27
console.log(solution([10, 1, 10, 1, 1, 4, 3, 10], 6)); // 29
