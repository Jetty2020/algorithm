// https://programmers.co.kr/learn/courses/30/lessons/64065

function solution(s) {
  let answer = [];
  let arr = s.replace('{{', '').replace('}}', '').split('},{');
  arr = arr
    .map((ele) => ele.split(','))
    .sort((ele1, ele2) => ele1.length - ele2.length);
  for (let i = 0; i < arr.length; i++) {
    let temp = arr[i].slice();
    for (let j = 0; j <= answer.length; j++) {
      if (temp.length === 1) answer.push(+temp.pop());
      else {
        temp = temp.filter((ele) => ele != answer[j]);
      }
    }
  }
  return answer;
}

console.log(solution('{{2},{2,1},{2,1,3},{2,1,3,4}}')); // [2, 1, 3, 4]
console.log(solution('{{1,2,3},{2,1},{1,2,4,3},{2}}')); // [2, 1, 3, 4]
console.log(solution('{{20,111},{111}}')); // [111, 20]
console.log(solution('{{123}}')); // [123]
console.log(solution('{{4,2,3},{3},{2,3,4,1},{2,3}}')); //  [3, 2, 4, 1]
