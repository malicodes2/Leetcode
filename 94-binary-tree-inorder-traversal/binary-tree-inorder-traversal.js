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
    let visited = [];
    let cur = root;

    while (cur || visited.length > 0) {
        while (cur) {
            visited.push(cur);
            cur = cur.left;
        }

        cur = visited.pop();
        res.push(cur.val)
        cur = cur.right;
    }
    return res;
};