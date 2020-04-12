// Problem Statement #
// Given a binary tree, populate an array to represent its zigzag level order traversal. You should populate the values of all nodes of the first level from left to right, then right to left for the next level and keep alternating in the same manner for the following levels.
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
    let flip = false;
    queue.push(root);
    while(queue.length > 0) {
        const queueSize = queue.length;
        const levelArr = [];
        for(let i=0; i<queueSize; i++) {
            const currentNode = queue.shift();
            if(currentNode.left) queue.push(currentNode.left);
            if(currentNode.right) queue.push(currentNode.right);
            if(flip) levelArr.unshift(currentNode.value);
            else levelArr.push(currentNode.value);
        }
        result.push(levelArr);
        flip = !flip;
    }
    return result;
  };
  
  
  var root = new TreeNode(12)
  root.left = new TreeNode(7)
  root.right = new TreeNode(1)
  root.left.left = new TreeNode(9)
  root.right.left = new TreeNode(10)
  root.right.right = new TreeNode(5)
  root.right.left.left = new TreeNode(20)
  root.right.left.right = new TreeNode(17)
  console.log(`Zigzag traversal: ${traverse(root)}`)
  