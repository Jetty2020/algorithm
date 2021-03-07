// Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.

// Example 1:
// Input: l1 = [1,2,4], l2 = [1,3,4]
// Output: [1,1,2,3,4,4]

// Example 2:
// Input: l1 = [], l2 = []
// Output: []

// Example 3:
// Input: l1 = [], l2 = [0]
// Output: [0]

let mergeTwoLists = function(l1, l2) {
  var mergedHead = { val : -1, next : null },
      crt = mergedHead;
  while(l1 && l2) {
      if(l1.val > l2.val) {
          crt.next = l2;
          l2 = l2.next;
      } else {
          crt.next = l1;
          l1 = l1.next;
      }
      crt = crt.next;
  }
  crt.next = l1 || l2;
  
  return mergedHead.next;
};

console.log(mergeTwoLists([1, 2, 3], [6, 3, 8]));
