// https://programmers.co.kr/learn/courses/30/lessons/60059

function solution(key, lock) {
  const keyLen = key.length;
  const board = makeBoard(lock, keyLen);

  for (let i = 0; i < 4; i++) {
    key = rotate(key);

    for (let j = 0; j <= board.length - keyLen; j++) {
      for (let k = 0; k <= board.length - keyLen; k++) {
        const copy_board = board.map((arr) => arr.slice());
        for (let l = 0; l < keyLen; l++) {
          for (let m = 0; m < keyLen; m++) {
            copy_board[j + l][k + m] += key[l][m];
          }
        }
        if (isCheck(copy_board, keyLen, lock.length)) return true;
      }
    }
  }

  return false;
}

const rotate = (key) => {
  return key.map((_, idx) => {
    const rest = [];
    for (let i = key.length - 1; i >= 0; i--) rest.push(key[i][idx]);
    return rest;
  });
};

const makeBoard = (lock, keyLen) => {
  const blocks = lock.length + 2 * keyLen - 2;

  return new Array(blocks).fill().map((_, idx) => {
    const div = (blocks - lock.length) / 2;
    if (idx >= div && idx < div + lock.length) {
      const fb = new Array(div).fill(0);
      return [...fb, ...lock[idx - div], ...fb];
    }
    return new Array(blocks).fill(0);
  });
};

const isCheck = (board, keyLen, lockLen) => {
  const start = keyLen - 1;
  const last = start + lockLen;

  for (const outer of board.slice(start, last)) {
    for (const inner of outer.slice(start, last)) {
      if (inner !== 1) return false;
    }
  }
  return true;
};

console.log(
  solution(
    [
      [0, 0, 0],
      [1, 0, 0],
      [0, 1, 1],
    ],
    [
      [1, 1, 1],
      [1, 1, 0],
      [1, 0, 1],
    ]
  )
); // true
