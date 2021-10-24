// https://programmers.co.kr/learn/courses/30/lessons/42885

function solution(people, limit) {
  people.sort((a, b) => b - a);
  const queue = [people.pop()];
  for (let i = 0; i < people.length; i++) {
    if (people[i] + queue[0] <= limit) queue.pop();
    if (!queue.length) queue.push(people.pop());
  }
  return people.length + queue.length;
}

console.log(solution([70, 50, 80, 50], 100)); // 3
// console.log(solution([70, 80, 50], 100)); // 3
