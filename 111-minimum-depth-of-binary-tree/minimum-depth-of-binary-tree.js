/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
    // Base case: If the tree is empty
    if (!root) return 0;

    // If the left subtree is null, recur on the right subtree
    if (!root.left) return minDepth(root.right) + 1;
    // If the right subtree is null, recur on the left subtree
    if (!root.right) return minDepth(root.left) + 1;

    // If both left and right are present, find the minimum depth of both subtrees
    return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
};