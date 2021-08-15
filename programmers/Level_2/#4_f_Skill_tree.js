// https://programmers.co.kr/learn/courses/30/lessons/49993

const solution = (skill, skill_trees) => {
  let newArr = skill.split(''),
    str = 0,
    count = 0;
  for (let i = 0; i < skill_trees.length; i++) {
    str = skill_trees[i]
      .split('')
      .filter((element) => newArr.includes(element))
      .join('');
    if (str === skill.substring(0, str.length)) {
      count++;
    }
  }
  return count;
};

console.log(solution('CBD', ['BACDE', 'CBADF', 'AECB', 'BDA'])); // 2
