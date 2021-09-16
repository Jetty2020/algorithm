// https://programmers.co.kr/learn/courses/30/lessons/42579

function solution(genres, plays) {
  const answer = [];
  const hash = genres.reduce((acc, cur, idx) => {
    if (acc[cur]) {
      acc[cur].sum += plays[idx];
      acc[cur].list[idx] = plays[idx];
    } else
      acc[cur] = {
        sum: plays[idx],
        list: {
          [idx]: plays[idx],
        },
      };
    return acc;
  }, {});

  const sorted = Object.values(hash)
    .sort((a, b) => b.sum - a.sum)
    .map((el) => el.list);

  const indexs = sorted.map((list) =>
    Object.keys(list).sort((a, b) => list[b] - list[a])
  );

  indexs.forEach((genre) => {
    if (genre[0]) answer.push(+genre[0]);
    if (genre[1]) answer.push(+genre[1]);
  });

  return answer;
}

console.log(
  solution(
    ['classic', 'pop', 'classic', 'classic', 'pop'],
    [500, 600, 150, 800, 2500]
  )
); // [4, 1, 3, 0]
