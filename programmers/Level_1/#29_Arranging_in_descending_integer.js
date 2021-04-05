// 문제 설명

// 함수 solution은 정수 n을 매개변수로 입력받습니다.
// n의 각 자릿수를 큰것부터 작은 순으로 정렬한 새로운 정수를 리턴해주세요.
// 예를들어 n이 118372면 873211을 리턴하면 됩니다.

function solution(n) {
  let arr = [],
    an = 0;
  while (n > 0) {
    arr.push(n % 10);
    n = Math.floor(n / 10);
  }
  arr.sort((a, b) => {
    return b - a;
  });
  arr.map((x) => {
    an = an * 10 + x;
  });
  return an;
}

console.log(solution(118372)); //873211
