// https://programmers.co.kr/learn/courses/30/lessons/12904

function solution(s) {
  let ans = 1;
  const isValidOdd = (i, n) => {
    if (s[i - n] && s[i + n]) return s[i - n] === s[i + n];
    return false;
  };

  const dfsOdd = (i, n) => {
    if (isValidOdd(i, n)) {
      dfsOdd(i, n + 1);
      if (ans < n * 2 + 1) ans = n * 2 + 1;
    }
  };
  const isValidEven = (i, n) => {
    if (s[i - n] && s[i + n - 1]) return s[i - n] === s[i + n - 1];
    return false;
  };

  const dfsEven = (i, n) => {
    if (isValidEven(i, n)) {
      dfsEven(i, n + 1);
      if (ans < n * 2) ans = n * 2;
    }
  };

  for (let i = 1; i < s.length - 1; i++) {
    dfsOdd(i, 1);
    dfsEven(i, 1);
  }
  return ans;
}

console.log(solution('abcdcba')); // 7
// console.log(solution('abacde')); // 3
