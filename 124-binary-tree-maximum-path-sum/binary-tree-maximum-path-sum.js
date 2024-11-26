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
var maxPathSum = function (root) {
    const res = [root.val];

    const dfs = (root) => {
        if (root === null) return 0;

        const leftMax = Math.max(dfs(root.left), 0);
        const rightMax = Math.max(dfs(root.right), 0);

        res[0] = Math.max(res[0], root.val + leftMax + rightMax);
        return root.val + Math.max(leftMax, rightMax);
    }
    dfs(root);
    return res[0];
};