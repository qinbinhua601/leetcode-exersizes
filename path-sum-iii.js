var su = 0
var count = 0

var helper = function(root, su, sum) {
  if (!root) {
    return
  }
  su += root.val
  if (su === sum) {
    count++
  }
  if (root.left) {
    helper(root.left, su, sum)
  }
  if (root.right) {
    helper(root.right, su, sum)
  }
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */
var pathSum = function(root, sum) {
  su = 0
  count = 0

  if (!root) {
    return 0
  }

  helper(root, 0, sum)

  if (root.left) {
    count = count + pathSum(root.left, sum)
  }
  if (root.right) {
    count = count + pathSum(root.right, sum)
  }

  return count
}
