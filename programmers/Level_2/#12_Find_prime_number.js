// https://programmers.co.kr/learn/courses/30/lessons/42839

const solution = (num) => {
  let ans = 0,
    arr = num.split('');
  // for (let i = 1; i <= num.length; i++) {
  // }
  // getCom(arr, i);
  return getCom(arr, 2, []);
};

const getCom = (arr, num, fix) => {
  let ans = [];
  if (num === 1) {
    for (let i = 0; i < arr.length; i++) {
      let tem = [];
      fix.map((n) => tem.push(n));
      tem.push(arr[i]);
      ans.push(tem)
    }
    return ans;
  } else {
    for (let j = 0; j < arr.length; j++) {
      let tem = [];
      fix.map((n) => tem.push(n));
      tem.push(arr.shift())
      ans.push(getCom(arr, num -1 , fix))
    }
    return ans;
  }
};

// console.log(solution('17')); //3
console.log(solution('011')); //2
