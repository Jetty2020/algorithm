// https://programmers.co.kr/learn/courses/30/lessons/17678

function solution(n, t, m, timetable) {
  let answer = '';
  let shuttle = '09:00';
  const map = new Map();

  timetable.sort((a, b) => (timeCheck(a, b) ? 1 : -1));
  timetable.forEach((time) => {
    if (map.has(time)) map.set(time, map.get(time) + 1);
    else map.set(time, 1);
  });

  for (let i = 0; i < n; i++) {
    const pendinglist = [];
    for (const [key, value] of map) {
      if (timeCheck(shuttle, key)) {
        for (let j = 0; j < m; j++) {
          if (!map.get(key)) {
            map.delete(key);
            break;
          }

          if (pendinglist.length === m) break;

          pendinglist.push(key);
          map.set(key, map.get(key) - 1);
        }
      } else break;
    }
    if (pendinglist.length < m) answer = shuttle;
    else if (pendinglist.length === m)
      answer = timeOffset(pendinglist[pendinglist.length - 1], -1);

    shuttle = timeOffset(shuttle, t);
  }

  return answer;
}

const timeCheck = (time1, time2) => {
  const [hour1, minute1] = time1.split(':');
  const [hour2, minute2] = time2.split(':');
  const times1 = hour1 * 60 + minute1 * 1;
  const times2 = hour2 * 60 + minute2 * 1;
  return times2 <= times1;
};

const timeOffset = (time, period) => {
  const [hour, minute] = time.split(':');
  const times = hour * 60 + minute * 1;
  const next = times + period;
  return toTimeStr(next);
};

const toTimeStr = (time) => {
  const hour = (time / 60) >> 0;
  const minute = time % 60;
  const hstr = hour > 9 ? hour : '0' + hour;
  const mstr = minute > 9 ? minute : '0' + minute;
  return hstr + ':' + mstr;
};

// console.log(solution(1, 1, 5, ['08:00', '08:01', '08:02', '08:03'])); // "09:00"
console.log(solution(2, 10, 2, ['09:10', '09:09', '08:00'])); // "09:09"
// console.log(solution(2, 1, 2, ['09:00', '09:00', '09:00', '09:00'])); // "08:59"
// console.log(solution(1, 1, 5, ['00:01', '00:01', '00:01', '00:01', '00:01'])); // "00:00"
// console.log(solution(1, 1, 1, ['23:59'])); // "09:00"
// console.log(
//   solution(10, 60, 45, [
//     '23:59',
//     '23:59',
//     '23:59',
//     '23:59',
//     '23:59',
//     '23:59',
//     '23:59',
//     '23:59',
//     '23:59',
//     '23:59',
//     '23:59',
//     '23:59',
//     '23:59',
//     '23:59',
//     '23:59',
//     '23:59',
//   ])
// ); // "18:00"
