// https://programmers.co.kr/learn/courses/30/lessons/42586

const solution = (progresses, speeds) => {
  let arr = [],
    ans = [1];
  for (let i = 0; i < progresses.length; i++) {
    if (arr.length) {
      if (arr[arr.length - 1] < Math.ceil((100 - progresses[i]) / speeds[i])) {
        arr.push(Math.ceil((100 - progresses[i]) / speeds[i]));
        ans.push(1);
      } else {
        ans[ans.length - 1] += 1;
      }
    } else {
      arr.push(Math.ceil((100 - progresses[i]) / speeds[i]));
    }
  }
  return ans;
};

console.log(solution([93, 30, 55], [1, 30, 5])); // [2, 1]
console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1])); // [1, 3, 2]
