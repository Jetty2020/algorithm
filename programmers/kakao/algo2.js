//

function solution(n, k) {
  const arr = n.toString(k).split('0');
  let answer = 0;
  arr.forEach((ele) => {
    if ((ele !== '1' && ele)&& checkPrime(ele)) answer++;
  });
  return answer;
}

function checkPrime(num) {
  if (num === 2) return true;
  for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

console.log(solution(437674, 3)); // 3
console.log(solution(110011, 10)); // 2
