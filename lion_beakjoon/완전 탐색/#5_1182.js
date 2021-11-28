// https://www.acmicpc.net/problem/1182

const sol = (input) => {
  const [N, S] = input[0].split(" ").map(Number);
  input = input[1].split(" ").map(Number);
  let count = 0;

  const pick = [];
  function dfs(L) {
    if (L === N) {
      const sum = pick.reduce((sum, val) => sum + val, 0);
      if (sum === S) count++;
      return;
    }
    pick.push(input[L]);
    dfs(L + 1);
    pick.pop();
    dfs(L + 1);
  }
  dfs(0);

  // pick이 아무것도 선택하지 않았을 때 sum=0이므로 정답보다 1이 더 크므로, 감소시켜준다.
  if (S === 0) count--; 
  return count;
};

const input = ['5 0', '-7 -3 -2 5 8'];
console.log(sol(input));
// 백준에서 입력을 받는 코드
// const input = [];
// require("readline")
//   .createInterface(process.stdin, process.stdout)
//   .on("line", (line) => {
//     input.push(line);
//   })
//   .on("close", () => {
//     console.log(sol(input));
//     process.exit();
//   });
  