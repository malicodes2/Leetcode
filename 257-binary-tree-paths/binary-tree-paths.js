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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
    const ans = [];
    const t = [];
    const dfs = (node) => {
        if (!node) return;

        t.push(node.val);
        if (!node.left && !node.right) {
            ans.push(t.join('->'));
        } else {
            dfs(node.left);
            dfs(node.right);
        }
        t.pop();
    }

    dfs(root);
    return ans;
};