// https://programmers.co.kr/learn/courses/30/lessons/60058

const reverse = (str) => {
  return str
    .slice(1, str.length - 1)
    .split('')
    .map((c) => (c === '(' ? ')' : '('))
    .join('');
};

const solution = (p) => {
  if (p.length === 0) return '';
  let bal = 0;
  let pivot = 0;
  do {
    bal += p[pivot++] === '(' ? 1 : -1;
  } while (bal !== 0);
  
  const u = p.slice(0, pivot);
  const v = solution(p.slice(pivot, p.length));

  if (u[0] === '(') return u + v;
  else return '(' + v + ')' + reverse(u);
};

console.log(solution('(()())()')); //'(()())()'
console.log(solution(')(')); //'()'
console.log(solution('()))((()')); //'()(())()'
