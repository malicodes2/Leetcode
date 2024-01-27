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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function (root, subRoot) {

    const sameTree = (root, subroot) => {
        if (!root && !subroot) {
            return true;
        }
        if (root && subroot && root.val == subroot.val) {
            return sameTree(root.left, subroot.left) && sameTree(root.right, subroot.right);
        }
        return false;
    }

    if (!root) {
        return false;
    }
    if (!subRoot) {
        return true;
    }
    if (sameTree(root, subRoot)) {
        return true;
    }

    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot)
};