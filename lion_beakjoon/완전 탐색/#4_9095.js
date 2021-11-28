//https://www.acmicpc.net/problem/9095

// 제출용 input
let input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .splice(1);

// 실행용
// const input = '3\n4\n7\n10'.split('\n').splice(1);
//ansArr[n] : 정수 n을 1, 2, 3의 합으로 나타내는 방법의 수
const ansArr = Array(10);
let result = '';

//초기값 설정
ansArr[0] = 1;
ansArr[1] = 2;
ansArr[2] = 4;

for (let i = 3; i < 10; i++) {
  //n이 10 미만이므로 10 방법의 수 저장
  ansArr[i] = ansArr[i - 1] + ansArr[i - 2] + ansArr[i - 3];
}
//입력에 맞는 방법의 수 메모에서 출력
input.forEach((value) => {
  result += `${ansArr[value * 1 - 1]}\n`;
});

console.log(result);
