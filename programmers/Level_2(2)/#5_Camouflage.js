// https://programmers.co.kr/learn/courses/30/lessons/42578

function solution(clothes) {
  let kinds = [];
  let num = [];
  clothes.forEach((ele) => {
    let n = kinds.indexOf(ele[1]);
    if (~n) num[n] += 1;
    else {
      kinds.push(ele[1]);
      num.push(1);
    }
  });
  return num.length === 1
    ? num[0]
    : num.reduce((acc, cur) => acc * (cur + 1), 1) - 1;
}

console.log(
  solution([
    ['yellowhat', 'headgear'],
    ['bluesunglasses', 'eyewear'],
    ['green_turban', 'headgear'],
  ])
); // 5
console.log(
  solution([
    ['crowmask', 'face'],
    ['bluesunglasses', 'face'],
    ['smoky_makeup', 'face'],
  ])
); // 3
