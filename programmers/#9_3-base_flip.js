// 문제 설명

// 자연수 n이 매개변수로 주어집니다. n을 3진법 상에서 앞뒤로 뒤집은 후,
// 이를 다시 10진법으로 표현한 수를 return 하도록 solution 함수를 완성해주세요.

function solution(n) {
  let base = [],
    answer = 0;
  while (n > 0) {
    base.push(n % 3);
    n = Math.floor(n / 3);
  }
  for (let i = 0; i < base.length; i++) {
    if (base[i] !== 0) {
      answer += base[i] * Math.pow(3, base.length - i - 1);
    }
  }

  return answer;
}

//Better
const solution2 = (n) => {
  return parseInt([...n.toString(3)].reverse().join(""), 3);
}

console.log(solution2(45)); //7
console.log(solution2(125)); //229
