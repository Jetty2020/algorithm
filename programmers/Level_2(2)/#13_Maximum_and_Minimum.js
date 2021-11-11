// https://programmers.co.kr/learn/courses/30/lessons/12939

function solution(s) {
  const ans = s.split(' ').sort((a, b) => a - b);
  return ans[0] + ' ' + ans[ans.length - 1];
}

console.log(solution('1 2 3 4')); // "1 4"
// console.log(solution("-1 -2 -3 -4")); // "-4 -1"
// console.log(solution("-1 -1")); // "-1 -1"
