// https://programmers.co.kr/learn/courses/30/lessons/17677

function solution(str1, str2) {
  str1 = str1.toUpperCase();
  str2 = str2.toUpperCase();
  let arr1 = [];
  let arr2 = [];
  for (let i = 0; i < str1.length - 1; i++) {
    let tmp = str1.slice(i, i + 2);
    if (tmp.search(/[^A-Z]/g) >= 0) continue;
    arr1.push(tmp);
  }
  for (let i = 0; i < str2.length - 1; i++) {
    let tmp = str2.slice(i, i + 2);
    if (tmp.search(/[^A-Z]/g) >= 0) continue;
    arr2.push(tmp);
  }
  arr1.sort();
  arr2.sort();
  let inter = [];
  let union = [];
  for (i in arr2) {
    if (arr1.indexOf(arr2[i]) >= 0) {
      inter.push(arr1.splice(arr1.indexOf(arr2[i]), 1));
    }
    union.push(arr2[i]);
  }
  for (i in arr1) {
    union.push(arr1[i]);
  }
  return union.length === 0
    ? 65536
    : Math.floor((inter.length / union.length) * 65536);
}

console.log(solution('FRANCE', 'french')); // 16384
console.log(solution('handshake', 'shake hands')); // 65536
console.log(solution('aa1+aa2', 'AAAA12')); // 43690
console.log(solution('E=M*C^2', 'e=m*c^2')); // 655536
