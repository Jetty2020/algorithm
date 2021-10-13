// https://programmers.co.kr/learn/courses/30/lessons/12979

function solution(n, stations, w) {
  const cov = w * 2 + 1;
  let temp = 1;
  let arr = [];
  for (let station of stations) {
    if (station - w > temp) arr.push(station - w - temp);
    temp = station + w + 1;
  }
  if (n >= temp) arr.push(n - temp + 1);
  let ans = 0;
  for (let ele of arr) {
    ans += Math.ceil(ele / cov);
  }
  return ans;
}

console.log(solution(11, [4, 11], 1)); // 3
console.log(solution(16, [9], 2)); // 3
