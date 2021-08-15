// https://programmers.co.kr/learn/courses/30/lessons/42587

const solution = (prio, loc) => {
  let answer = 0;
  while (prio.length) {
    if (prio.filter((n) => n > prio[0]).length) {
      prio.push(prio.shift());
      loc === 0 ? (loc = prio.length - 1) : loc--;
    } else {
      prio.shift();
      answer++;
      if (loc === 0) return answer;
      else loc--;
    }
  }
};

console.log(solution([2, 1, 3, 2], 2)); // 1
console.log(solution([1, 1, 9, 1, 1, 1], 0)); // 5
