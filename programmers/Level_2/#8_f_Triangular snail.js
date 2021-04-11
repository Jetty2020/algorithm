// https://programmers.co.kr/learn/courses/30/lessons/68645

// 문제 설명

// 정수 n이 매개변수로 주어집니다. 다음 그림과 같이 밑변의 길이와 높이가 n인 삼각형에서 맨 위 꼭짓점부터 반시계 방향으로 달팽이 채우기를 진행한 후,
// 첫 행부터 마지막 행까지 모두 순서대로 합친 새로운 배열을 return 하도록 solution 함수를 완성해주세요.

const solution = (n) => {
  const ans = new Array(n).fill().map((_, i) => new Array(i + 1));
  let count = 0,
    x = -1,
    y = 0;
  while (n > 0) {
    for (let i = 0; i < n; i++) ans[++x][y] = ++count;
    for (let i = 0; i < n - 1; i++) ans[x][++y] = ++count;
    for (let i = 0; i < n - 2; i++) ans[--x][--y] = ++count;
    n -= 3;
  }
  return ans.flatMap((e) => e);
};

console.log(solution(4)); //[1,2,9,3,10,8,4,5,6,7]
console.log(solution(5)); //[1,2,12,3,13,11,4,14,15,10,5,6,7,8,9]
console.log(solution(6)); //[1,2,15,3,16,14,4,17,21,13,5,18,19,20,12,6,7,8,9,10,11]
