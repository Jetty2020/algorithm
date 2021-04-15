// https://leetcode.com/problems/longest-common-prefix/

const longestCommonPrefix = (strs) => {
  let ans = [],
    i = 0;
  while (1) {
    if (check(strs, 0, i)) {
      ans.push(strs[0][i])
    } else break;
    i++;
  }
  // console.log(1)
  return ans.join('');
};

const check = (arr, index, position) => {
  if (arr[index][position] === arr[index + 1][position]) {
    return index+2 === arr.length ? true : check(arr, index + 1, position);
  } else {
    return false;
  }
};

console.log(longestCommonPrefix(['flower', 'flow', 'flight'])); //"fl"
console.log(longestCommonPrefix(['dog', 'racecar', 'car'])); //""
