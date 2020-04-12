// Problem Statement #
// Given a binary tree and a node, find the level order successor of the given node in the tree. The level order successor is the node that appears right after the given node in the level order traversal.
const Deque = require('collections/deque'); //http://www.collectionsjs.com

class TreeNode {

    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null; 
    }
  };
  
  
  const find_successor = function(root, key) {
    const result = [];
    if(!root) return result;
    const queue = new Deque();
    queue.push(root);
    let found = false;
    let successor = null;
    while(queue.length > 0) {
        const queueSize = queue.length;
        for(let i=0; i<queueSize; i++) {
            const currentNode = queue.shift();
            if(currentNode.left) queue.push(currentNode.left);
            if(currentNode.right) queue.push(currentNode.right);
            if(currentNode.val === key) {
                successor = queue.shift();
                found = true;
                break;
            }
        }
        if(found) break;
    }
    return successor;
  };
  
  
  var root = new TreeNode(12)
  root.left = new TreeNode(7)
  root.right = new TreeNode(1)
  root.left.left = new TreeNode(9)
  root.right.left = new TreeNode(10)
  root.right.right = new TreeNode(5)
  result = find_successor(root, 12)
  if (result != null)
    console.log(result.val)
  result = find_successor(root, 5)
  if (result != null)
    console.log(result.val)
  