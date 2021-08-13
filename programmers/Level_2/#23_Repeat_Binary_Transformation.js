// https://programmers.co.kr/learn/courses/30/lessons/70129

function solution(s) {
  let zeros = 0,
    len = s.length, count = 0;
  let arr = s.split('');
  while (arr.join('') !== '1') {
    arr = arr.filter((ele) => ele === '1');
    zeros += len - arr.length;
    arr = arr.length.toString(2).split('')
    len = arr.length;
    count++;
  }
  return [count, zeros];
}

console.log(solution('110010101001')); // [3, 8]
console.log(solution('01110')); // [3, 3]
console.log(solution('1111111')); // [4, 1]
