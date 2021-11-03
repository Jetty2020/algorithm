// https://programmers.co.kr/learn/courses/30/lessons/42839

function solution(numbers) {
  let answer = [];
  let numArr = numbers.split('');
  chk_numbers(numArr, '');
  function chk_numbers(arr, str) {
    if (str.length > 0) {
      if (!answer.includes(Number(str))) {
        if (chk_prime_number(Number(str))) answer.push(Number(str));
      }
    }
    if (arr.length > 0) {
      for (let i in arr) {
        let clone = arr.slice();
        clone.splice(i, 1);
        chk_numbers(clone, str + arr[i]);
      }
    }
  }

  // 소수 검증
  function chk_prime_number(num) {
    num = parseInt(num);
    if (num < 2) return false;
    let result = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i == 0) {
        result = false;
        break;
      }
    }
    return result;
  }
  return answer.length;
}

console.log(solution('17')); // 3
// console.log(solution('011')); // 2
