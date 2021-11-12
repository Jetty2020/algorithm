// https://programmers.co.kr/learn/courses/30/lessons/12941

function solution(A, B) {
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);
  return A.reduce((acc, cur, i) => {

    return acc + cur * B[i];
  }, 0);
}

console.log(solution([1, 4, 2], [5, 4, 4])); // 29
console.log(solution([1, 2], [3, 4])); // 10
