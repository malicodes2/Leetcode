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
// var goodNodes = function (root) {
//     const dfs = (node, maxVal) => {
//         if (!node) {
//             return 0;
//         }

//         let res = node.val >= maxVal ? 1 : 0;
//         maxVal = Math.max(maxVal, node.val);
//         res += dfs(node.left, maxVal);
//         res += dfs(node.right, maxVal);
//         return res;
//     }
//     return dfs(root, root.val);
// };

const goodNodes = (root) => {
    let res = 0;
    let q = new Queue();
    q.push([root, -Infinity]);

    while(!q.isEmpty()) {
        let [node, maxVal] = q.pop();
        if(node.val >= maxVal) {
            res++;
        }
        if(node.left){
            q.push([node.left, Math.max(maxVal, node.val)])
        }
        if(node.right){
            q.push([node.right, Math.max(maxVal, node.val)])
        }
    }
    return res;
};