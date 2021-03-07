// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
 
// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false
// Example 4:

// Input: s = "([)]"
// Output: false
// Example 5:

// Input: s = "{[]}"
// Output: true

// /**
//  * @param {string} s
//  * @return {boolean}
//  */
const isValid = function(s) {
  if (s === "") return true;

  const openP = ['(', '[', '{']
  const closeP = [')', ']', '}']
  let curP;
  let pStack = [];

  for (let p of s) {
    if (closeP.includes(p)) {
      curP = pStack.pop();
      if (!curP || curP !== openP[closeP.indexOf(p)]) return false;
    } else {
      pStack.push(p);
    }
  }

  return pStack.length === 0;
};

console.log(isValid("(){}{[()]}{}"));
console.log(isValid("{[(])}"));