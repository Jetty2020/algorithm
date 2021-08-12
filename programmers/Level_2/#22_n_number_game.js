// https://programmers.co.kr/learn/courses/30/lessons/17687

function solution(n, t, m, p) {
  let arr = [];
  for (let i = 0; arr.length <= m * (t - 1) + p; i++) {
    arr = arr.concat(i.toString(n).split(''));
  }
  let newP = p;
  if (m === p) newP = 0;
  arr = arr.filter((ele, index) => (index + 1) % m === newP && index < t * m);
  return arr.join('').toUpperCase();
}

// console.log(solution(2, 4, 2, 1)); // "0111"
// console.log(solution(16, 16, 2, 1)); // "02468ACE11111111"
console.log(solution(16, 16, 2, 2)); // "13579BDF01234567"
