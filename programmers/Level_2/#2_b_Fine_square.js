// https://programmers.co.kr/learn/courses/30/lessons/62048

const solution = (w, h) => {
  let sum = w + h,
    square = w * h;

  for (; w % h !== 0; ) {
    let e = h;
    h = w % h;
    w = e;
  }
  return square - sum + h;
};

//Better

const solution2 = (w, h) => {
  const gcd = (a, b) => {
    return b === 0 ? a : gcd(b, a % b);
  };

  return w * h - (w + h - gcd(w, h));
};

console.log(solution(12, 12)); //80
