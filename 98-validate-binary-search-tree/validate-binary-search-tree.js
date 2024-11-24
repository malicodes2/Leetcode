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
 * @return {boolean}
 */
// var isValidBST = function (root) {
//     //DFS
//     const valid = (node, left, right) => {
//         if (node == null) {
//             return true;
//         }
//         if (!(node.val < right && node.val > left)) {
//             return false;
//         }

//         return valid(node.left, left, node.val) && valid(node.right, node.val, right)
//     }
//     return valid(root, -Infinity, Infinity);
// };



var isValidBST = function (root) {
    if (root === null) {
        return true;
    }

    const queue = new Queue([[root, -Infinity, Infinity]]);

    while (queue.size() > 0) {
        const [node, left, right] = queue.pop();

        if (!(left < node.val && node.val < right)) {
            return false;
        }
        if (node.left) {
            queue.push([node.left, left, node.val]);
        }
        if (node.right) {
            queue.push([node.right, node.val, right]);
        }
    }

    return true;
}