// https://programmers.co.kr/learn/courses/30/lessons/64062

function solution(stones, k) {
  let left = 1;
  let right = 200000000;
  const len = stones.length;
  while (left <= right) {
    let flag = false;
    let count = 0;
    const mid = ((left + right) / 2) >> 0;
    const copy = stones.slice();

    for (let i = 0; i < len; i++) {
      copy[i] -= mid;
      copy[i] <= 0 ? count++ : (count = 0);

      if (count === k) {
        flag = true;
        break;
      }
    }
    flag ? (right = mid - 1) : (left = mid + 1);
  }
  return left;
}

console.log(solution([2, 4, 5, 3, 2, 1, 4, 2, 5, 1], 3)); // 3
