// https://programmers.co.kr/learn/courses/30/lessons/17683

function solution(m, musicinfos) {
  m = m.replace(/\w#/g, (a) => a[0].toLowerCase());

  let answer = musicinfos
    .map((info) => {
      info = info.split(',');

      let playTime = getMinutes(info[1]) - getMinutes(info[0]),
        melody = info[3].replace(/\w#/g, (a) => a[0].toLowerCase());

      melody =
        melody.length < playTime
          ? melody.padEnd(playTime, melody)
          : melody.substr(0, playTime);

      return [playTime, melody, info[2]];
    })
    .filter((info) => new RegExp(m).test(info[1]));

  if (answer.length) {
    if (answer.length > 1)
      answer = answer.filter(
        (v) => v[0] >= Math.max(...answer.map((v) => v[0]))
      );

    return answer[0][2];
  }

  return '(None)';
}

const getMinutes = (s) => s.substr(0, 2) * 60 + +s.substr(3);

console.log(
  solution('ABCDEFG', ['12:00,12:14,HELLO,CDEFGAB', '13:00,13:05,WORLD,ABCDEF'])
); // "HELLO"
console.log(
  solution('CC#BCC#BCC#BCC#B', [
    '03:00,03:30,FOO,CC#B',
    '04:00,04:08,BAR,CC#BCC#BCC#B',
  ])
); // "FOO"
console.log(
  solution('ABC', ['12:00,12:14,HELLO,C#DEFGAB', '13:00,13:05,WORLD,ABCDEF'])
); // "WORLD"s
