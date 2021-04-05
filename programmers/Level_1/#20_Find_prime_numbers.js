// 문제 설명

// 1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하는 함수, solution을 만들어 보세요.
// 소수는 1과 자기 자신으로만 나누어지는 수를 의미합니다.
// (1은 소수가 아닙니다.)

function solution(n) {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }
  for (let j = 1; j * j < n; j++) {
    if (arr[j]) {
      let num = arr[j];
      for (let k = num * num; k <= n; k += num) {
        arr[k - 1] = 0;
      }
    }
  }
  arr = arr.filter((number) => number);

  return arr.length - 1;
}

console.log(solution(10)); //4
console.log(solution(5)); //3
