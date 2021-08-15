// https://programmers.co.kr/learn/courses/30/lessons/12899


const solution = (n) => {
  return n ? solution(parseInt((n - 1) / 3)) + [1, 2, 4][(n - 1) % 3] : '';
};

console.log(solution(1)); // 1
console.log(solution(2)); // 2
console.log(solution(3)); // 4
console.log(solution(4)); // 11
