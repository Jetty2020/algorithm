// https://programmers.co.kr/learn/courses/30/lessons/77884

function solution(left, right) {
  let answer = 0;
  for (let nums = left; nums <= right; nums++) {
    let prime = 0;
    for (let i = 1; i * i <= nums; i++) {
      if (i * i === nums) {
        prime++;
      }
    }
    if (prime % 2 === 1) answer -= nums;
    else answer += nums;
  }

  return answer;
}

console.log(solution(13, 17)); // 43
console.log(solution(24, 27)); // 52
