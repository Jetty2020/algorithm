// 문제 설명

// 실패율
// failture_rate1.png
// 슈퍼 게임 개발자 오렐리는 큰 고민에 빠졌다. 그녀가 만든 프랜즈 오천성이 대성공을 거뒀지만, 요즘 신규 사용자의 수가 급감한 것이다.
// 원인은 신규 사용자와 기존 사용자 사이에 스테이지 차이가 너무 큰 것이 문제였다.
// 이 문제를 어떻게 할까 고민 한 그녀는 동적으로 게임 시간을 늘려서 난이도를 조절하기로 했다.
// 역시 슈퍼 개발자라 대부분의 로직은 쉽게 구현했지만, 실패율을 구하는 부분에서 위기에 빠지고 말았다. 오렐리를 위해 실패율을 구하는 코드를 완성하라.
// 실패율은 다음과 같이 정의한다.
// 스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수 / 스테이지에 도달한 플레이어 수
// 전체 스테이지의 개수 N, 게임을 이용하는 사용자가 현재 멈춰있는 스테이지의 번호가 담긴 배열 stages가 매개변수로 주어질 때,
// 실패율이 높은 스테이지부터 내림차순으로 스테이지의 번호가 담겨있는 배열을 return 하도록 solution 함수를 완성하라.

const solution = (N, stages) => {
  let arr = [stages.length],
    p = [],
    ans = [];
  stages.sort((a, b) => a - b);
  for (let i = 1; i < N + 1; i++) {
    arr.push(
      stages.filter((a) => {
        return a > i;
      }).length
    );
  }
  for (let j = 0; j < N; j++) {
    if (arr[j] === 0) {
      p.push(-2);
    } else {
      p.push((arr[j] - arr[j + 1]) / arr[j]);
    }
  }
  p.map((n) => ans.push(n));
  ans.sort((a, b) => b - a);
  for (let k = 0; k < ans.length; k++) {
    let key = p.indexOf(ans[k]);
    p[key] = -1;
    ans[k] = key + 1;
  }
  return ans;
};

console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3])); //[3,4,2,1,5]
console.log(solution(4, [3, 3, 3, 3, 3])); //[4,1,2,3]
