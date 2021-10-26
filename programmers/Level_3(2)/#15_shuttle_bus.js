//

function solution(n, t, m, timetable) {
  let ans;
  const start = 540;
  let end;
  timetable = timetable
    .map((ele) => {
      let time = ele.split(':');
      return time[0] * 60 + time[1] * 1;
    })
    .sort((a, b) => b - a);
  let member = [];
  for (let i = 0; i < n; i++) {
    const now = start + t * i;
    end = now;
    member = [];
    for (let j = timetable.length - 1; j >= 0; j--) {
      if (timetable[j] <= now) member.push(timetable.pop());
      else break;
      if (member.length === m) break;
    }
  }
  if (member.length < m) ans = end;
  else ans = member.pop() - 1;
  let hh = ~~(ans / 60);
  let mm = ans % 60;
  return (hh < 10 ? '0' + hh : hh) + ':' + (mm < 10 ? '0' + mm : mm);
}

console.log(solution(1, 1, 5, ['08:00', '08:01', '08:02', '08:03'])); // "09:00"
console.log(solution(2, 10, 2, ['09:10', '09:09', '08:00'])); // "09:09"
console.log(solution(2, 1, 2, ['09:00', '09:00', '09:00', '09:00'])); // "08:59"
console.log(solution(1, 1, 5, ['00:01', '00:01', '00:01', '00:01', '00:01'])); // "00:00"
console.log(solution(1, 1, 1, ['23:59'])); // "09:00"
console.log(
  solution(10, 60, 45, [
    '23:59',
    '23:59',
    '23:59',
    '23:59',
    '23:59',
    '23:59',
    '23:59',
    '23:59',
    '23:59',
    '23:59',
    '23:59',
    '23:59',
    '23:59',
    '23:59',
    '23:59',
    '23:59',
  ])
); // "18:00"
