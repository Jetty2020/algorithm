// https://leetcode.com/problems/reverse-vowels-of-a-string/

const reverseVowels = (s) => {
  let ans = s.split(''),
    vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'],
    temp = [];
  for (let i = 0; i < ans.length; i++) {
    if (vowels.includes(ans[i])) temp.push(ans[i]);
  }
  for (let i = 0; i < s.length; i++) {
    if (vowels.includes(ans[i])) ans[i] = temp.pop();
  }
  return ans.join('');
};

console.log(reverseVowels('hello')); // 'holle'
console.log(reverseVowels('leetcode')); // 'leotcede'
