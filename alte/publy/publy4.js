//
function solution(n, k) {
  let ans = 0;
  function dfs(arr, row, num) {
    if (num === k) {
      ans++;
      return;
    }
    for (let i = 0; i < n; i++) {
      if (!~arr.indexOf(i)) dfs([...arr, i], row + 1, num + 1);
    }
    dfs(arr, row + 1);
  }
  dfs([], 0, 0);
  return ans;
}

console.log(solution(2, 2)); //2
// console.log(solution(3, 2)); //18
