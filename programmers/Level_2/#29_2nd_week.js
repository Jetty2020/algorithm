// https://programmers.co.kr/learn/courses/30/lessons/83201

function solution(scores) {
  let answer = '';
  const matrix = Object.keys(scores[0]).map((index) =>
    scores.map((score) => score[index])
  );
  for (let i = 0; i < matrix.length; i++) {
    let avg;
    if (
      (Math.max(...matrix[i]) === matrix[i][i] ||
        Math.min(...matrix[i]) === matrix[i][i]) &&
      matrix[i].filter((ele) => ele === matrix[i][i]).length === 1
    ) {
      avg =
        (matrix[i].reduce((a, b) => a + b) - matrix[i][i]) /
        (matrix.length - 1);
    } else {
      avg = matrix[i].reduce((a, b) => a + b) / matrix.length;
    }
    console.log(i, avg);
    if (avg >= 90) answer += 'A';
    else if (avg >= 80) answer += 'B';
    else if (avg >= 70) answer += 'C';
    else if (avg >= 50) answer += 'D';
    else answer += 'F';
  }

  return answer;
}

console.log(
  solution([
    [100, 90, 98, 88, 65],
    [50, 45, 99, 85, 77],
    [47, 88, 95, 80, 67],
    [61, 57, 100, 80, 65],
    [24, 90, 94, 75, 65],
  ])
); // "FBAAD"
console.log(
  solution([
    [50, 90],
    [50, 87],
  ])
); // "DA"
console.log(
  solution([
    [70, 49, 90],
    [68, 50, 38],
    [73, 31, 100],
  ])
); // "CFD"
