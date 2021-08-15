// https://programmers.co.kr/learn/courses/30/lessons/60057

const solution = (s) => {
  if (s.length === 1) return 1;
  let arr = [];
  // 문자열 크기의 절반 수까지 i개 단위로 압축
  for (let i = 1; i <= parseInt(s.length / 2); i++) {
    // 0부터 i개의 문자가 첫 번째 압축 문자
    let str = s.substr(0, i);
    let cnt = 1;
    // j-i부터 i개의 문자와 j부터 i개의 문자가 같으면 cnt 1증가
    // 아니면 str에 그 문자를 숫자와 그대로 붙이기 (1이면 문자만 붙임)
    // 이때 j는 i만큼씩 증가
    for (let j = i; j <= s.length - i; j = j + i) {
      if (s.substr(j - i, i) === s.substr(j, i)) {
        cnt++;
        if (s.length - j - i < i) {
          str += cnt;
        }
      } else {
        if (cnt !== 1) {
          str += cnt;
          str += s.substr(j, i);
        } else {
          str += s.substr(j, i);
        }
        cnt = 1;
      }
    }
    // 남은 문자열은 압축할 수 없으므로 그대로 붙이기
    str += s.substr(s.length - 1 - (s.length % i), s.length % i);
    arr.push(str);
  }
  // 제일 압축 잘한 경우 반환
  let min = 100000;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length < min) min = arr[i].length;
  }
  return min;
};

console.log(solution('aabbaccc')); // 7
console.log(solution('ababcdcdababcdcd')); // 9
console.log(solution('abcabcdede')); // 8
console.log(solution('abcabcabcabcdededededede')); // 14
console.log(solution('xababcdcdababcdcd')); // 17
