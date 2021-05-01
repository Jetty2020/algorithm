// https://leetcode.com/problems/add-digits/

const addDigits = (num) => {
  let ans = 0,
    temp = num;
  while (1) {
    ans += temp % 10;
    temp = Math.floor(temp / 10);
    if (temp < 1) break;
  }
  return ans > 9 ? addDigits(ans) : ans;
};

console.log(addDigits(38)); // 11
console.log(addDigits(24)); //6
