// https://programmers.co.kr/learn/courses/30/lessons/67257

function solution(expression) {
  const arr = [
    ['+', '-', '*'],
    ['+', '*', '-'],
    ['-', '+', '*'],
    ['-', '*', '+'],
    ['*', '+', '-'],
    ['*', '-', '+'],
  ];

  let num = expression.split(/[^0-9]/);
  num = num.map((it) => {
    return parseInt(it);
  });
  let sign = expression.split(/[0-9]/g).filter((ele) => {
    return ele !== '';
  });

  let maxNum = 0;
  for (let i = 0; i < arr.length; i++) {
    const copyNum = num.slice();
    const copySign = sign.slice();
    
    for (let j = 0; j < arr[i].length; j++) {
      for (let k = 0; k < copySign.length; k++) {
        if (copySign[k] === arr[i][j]) {
          if (copySign[k] === '*') {
            copyNum[k] *= copyNum[k + 1];
            copyNum.splice(k + 1, 1);
            copySign.splice(k, 1);
            k--;
          } else if (copySign[k] === '+') {
            copyNum[k] += copyNum[k + 1];
            copyNum.splice(k + 1, 1);
            copySign.splice(k, 1);
            k--;
          } else {
            copyNum[k] -= copyNum[k + 1];
            copyNum.splice(k + 1, 1);
            copySign.splice(k, 1);
            k--;
          }
        }
      }
    }

    if (Math.abs(copyNum[0]) >= maxNum) {
      maxNum = Math.abs(copyNum[0]);
    }
  }
  return maxNum;
}

console.log(solution('100-200*300-500+20')); // 60420
console.log(solution('50*6-3*2')); // 300
