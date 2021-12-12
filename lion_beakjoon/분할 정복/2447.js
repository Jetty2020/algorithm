// https://www.acmicpc.net/problem/2447

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const num = parseInt(input[0]);

const lines = [];

printStars(num);

function printStars(num) {
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      star(i, j, num);
    }
    lines.push('\n');
  }
}

function star(i, j, num) {
  if (i % 3 == 1 && j % 3 == 1) {
    lines.push(' ');
  } else {
    if (num == 1) {
      lines.push('*');
    } else {
      star(parseInt(i / 3), parseInt(j / 3), parseInt(num / 3));
    }
  }
}

console.log(lines.join(''));
