// https://programmers.co.kr/learn/courses/30/lessons/17685

function compare(strA, strB) {
  for (let i = 0; i < strA.length; i++) {
    if (strA[i] !== strB[i]) return i + 1;
  }
  return strA.length;
}

function solution(words) {
  const sorted = words.sort();
  return sorted.reduce((acc, curr, idx, arr) => {
    let res = 1;
    if (arr[idx - 1]) {
      res = Math.max(res, compare(curr, arr[idx - 1]));
    }
    if (arr[idx + 1]) {
      res = Math.max(res, compare(curr, arr[idx + 1]));
    }
    return acc + res;
  }, 0);
}

console.log(solution(['go', 'gone', 'guild'])); // 7
// console.log(solution(['abc', 'def', 'ghi', 'jklm'])); // 4
// console.log(solution(['word', 'war', 'warrior', 'world'])); // 15
