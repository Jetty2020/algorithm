// https://programmers.co.kr/learn/courses/30/lessons/17684

let newStr = [];
let answer = [];
function solution(msg) {
  for (let i = 0; i < msg.length; ) {
    let add = comp(msg, i);
    i += add;
  }
  return answer;
}

const comp = (msg, i, num = 2) => {
  let loc = newStr.findIndex((ele) => ele === msg.substr(i, num));
  if (~loc && num + i <= msg.length) {
    return comp(msg, i, num + 1);
  } else {
    if (num === 2) {
      answer.push(msg[i].charCodeAt() - 64);
    } else {
      answer.push(
        newStr.findIndex((ele) => ele === msg.substr(i, num - 1)) + 27
      );
    }
    newStr.push(msg.substr(i, num));
    return num - 1;
  }
};

// console.log(solution('KAKAO')); // [11, 1, 27, 15]
console.log(solution('TOBEORNOTTOBEORTOBEORNOT')); // [20, 15, 2, 5, 15, 18, 14, 15, 20, 27, 29, 31, 36, 30, 32, 34]
// console.log(solution('ABABABABABABABAB')); // [1, 2, 27, 29, 28, 31, 30]
