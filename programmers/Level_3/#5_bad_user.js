// https://programmers.co.kr/learn/courses/30/lessons/64064

function solution(user_id, banned_id) {
  const perms = [];
  dfs(user_id, banned_id, [], perms);
  return new Set(perms.map((perm) => perm.sort().join(''))).size;
}

const dfs = (user_id, banned_id, bans, arr) => {
  if (banned_id.length === 0) arr.push(bans);
  else {
    for (let i = 0; i < user_id.length; i++) {
      if (match(user_id[i], banned_id[0])) {
        dfs(
          [...user_id.slice(0, i), ...user_id.slice(i + 1)],
          banned_id.slice(1),
          [...bans, user_id[i]],
          arr
        );
      }
    }
  }
};

const match = (user_id, banned_id) => {
  const pattern = banned_id.replace(/\*/g, '.');
  const regex = new RegExp('^(' + pattern + ')$');
  return regex.test(user_id);
};

console.log(
  solution(['frodo', 'fradi', 'crodo', 'abc123', 'frodoc'], ['fr*d*', 'abc1**'])
); // 2
// console.log(
//   solution(
//     ['frodo', 'fradi', 'crodo', 'abc123', 'frodoc'],
//     ['*rodo', '*rodo', '******']
//   )
// ); // 2
// console.log(
//   solution(
//     ['frodo', 'fradi', 'crodo', 'abc123', 'frodoc'],
//     ['fr*d*', '*rodo', '******', '******']
//   )
// ); // 3
