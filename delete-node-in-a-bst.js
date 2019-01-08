/**
* Definition for a binary tree node.
* function TreeNode(val) {
*     this.val = val;
*     this.left = this.right = null;
* }
*/
/**
* @param {TreeNode} root
* @param {number} key
* @return {TreeNode}
*/
var deleteNode = function(root, key) {
  if (root === null) return null;
  if (root.val > key) {
      root.left =  deleteNode(root.left, key)
  } else if (root.val < key) {
      root.right =  deleteNode(root.right, key)
  } else {
      if (!root.left) {
          return root.right;
      } else if (!root.right) {
          return root.left;
      } else {
          let next = root.right;
          while(next.left) next = next.left;
          next.left = root.left;
          return root.right;
      }
  }
  return root
};