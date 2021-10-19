// https://programmers.co.kr/learn/courses/30/lessons/12946

function solution(n) {
  const answer = [];
  hanoi(n, 1, 2, 3, answer);
  return answer;
}

const hanoi = (n, start, via, end, answer) => {
  if (n === 1) answer.push([start, end]);
  else {
    hanoi(n - 1, start, end, via, answer);
    answer.push([start, end]);
    hanoi(n - 1, via, start, end, answer);
  }
};

console.log(solution(3)); // [ [1,2], [1,3], [2,3] ]
