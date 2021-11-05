// https://programmers.co.kr/learn/courses/30/lessons/12911

function solution(n) {
  const count = dec2bin(n);
  while (1) {
    if (dec2bin(++n) === count) {
      return n;
    }
  }
}
function dec2bin(dec) {
  const bin = (dec >>> 0).toString(2).split('');
  let count = 0;
  for (let b of bin) {
    if (b === '1') {
      count += 1;
    }
  }
  return count;
}

console.log(solution(78)); // 83
// console.log(solution(15)); // 23
