// https://programmers.co.kr/learn/courses/30/lessons/76501?language=javascript

function solution(abs, sign) {
  let answer = 0;
  abs.forEach((ele, i) => {
    if (sign[i]) answer += ele;
    else answer -= ele;
  });
  return answer;
}

console.log(solution([4, 7, 12], [true, false, true])); // 9
console.log(solution([1, 2, 3], [false, false, true])); // 0
