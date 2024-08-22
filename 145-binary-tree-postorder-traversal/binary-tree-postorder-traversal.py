# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def postorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        if(not root):
            return []
        
        stackOne = []
        stackTwo = []
        postOrder = []

        stackOne.append(root)
        while(stackOne):
            root = stackOne.pop()
            stackTwo.append(root.val)
            if(root.left):
                stackOne.append(root.left)
            if(root.right):
                stackOne.append(root.right)            
        while(stackTwo):
            num = stackTwo.pop()
            postOrder.append(num)
        return postOrder