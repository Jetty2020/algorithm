// https://programmers.co.kr/learn/courses/30/lessons/86051

function solution(numbers) {
  const sum = numbers.reduce((acc, cur) => acc + cur, 0);
  return 45 - sum;
}

console.log(solution([1, 2, 3, 4, 6, 7, 8, 0])); // 14
// console.log(solution([5,8,4,0,6,7,9])); // 6
