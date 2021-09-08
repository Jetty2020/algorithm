// https://programmers.co.kr/learn/courses/30/lessons/77886

function solution(s) {
  const answer = [];

  for (const _s of s) {
    const stack = [];
    const arr = _s.split('');
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      const third = arr[i];
      if (stack.length > 1) {
        const second = stack.pop();
        const first = stack.pop();
        if (first === '1' && second === '1' && third === '0') {
          count++;
          continue;
        } else stack.push(first, second, third);
      } else {
        stack.push(third);
      }
    }
    console.log(_s, stack, count);
    if (!count) {
      answer.push(_s);
    } else {
      const list = [];
      const keyword = '011';
      while (stack.length) {
        const last = stack.pop();
        if (last === '0') {
          stack.push(last);
          break;
        }
        list.push(last);
      }

      while (count) {
        list.push(...keyword);
        count--;
      }

      while (stack.length) {
        list.push(stack.pop());
      } 

      const result = list.reverse().join('');
      answer.push(result);
    }
  }

  return answer;
}

console.log(solution(["1110","100111100","0111111010"])); // ["1101","100110110","0110110111"]
