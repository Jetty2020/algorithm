// https://programmers.co.kr/learn/courses/30/lessons/72414

function solution(play_time, adv_time, logs) {
  const pt = calculateTime(play_time);
  const at = calculateTime(adv_time);
  const times = new Array(pt).fill(0);

  logs.forEach((log) => {
    const [start, end] = log.split('-');
    const ws = calculateTime(start);
    const we = calculateTime(end);
    times[ws]++;
    times[we]--;
  });

  for (let i = 1; i <= pt; i++) times[i] += times[i - 1];

  for (let i = 1; i <= pt; i++) times[i] += times[i - 1];

  let sum = times[at - 1];
  let idx = 0;

  for (let i = at - 1; i < pt; i++) {
    if (sum < times[i] - times[i - at]) {
      sum = times[i] - times[i - at];
      idx = i - at + 1;
    }
  }

  return formatterTime(idx);
}

const calculateTime = (time) => {
  const HHMMSS = time.split(':');
  const amount = HHMMSS[0] * 3600 + HHMMSS[1] * 60 + HHMMSS[2] * 1;
  return amount;
};

const formatterTime = (time) => {
  let HH = (time / 3600) >> 0;
  let MM = ((time / 60) >> 0) % 60;
  let SS = time % 60;

  HH = HH > 9 ? HH : '0' + HH;
  MM = MM > 9 ? MM : '0' + MM;
  SS = SS > 9 ? SS : '0' + SS;

  return `${HH}:${MM}:${SS}`;
};

// console.log(
//   solution('02:03:55', '00:14:15', [
//     '01:20:15-01:45:14',
//     '00:40:31-01:00:00',
//     '00:25:50-00:48:29',
//     '01:30:59-01:53:29',
//     '01:37:44-02:02:30',
//   ])
// ); // "01:30:59"
console.log(
  solution('99:59:59', '25:00:00', [
    '69:59:59-89:59:59',
    '01:00:00-21:00:00',
    '79:59:59-99:59:59',
    '11:00:00-31:00:00',
  ])
); // "01:00:00"
// console.log(
//   solution('50:00:00', '50:00:00', [
//     '15:36:51-38:21:49',
//     '10:14:18-15:36:51',
//     '38:21:49-42:51:45',
//   ])
// ); // "00:00:00"
