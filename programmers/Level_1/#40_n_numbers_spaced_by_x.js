// 문제 설명

// 함수 solution은 정수 x와 자연수 n을 입력 받아, x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트를 리턴해야 합니다.
// 다음 제한 조건을 보고, 조건을 만족하는 함수, solution을 완성해주세요.

const solution = (x, n) => {
  let ans = [];
  for (let i = 0; i < n; i++) {
    ans.push(x + x * i);
  }
  return ans;
};

//better
const solution2 = (x, n) => {
  return Array(n).fill(x).map((v, i) => (i + 1) * v)
}

console.log(solution(2, 5)); //[2, 4, 6, 8, 10]
console.log(solution(4, 3)); //[4, 8, 12]
console.log(solution(-4, 2)); //[-4, -8]
