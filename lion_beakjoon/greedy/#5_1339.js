// https://www.acmicpc.net/problem/1339

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').splice(1);

function solution() {
  let weight = [];
  let arr = input
    .sort((a, b) => b.length - a.length)
    .map((v) => {
      let inp = v.split('');
      return inp;
    });
  const obj = new Map();
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      obj.has(arr[i][j])
        ? obj.set(arr[i][j], obj.get(arr[i][j]) + 10 ** (arr[i].length - j - 1))
        : obj.set(arr[i][j], 10 ** (arr[i].length - j - 1));
    }
  }
  obj.forEach((v) => {
    weight.push(v);
  });
  return weight
    .sort((a, b) => b - a)
    .map((v, i) => v * (9 - i))
    .reduce((acc, curr) => acc + curr, 0);
}

console.log(solution());
