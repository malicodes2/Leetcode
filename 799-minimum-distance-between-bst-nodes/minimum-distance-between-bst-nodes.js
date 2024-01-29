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
var minDiffInBST = function (root) {
    let res = [];
    const inorder = (root) => {
        if (root) {
            inorder(root.left);
            res.push(root.val);
            inorder(root.right);
        }
    }
    inorder(root)

    let diff = Number.MAX_SAFE_INTEGER;
    for (let i = 1; i < res.length; i++) {
        diff = Math.min(diff, res[i] - res[i - 1]);
    }
    return diff;
};