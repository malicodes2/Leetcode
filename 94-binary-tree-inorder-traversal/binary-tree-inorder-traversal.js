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
 * @return {number[]}
 */
var inorderTraversal = function (root) {
    let res = [];
    
    const inorder = (curr) => {
        if (!curr) {
            return null;
        }

        inorder(curr.left);
        res.push(curr.val);
        inorder(curr.right);
    }
    inorder(root);
    return res;
};