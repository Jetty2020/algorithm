// Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

// Example 1:
// Input: root = [1,2,2,3,4,4,3]
// Output: true

// Example 2:
// Input: root = [1,2,2,null,3,null,3]
// Output: false

let isSymmetric = function (root) {
  if (!root) return true;
  // Check if tree s & t are mirroring each other
  function isMirror(s, t) {
    let q1 = [s], q2 = [t];
    // Perform breadth-first search
    while (q1.length > 0 || q2.length > 0) {
        // Dequeue
        let n1 = q1.shift(), n2 = q2.shift();
        // Two null nodes, let's continue
        if (!n1 && !n2) continue;
        // Return false as long as there is a mismatch
        if (!n1 || !n2 || n1.val !== n2.val) return false;
        // Scan tree s from left to right
        // and scan tree t from right to left
        q1.push(n1.left); q1.push(n1.right);
        q2.push(n2.right); q2.push(n2.left);
    }
    return true;
}
  return isMirror(root.left, root.right);
};

console.log(isSymmetricLeftRight([1, 2, 2, null, 3, null, 3]));
