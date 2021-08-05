// https://programmers.co.kr/learn/courses/30/lessons/81302#fn1

function solution(places) {
  let answer = [];

  for (let i = 0; i < places.length; i++) {
    answer.push(keep_dist(places[i]));
  }

  return answer;
}

// 거리두기 확인
function keep_dist(place) {
  place = place.map((v) => v.split(''));

  for (let row = 0; row < 5; row++) {
    for (let col = 0; col < 5; col++) {
      if (place[row][col] === 'P') {
        // 가로 한칸 체크
        if (col < 4 && place[row][col + 1] === 'P') {
          return 0;
        }
        // 가로 두칸 체크
        if (
          col < 3 &&
          place[row][col + 2] === 'P' &&
          place[row][col + 1] === 'O'
        ) {
          return 0;
        }
        // 세로 한칸 체크
        if (row < 4 && place[row + 1][col] === 'P') {
          return 0;
        }
        // 세로 두칸 체크
        if (
          row < 3 &&
          place[row + 2][col] === 'P' &&
          place[row + 1][col] === 'O'
        ) {
          return 0;
        }

        // 아래 왼쪽 대각
        if (row < 4 && place[row + 1][col - 1] === 'P') {
          if (place[row + 1][col] === 'O' || place[row][col - 1] === 'O') {
            return 0;
          }
        }
        //아래 오른쪽 대각
        if (row < 4 && col < 4 && place[row + 1][col + 1] === 'P') {
          if (place[row + 1][col] === 'O' || place[row][col + 1] === 'O') {
            return 0;
          }
        }
      }
    }
  }

  return 1;
}

console.log(
  solution([
    ['POOOP', 'OXXOX', 'OPXPX', 'OOXOX', 'POXXP'],
    ['POOPX', 'OXPXP', 'PXXXO', 'OXXXO', 'OOOPP'],
    ['PXOPX', 'OXOXP', 'OXPOX', 'OXXOP', 'PXPOX'],
    ['OOOXX', 'XOOOX', 'OOOXX', 'OXOOX', 'OOOOO'],
    ['PXPXP', 'XPXPX', 'PXPXP', 'XPXPX', 'PXPXP'],
  ])
); // [1, 0, 1, 1, 1]
