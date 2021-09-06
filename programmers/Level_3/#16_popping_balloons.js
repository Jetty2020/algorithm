// https://programmers.co.kr/learn/courses/30/lessons/68646

function solution(a) {
  let answer = 1;
  let m1_idx = 0;
  let m2_idx = a.length - 1;
  let m1 = a[m1_idx];
  let m2 = a[m2_idx];

  while (m1_idx < m2_idx) {
    if (m1 > m2) {
      if (m1 > a[++m1_idx]) {
        answer++;
        m1 = a[m1_idx];
      }
    }
    if (m1 < m2) {
      if (m2 > a[--m2_idx]) {
        answer++;
        m2 = a[m2_idx];
      }
    }
  }

  return answer;
}

console.log(solution([9, -1, -5])); // 3
// console.log(solution([-16, 27, 65, -2, 58, -92, -71, -68, -61, -33])); // 6
