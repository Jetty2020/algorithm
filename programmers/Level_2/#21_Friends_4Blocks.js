// https://programmers.co.kr/learn/courses/30/lessons/17679

function solution(rows, cols, board) {
  function toLower(num) {
    if (num < 97) return num + 32;
    return num;
  }
  const matrix = Object.keys(board[0]).map((x) =>
    board.map((y) => y[x].charCodeAt(0)).reverse()
  );
  let after = cols * rows,
    before;
  while (after !== before) {
    for (let i = 0; i < cols - 1; i++) {
      for (let j = 0; j < rows - 1; j++) {
        before = after;
        if (matrix[i][j] === undefined) continue;
        const current = toLower(matrix[i][j]);
        if (
          current === toLower(matrix[i + 1][j]) &&
          current === toLower(matrix[i][j + 1]) &&
          current === toLower(matrix[i + 1][j + 1])
        ) {
          matrix[i][j] =
            matrix[i + 1][j] =
            matrix[i][j + 1] =
            matrix[i + 1][j + 1] =
              current;
        }
      }
    }
    after = 0;
    matrix.forEach((item, index) => {
      matrix[index] = item.filter((ele) => ele < 97);
      after += matrix[index].length;
    });
  }
  return cols * rows - after;
}

console.log(solution(4, 5, ['CCBDE', 'AAADE', 'AAABF', 'CCBBF'])); // 14
console.log(
  solution(6, 6, ['TTTANT', 'RRFACC', 'RRRFCC', 'TRRRAA', 'TTMMMF', 'TMMTTJ'])
); // 15
