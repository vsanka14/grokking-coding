// Problem Statement #
// Find the minimum depth of a binary tree. The minimum depth is the number of nodes along the shortest path from the root node to the nearest leaf node.
const Deque = require('collections/deque'); //http://www.collectionsjs.com

class TreeNode {

    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null; 
    }
  };
  
  
  const find_minimum_depth = function(root) {
    const result = [];
    if(!root) return result;
    const queue = new Deque();
    queue.push(root);
    let leafNodeFound = false;
    let depth = 0;
    while(queue.length > 0) {
        const queueSize = queue.length;
        for(let i=0; i<queueSize; i++) {
            const curretNode = queue.shift();
            if(curretNode.left) queue.push(curretNode.left);
            if(curretNode.right) queue.push(curretNode.right);
            if(!curretNode.left && !curretNode.right) {
                leafNodeFound = true;
                break;
            }
        }
        depth++;
        if(leafNodeFound) return depth;
    }
    return -1;
  };
  
  
  
  var root = new TreeNode(12)
  root.left = new TreeNode(7)
  root.right = new TreeNode(1)
  root.right.left = new TreeNode(10)
  root.right.right = new TreeNode(5)
  console.log(`Tree Minimum Depth: ${find_minimum_depth(root)}`)
  root.left.left = new TreeNode(9)
  root.right.left.left = new TreeNode(11)
  console.log(`Tree Minimum Depth: ${find_minimum_depth(root)}`)
  