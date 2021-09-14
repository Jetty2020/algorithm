//

function solution(id_list, report, k) {
  const answer = Array(id_list.length).fill(0);
  const newRep = report
    .map((ele) => {
      const arr = ele.split(' ');
      return [id_list.indexOf(arr[0]), arr[1]];
    })
    .sort((a, b) => {
      return a[1] < b[1] ? -1 : a[1] > b[1] ? 1 : 0;
    });
  let count = 0;
  for (let i = 0; i < newRep.length; i++) {
    if (
      i === 0 ||
      !(newRep[i - 1][0] === newRep[i][0] && newRep[i - 1][1] === newRep[i][1])
    ) {
      answer[newRep[i][0]] += 1;
      if (i !== 0 && newRep[i - 1][1] !== newRep[i][1]) {
        if (count < k && count > 0) {
          deleteCount(answer, newRep, i, count);
        }
        count = 0;
      }
      count++;
    } else if (count < k && count > 0) {
      deleteCount(answer, newRep, i, count);
      count = 0;
    }
  }

  return answer;
}

function deleteCount(arr, newRep, n, count) {
  arr[newRep[n - 1][0]] -= 1;
  if (count - 1) deleteCount(arr, n - 1, count - 1);
}

console.log(
  solution(
    ['muzi', 'frodo', 'apeach', 'neo'],
    ['muzi frodo', 'apeach frodo', 'frodo neo', 'muzi neo', 'apeach muzi'],
    2
  )
); // [2,1,1,0]
console.log(
  solution(['con', 'ryan'], ['ryan con', 'ryan con', 'ryan con', 'ryan con'], 3)
); // [0,0]
