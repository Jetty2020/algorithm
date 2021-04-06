// 문제 설명

// 행렬의 덧셈은 행과 열의 크기가 같은 두 행렬의 같은 행, 같은 열의 값을 서로 더한 결과가 됩니다.
// 2개의 행렬 arr1과 arr2를 입력받아, 행렬 덧셈의 결과를 반환하는 함수, solution을 완성해주세요.

const solution = (arr1, arr2) => {
  let ans = [[]];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr1[i].length; j++) {
      ans[i].push(arr1[i][j] + arr2[i][j]);
    }
    ans.push([]);
  }
  ans.pop();

  return ans;
};

//Better
const solution2 = (A, B) => {
  return A.map((a, i) => a.map((b, j) => b + B[i][j]));
};

console.log(
  solution2(
    [
      [1, 2],
      [2, 3],
    ],
    [
      [3, 4],
      [5, 6],
    ]
  )
); //[[4, 6], [7, 9]]
console.log(solution2([[1], [2]], [[3], [4]])); //[[4] ,[6]]
