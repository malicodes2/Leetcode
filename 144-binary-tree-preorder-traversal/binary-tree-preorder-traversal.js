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
var preorderTraversal = function (root) {
    let curr = root;
    let res = [];
    let visited = [];

    while (curr || visited.length > 0) {
        if (curr) {
            res.push(curr.val)
            visited.push(curr.right)
            curr = curr.left
        }
        else {
            curr = visited.pop()
        }
    }
    return res;
};