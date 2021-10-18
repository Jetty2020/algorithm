// https://programmers.co.kr/learn/courses/30/lessons/42884

function solution(routes) {
  const answer = [[-30000, 30000]];
  routes.sort((a, b) => a[0] - b[0]);

  for (const route of routes) {
    if (answer[0][1] < route[0]) answer.unshift(route);
    else {
      if (answer[0][0] < route[0] && answer[0][1] >= route[0])
        answer[0][0] = route[0];
      if (answer[0][0] <= route[1] && answer[0][1] > route[1])
        answer[0][1] = route[1];
    }
  }
  return answer.length;
}

console.log(
  solution([
    [-20, -15],
    [-14, -5],
    [-18, -13],
    [-5, -3],
  ])
); // 2
