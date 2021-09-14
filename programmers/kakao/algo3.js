//

function solution(fees, records) {
  const parkTime = [];
  const closed = 1439;
  const newRec = records
    .map((ele) => {
      const arr = ele.split(' ');
      const time = arr[0].split(':');
      const timeToM = time[0] * 60 + time[1] * 1;
      return [timeToM, arr[1], arr[2]];
    })
    .sort((a, b) => {
      return a[1] < b[1] ? -1 : a[1] > b[1] ? 1 : 0;
    });
  for (let i = 0; i < records.length; i++) {
    if (
      newRec[i][2] === 'IN' &&
      (!newRec[i + 1] || newRec[i + 1][2] === 'IN')
    ) {
      if (newRec[i - 1] && newRec[i - 1][1] === newRec[i][1]) {
        parkTime[parkTime.length - 1] += closed - newRec[i][0];
      } else {
        parkTime.push(closed - newRec[i][0]);
      }
    } else if (newRec[i][2] === 'OUT') {
      if (newRec[i - 2] && newRec[i - 2][1] === newRec[i][1]) {
        parkTime[parkTime.length - 1] += newRec[i][0] - newRec[i - 1][0];
      } else {
        parkTime.push(newRec[i][0] - newRec[i - 1][0]);
      }
    }
  }
  const answer = Array(parkTime.length).fill();
  for (let j = 0; j < parkTime.length; j++) {
    if (parkTime[j] <= fees[0]) answer[j] = fees[1];
    else {
      answer[j] = fees[1] + Math.ceil((parkTime[j] - fees[0])/fees[2]) * fees[3];
    }
  }
  return answer;
}

console.log(
  solution(
    [180, 5000, 10, 600],
    [
      '05:34 5961 IN',
      '06:00 0000 IN',
      '06:34 0000 OUT',
      '07:59 5961 OUT',
      '07:59 0148 IN',
      '18:59 0000 IN',
      '19:09 0148 OUT',
      '22:59 5961 IN',
      '23:00 5961 OUT',
    ]
  )
); // [14600, 34400, 5000]
console.log(
  solution(
    [120, 0, 60, 591],
    [
      '16:00 3961 IN',
      '16:00 0202 IN',
      '18:00 3961 OUT',
      '18:00 0202 OUT',
      '23:58 3961 IN',
    ]
  )
); // [0, 591]
console.log(solution([1, 461, 1, 10], ['00:00 1234 IN'])); // [14841]
