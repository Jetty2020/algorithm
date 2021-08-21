// https://programmers.co.kr/learn/courses/30/lessons/81303

var list;
var stack = [];
var answer;

const Down = (k, m) => {
  for (let i = 0; i < m; i++) k = list[k][1];
  return k;
};

const Up = (k, m) => {
  for (let i = 0; i < m; i++) k = list[k][0];
  return k;
};

const Delete = (k) => {
  let pre = list[k][0];
  let next = list[k][1];
  stack.push([k, pre, next]);
  answer[k] = false;
  if (next === -1) {
    if (pre !== -1) list[pre][1] = -1;
    k = pre;
  } else {
    if (next !== -1) list[next][0] = pre;
    if (pre !== -1) list[pre][1] = next;
    k = next;
  }
  return k;
};

const GetBack = () => {
  const s = stack.pop();
  const k = s[0];
  const pre = s[1];
  const next = s[2];
  if (pre !== -1) list[pre][1] = k;
  if (next !== -1) list[next][0] = k;
  answer[k] = true;
};

function solution(n, k, cmd) {
  // LinkedList
  list = Array.from({ length: n }, (value, index) => [index - 1, index + 1]);
  answer = Array(n).fill(true);
  list[n - 1][1] = -1;
  for (let c of cmd) {
    let order = c.split(' ');
    switch (order[0]) {
      case 'D':
        k = Down(k, order[1]);
        break;
      case 'C':
        k = Delete(k);
        break;
      case 'U':
        k = Up(k, order[1]);
        break;
      case 'Z':
        GetBack();
        break;
    }
  }
  var ret = [];
  for (let i = 0; i < n; i++) {
    if (answer[i]) {
      ret.push('O');
    } else {
      ret.push('X');
    }
  }

  return ret.join('');
}

console.log(
  solution(8, 2, ['D 2', 'C', 'U 3', 'C', 'D 4', 'C', 'U 2', 'Z', 'Z'])
); // "OOOOXOOO"
// console.log(
//   solution(8, 2, [
//     'D 2',
//     'C',
//     'U 3',
//     'C',
//     'D 4',
//     'C',
//     'U 2',
//     'Z',
//     'Z',
//     'U 1',
//     'C',
//   ])
// ); // "OOXOXOOO"
