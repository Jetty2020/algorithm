// pass
// https://programmers.co.kr/learn/courses/30/lessons/72412

function solution(info, query) {
  const answer = [];
  const infoMap = {};

  function combination(array, score, start) {
    const key = array.join('');
    const value = infoMap[key];

    if (value) {
      infoMap[key].push(score);
    } else {
      infoMap[key] = [score];
    }

    for (let i = start; i < array.length; i++) {
      const temp = [...array];
      temp[i] = '-';
      combination(temp, score, i + 1);
    }
  }

  for (const e of info) {
    const splited = e.split(' ');
    const score = Number(splited.pop());
    combination(splited, score, 0);
  }

  for (const key in infoMap) {
    infoMap[key] = infoMap[key].sort((a, b) => a - b);
  }

  for (const e of query) {
    const splited = e.replace(/ and /g, ' ').split(' ');
    const score = Number(splited.pop());
    const key = splited.join('');
    const array = infoMap[key];

    if (array) {
      let start = 0;
      let end = array.length;
      while (start < end) {
        const mid = Math.floor((start + end) / 2);

        if (array[mid] >= score) {
          end = mid;
        } else if (array[mid] < score) {
          start = mid + 1;
        }
      }

      const result = array.length - start;
      answer.push(result);
    } else {
      answer.push(0);
    }
  }

  return answer;
}

console.log(
  solution(
    [
      'java backend junior pizza 150',
      'python frontend senior chicken 210',
      'python frontend senior chicken 150',
      'cpp backend senior pizza 260',
      'java backend junior chicken 80',
      'python backend senior chicken 50',
    ],
    [
      'java and backend and junior and pizza 100',
      'python and frontend and senior and chicken 200',
      'cpp and - and senior and pizza 250',
      '- and backend and senior and - 150',
      '- and - and - and chicken 100',
      '- and - and - and - 150',
    ]
  )
); // [1,1,1,1,2,4]
