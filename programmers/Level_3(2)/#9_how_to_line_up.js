// https://programmers.co.kr/learn/courses/30/lessons/12936

function solution(n, k) {
  const answer = [];
  const arr = new Array(n).fill(0).map((_, i) => i + 1);
  let nth = k - 1;

  while (arr.length) {
    if (nth === 0) {
      answer.push(...arr);
      break;
    }

    const fact = factorial(arr.length - 1);
    const index = (nth / fact) >> 0;
    nth = nth % fact;

    answer.push(arr[index]);
    arr.splice(index, 1);
  }

  return answer;
}

const factorial = (n) => {
  let res = 1;
  for (let i = 2; i <= n; i++) res *= i;
  return res;
};

console.log(solution(3, 5)); // [3,1,2]
