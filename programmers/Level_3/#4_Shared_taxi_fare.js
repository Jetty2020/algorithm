// https://programmers.co.kr/learn/courses/30/lessons/72413

function solution(n, s, a, b, fares) {
  // n개 노드에 대해 모든 정점(n개)으로 향하는 DP배열
  // 초기값은 Infinity(최단경로없음)으로 설정
  const board = new Array(n).fill().map((_) => new Array(n).fill(Infinity));
  // 자기 자신에 대한 최단 경로는 0으로 설정
  for (let i = 0; i < n; i++) board[i][i] = 0;

  // 주어진 연결 정보로 DP 배열 초기화
  fares.forEach((pos) => {
    const [x, y, weight] = pos;
    // x에서 y로 향하는 최단경로(최소요금) = weight
    board[x - 1][y - 1] = weight;
    board[y - 1][x - 1] = weight;
  });

  // k는 경유노드, i는 시작노드, j는 도착노드
  for (let k = 0; k < n; k++) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (board[i][j] > board[i][k] + board[k][j])
          board[i][j] = board[i][k] + board[k][j];
      }
    }
  }

  // 기본 answer = 두 사람이 따로 가는 경우
  let answer = board[s - 1][a - 1] + board[s - 1][b - 1];
  for (let i = 0; i < n; i++) {
    // 시작점에서 합승지점까지 + 합승지점에서 a까지 + 합승지점에서 b까지
    const shortest = board[s - 1][i] + board[i][a - 1] + board[i][b - 1];
    // 기존값과 새로 계산된 값 중 더 작은 값으로 갱신
    answer = Math.min(answer, shortest);
  }

  return answer;
}

console.log(
  solution(6, 4, 6, 2, [
    [4, 1, 10],
    [3, 5, 24],
    [5, 6, 2],
    [3, 1, 41],
    [5, 1, 24],
    [4, 6, 50],
    [2, 4, 66],
    [2, 3, 22],
    [1, 6, 25],
  ])
); // 82
// console.log(
//   solution(7, 3, 4, 1, [
//     [5, 7, 9],
//     [4, 6, 4],
//     [3, 6, 1],
//     [3, 2, 3],
//     [2, 1, 6],
//   ])
// ); // 14
// console.log(
//   solution(6, 4, 5, 6, [
//     [2, 6, 6],
//     [6, 3, 7],
//     [4, 6, 7],
//     [6, 5, 11],
//     [2, 5, 12],
//     [5, 3, 20],
//     [2, 4, 8],
//     [4, 3, 9],
//   ])
// ); // 18
