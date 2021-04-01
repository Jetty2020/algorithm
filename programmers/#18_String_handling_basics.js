// 문제 설명

// 문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요.
// 예를 들어 s가 "a234"이면 False를 리턴하고 "1234"라면 True를 리턴하면 됩니다.

function solution(s) {
  return (
    (s.length === 4 || s.length === 6) && s.split('').every((a) => !isNaN(a))
  );
}

console.log(solution('a234')); //false
console.log(solution('    ')); //false
console.log(solution('1234')); //true
