// https://programmers.co.kr/learn/courses/30/lessons/12973

function solution(s) {
  let arr = [];
  for (let i = 0; i < s.length; i++) {
    arr.push(s[i]);
    if (arr[arr.length - 1] === arr[arr.length - 2]) {
      arr.pop();
      arr.pop();
    }
  }
  return arr.join('') === '' ? 1 : 0;
}

console.log(solution('baabaa')); // 1
console.log(solution('cdcd')); // 0
