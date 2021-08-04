// https://programmers.co.kr/learn/courses/30/lessons/82612

function solution(price, money, count) {
  let total = 0;
  for(let i = 1; i <= count; i++) {
    total += price * i;
  }
  let answer = (total - money > 0) ? total - money : 0;
  return answer;
}

console.log(solution(3, 20, 4)); // 10
