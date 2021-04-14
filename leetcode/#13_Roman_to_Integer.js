// https://leetcode.com/problems/roman-to-integer/

const romanToInt = (s) => {
  let sum = 0;
  let roman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let exception = {
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900,
  };

  for (let i = 0; i < s.length; i++) {
    let str = s[i] + s[i + 1]; 
    if (exception[str]) {
      sum += exception[str];
      i += 1; 
    } else {
      sum += roman[s[i]];
    }
  }

  return sum;
};

console.log(romanToInt('III')); //3
console.log(romanToInt('IV')); //4
console.log(romanToInt('IX')); //9
console.log(romanToInt('LVIII')); //58
console.log(romanToInt('MCMXCIV')); //1994
