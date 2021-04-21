// https://leetcode.com/problems/pascals-triangle/

const generate = (num) => {
  let pascal = [];
    for (let i = 0; i < num; i++) {
        pascal[i] = [];
        pascal[i][0] = 1;
        for (let j = 1; j < i; j++) {
            pascal[i][j] = pascal[i-1][j-1] + pascal[i-1][j]
        }
        pascal[i][i] = 1;
    }
    return pascal;
};

console.log(generate(5)); //[[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
console.log(generate(1)); //[[1]]
