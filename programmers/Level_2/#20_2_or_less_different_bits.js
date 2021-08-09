// https://programmers.co.kr/learn/courses/30/lessons/77885

function solution(numbers) {
  return numbers.map((n) => fn(n));
}

function fn(n) {
  if (n % 2 === 0) return n + 1; // 짝수 일땐 +1 만해도 조건 충족
  const bit = n.toString(2).split('');
  let pos = bit.length;
  while (pos > 0) {
    if (bit[pos] === '0') break;
    pos--;
  }
  pos ? (bit[pos] = '1') : bit.unshift('1');
  bit[pos + 1] = '0';

  return parseInt(bit.join(''), 2);
}

console.log(solution([2, 7])); // [3, 11]
