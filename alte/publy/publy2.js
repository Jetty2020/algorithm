//

function solution(price) {
  let ans = Array(price.length).fill(-1);
  let arr = [];
  price.forEach((value, index) => {
    arr.push([value, index]);
  });
  arr.sort((a, b) => a[0] - b[0]);

  for (let i = 0; i < price.length; i++) {
    for (let j = i + 1; j < price.length; j++) {
      if (arr[i][1] < arr[j][1] && arr[i][0] < arr[j][0]) {
        ans[arr[i][1]] = arr[j][1] - arr[i][1];
        console.log(arr[i][1], arr[j][1]);
        break;
      }
    }
  }

  return ans;
}

console.log(solution([4, 1, 4, 7, 6])); // [3,1,1,-1,-1]
// console.log(solution([13, 7, 3, 7, 5, 16, 12])); // [5,4,1,2,1,-1,-1]
