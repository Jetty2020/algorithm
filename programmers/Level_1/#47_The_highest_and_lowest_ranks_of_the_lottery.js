// https://programmers.co.kr/learn/courses/30/lessons/77484?language=javascript

function solution(lottos, win_nums) {
  const correct = lottos.filter((lotto) => win_nums.includes(lotto)).length;
  const zeros = lottos.filter((lotto) => lotto === 0).length;

  let min = 7 - correct >= 6 ? 6 : 7 - correct;
  let max = min - zeros < 1 ? 1 : min - zeros;
  return [max, min];
}

console.log(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19])); //[3, 5]
console.log(solution([0, 0, 0, 0, 0, 0], [38, 19, 20, 40, 15, 25])); //[1,6]
console.log(solution([45, 4, 35, 20, 3, 9], [20, 9, 3, 45, 4, 35])); //[1,1]
