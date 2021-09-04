// https://programmers.co.kr/learn/courses/30/lessons/84325

function solution(table, languages, preference) {
  let answer;
  let count = 0;
  for (let i = 0; i < table.length; i++) {
    const arr = table[i].split(' ');
    let number = 0;
    for (let j = 1; j < arr.length; j++) {
      for (let k = 0; k < languages.length; k++) {
        if (arr[j] === languages[k]) {
          number += preference[k] * (6 - j);
          break;
        }
      }
    }

    if (count < number) {
      answer = arr[0];
      count = number;
    } else if (count === number) {
      answer = [answer, arr[0]].sort()[0];
    }
  }
  return answer;
}

// console.log(
//   solution(
//     [
//       'SI JAVA JAVASCRIPT SQL PYTHON C#',
//       'CONTENTS JAVASCRIPT JAVA PYTHON SQL C++',
//       'HARDWARE C C++ PYTHON JAVA JAVASCRIPT',
//       'PORTAL JAVA JAVASCRIPT PYTHON KOTLIN PHP',
//       'GAME C++ C# JAVASCRIPT C JAVA',
//     ],
//     ['PYTHON', 'C++', 'SQL'],
//     [7, 5, 5]
//   )
// ); // "HARDWARE"
console.log(
  solution(
    [
      'SI JAVA JAVASCRIPT SQL PYTHON C#',
      'CONTENTS JAVASCRIPT JAVA PYTHON SQL C++',
      'HARDWARE C C++ PYTHON JAVA JAVASCRIPT',
      'PORTAL JAVA JAVASCRIPT PYTHON KOTLIN PHP',
      'GAME C++ C# JAVASCRIPT C JAVA',
    ],
    ['JAVA', 'JAVASCRIPT'],
    [7, 5]
  )
); // "PORTAL"
