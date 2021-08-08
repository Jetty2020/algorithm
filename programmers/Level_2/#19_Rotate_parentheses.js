// https://programmers.co.kr/learn/courses/30/lessons/17680

function solution(s) {
  let arr = s.split(''),
    open = ['[', '{', '('],
    close = [']', '}', ')'],
    answer = 0;

  for (let i = 0; i < arr.length; i++) {
    let result = [];
    for (let j = 0; j < arr.length; j++) {
      if (open.indexOf(arr[j]) >= 0) result.push(open.indexOf(arr[j]));  
      else {
        if (result.length === 0 || result.pop() !== close.indexOf(arr[j])) break;
      }
      if (j === arr.length - 1 && result.length === 0) answer++;
    }
    arr.push(arr.shift());
  }

  return answer;
}

console.log(solution('[](){}')); // 3
console.log(solution('}]()[{')); // 2
console.log(solution('[)(]')); // 0
console.log(solution('}}}')); // 0
