// https://programmers.co.kr/learn/courses/30/lessons/62050

function solution(land, P, Q) {
  const blocks = land.flat().sort((a, b) => a - b);
  const total = blocks.reduce((a, b) => a + b);

  let floor = -1;
  let prev = 0;
  let answer = Infinity;

  for (let i = 0; i < blocks.length; i++) {
    if (floor !== blocks[i]) {
      floor = blocks[i];

      const willBeAddedCount = blocks[i] * i - prev;
      const willBeDeletedCount = total - prev - (blocks.length - i) * blocks[i];
      const result = willBeAddedCount * P + willBeDeletedCount * Q;

      if (answer > result) answer = result;
    }

    prev += blocks[i];
  }

  return answer;
}

console.log(
  solution(
    [
      [1, 2],
      [2, 3],
    ],
    3,
    2
  )
); // 5
console.log(
  solution(
    [
      [4, 4, 3],
      [3, 2, 2],
      [2, 1, 0],
    ],
    5,
    3
  )
); // 33
