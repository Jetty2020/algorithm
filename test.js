// 1번
// function solution(s) {
//   let arr = s.split(',').map((v) => v * 1);
//   let len = arr.length;

//   return arr.reduce((acc, cal) => acc + cal, 0) / len;
// }

// console.log(solution('5, 4, 10, 2, 5'));

// 2번
// function solution(arr) {
//   let ans = 0;
//   arr.forEach((v) => {
//     (v + '').split('').forEach((x) => {
//       ans += x * 1;
//     });
//   });

//   return ans;
// }

// console.log(solution([11, 22, 33, 111, 2]));

// function solution(arr) {
//   const len = arr.length;
//   const sum = arr.reduce((acc, curr) => acc + curr, 0);
//   const avg = sum / len;
//   let vari = 0;
//   arr.forEach((v) => {
//     vari += (v - avg) ** 2;
//   });
//   vari = vari / 8;
//   console.log('평균:', avg);
//   console.log('분산:', vari);
//   return;
// }

// console.log(solution([10, 20, 30, 10, 20, 30, 40, 10]));

//

function solution() {
  const Korea = [
    {
      지역이름: '전국',
      확진자수: 24889,
      격리해제수: 23030,
      사망자수: 438,
      십만명당발생율: 48.0,
    },
  ];
  console.log(Korea[0]["확진자수"]);
  return;
}

console.log(solution()); //
