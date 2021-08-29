// https://programmers.co.kr/learn/courses/30/lessons/17676

function solution(lines) {
  const times = [];
  for (const line of lines) {
    const [date, finish, duration] = line.split(' ');
    const millis = transTime(finish.split(':'));
    const startTime =
      millis - duration.slice(0, -1) * 1000 + 1;
    const endTime = millis + 999;

    times.push(['START', startTime]);
    times.push(['END', endTime]);
  }
  times.sort((a, b) => (a[1] !== b[1] ? a[1] - b[1] : -1));

  let answer = 0;
  let count = 0;

  for (const time of times) {
    if (time[0] === 'START') count++;
    else count--;

    answer = Math.max(answer, count);
  }

  return answer;
}

const transTime = (time) => {
  const hour = time[0] * 3600;
  const minute = time[1] * 60;
  const seconds = time[2] * 1;
  const amount = (hour + minute + seconds) * 1000

  return amount;
};

// console.log(
//   solution(['2016-09-15 01:00:04.001 2.0s', '2016-09-15 01:00:07.000 2s'])
// ); // 1
console.log(
  solution(['2016-09-15 01:00:04.002 2.0s', '2016-09-15 01:00:07.000 2s'])
); // 2
// console.log(
//   solution([
//     '2016-09-15 20:59:57.421 0.351s',
//     '2016-09-15 20:59:58.233 1.181s',
//     '2016-09-15 20:59:58.299 0.8s',
//     '2016-09-15 20:59:58.688 1.041s',
//     '2016-09-15 20:59:59.591 1.412s',
//     '2016-09-15 21:00:00.464 1.466s',
//     '2016-09-15 21:00:00.741 1.581s',
//     '2016-09-15 21:00:00.748 2.31s',
//     '2016-09-15 21:00:00.966 0.381s',
//     '2016-09-15 21:00:02.066 2.62s',
//   ])
// ); // 7
