//

function solution(n, info) {
  const arr = [];
  makeCom(arr, [], n, 10);
  let check = 0;
  let answer;
  arr.reverse().forEach((ele) => {
    const temp = Array(11).fill(0);
    ele.forEach((e) => {
      temp[e]++;
    });
    const tempScore = scoreDiff(info, temp);
    if (check < tempScore) {
      check = tempScore;
      answer = temp;
    }
  });

  return answer ? answer : [-1];
}

function scoreDiff(info, my) {
  let score = 0;
  for (let i = 0; i < info.length; i++) {
    if (info[i] < my[i]) score += 10 - i;
    else if (info[i] !== 0 && info[i] >= my[i]) score += i - 10;
  }
  return score;
}

function makeCom(arr, present, n, limit) {
  for (let i = 0; i <= limit; i++) {
    if (present.length === n - 1) arr.push([...present, i]);
    else makeCom(arr, [...present, i], n, i);
  }
}

console.log(solution(5, [2, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0])); // [0,2,2,0,1,0,0,0,0,0,0]
console.log(solution(1, [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])); // [-1]
console.log(solution(9, [0, 0, 1, 2, 0, 1, 1, 1, 1, 1, 1])); // [1,1,2,0,1,2,2,0,0,0,0]
console.log(solution(10, [0, 0, 0, 0, 0, 0, 0, 0, 3, 4, 3])); // [1,1,1,1,1,1,1,1,0,0,2]
