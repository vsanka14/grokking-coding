// Right View of a Binary Tree (easy) #
// Given a binary tree, return an array containing nodes in its right view. The right view of a binary tree is the set of nodes visible when the tree is seen from the right side.
const Deque = require('collections/deque'); //http://www.collectionsjs.com

class TreeNode {

    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null; 
    }
  };
  
  const tree_right_view = function(root) {
    result = [];
    if(!root) return result;
    const queue = new Deque();
    queue.push(root);
    while(queue.length > 0) {
        const queueSize = queue.length;
        for(let i=0; i<queueSize; i++) {
            const currentNode = queue.shift();
            if(currentNode.left) queue.push(currentNode.left);
            if(currentNode.right) queue.push(currentNode.right);
            if(i===queueSize-1) {
                result.push(currentNode.value);
            }
        }
    }
    // TODO: Write your code here
    return result;
  };
  
  
  var root = new TreeNode(12);
  root.left = new TreeNode(7);
  root.right = new TreeNode(1);
  root.left.left = new TreeNode(9);
  root.right.left = new TreeNode(10);
  root.right.right = new TreeNode(5);
  root.left.left.left = new TreeNode(3);
  console.log("Tree right view: " + tree_right_view(root))
  