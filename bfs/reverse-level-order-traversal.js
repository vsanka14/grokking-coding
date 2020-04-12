const Deque = require('collections/deque'); //http://www.collectionsjs.com

class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

function traverse(root) {
    const result = [];
    if(!root) return result;
    const queue = new Deque();
    queue.push(root);
    while(queue.length > 0) {
        const queueSize = queue.length;
        const levelArr = [];
        for(let i=0; i<queueSize; i++) {
            const currentNode = queue.shift();
            if(currentNode.left) queue.push(currentNode.left);
            if(currentNode.right) queue.push(currentNode.right);
            levelArr.push(currentNode.val);
        }
        result.unshift(levelArr);
    }
    return result;
}

const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
console.log(`Reverse level order traversal: ${traverse(root).toArray()}`);