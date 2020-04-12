// Problem Statement #
// Given a binary tree, populate an array to represent its level-by-level traversal. You should populate the values of all nodes of each level from left to right in separate sub-arrays.

const Deque = require('collections/deque'); //http://www.collectionsjs.com

class TreeNode {

    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null; 
    }
  };
  
  
  const traverse = function(root) {
    result = [];
    if(!root) return result;
    const queue = new Deque();
    queue.push(root);
    while(queue.length > 0) {
        let queueSize = queue.length;
        let levelArr = [];
        for(let i=0; i<queueSize; i++) {
            const currentNode = queue.shift();
            if(currentNode.left) queue.push(currentNode.left);
            if(currentNode.right) queue.push(currentNode.right);
            levelArr.push(currentNode.value);
        }
        result.push(levelArr);
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
  console.log(`Level order traversal: ${traverse(root)}`);
  
