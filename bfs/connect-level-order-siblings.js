const Deque = require('collections/deque'); //http://www.collectionsjs.com

class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
      this.next = null;
    }
  
    // level order traversal using 'next' pointer
    print_level_order() {
      console.log("Level order traversal using 'next' pointer: ");
      let nextLevelRoot = this;
      while (nextLevelRoot !== null) {
        let current = nextLevelRoot;
        nextLevelRoot = null;
        while (current != null) {
          process.stdout.write(`${current.val} `);
          if (nextLevelRoot === null) {
            if (current.left !== null) {
              nextLevelRoot = current.left;
            } else if (current.right !== null) {
              nextLevelRoot = current.right;
            }
          }
          current = current.next;
        }
        console.log();
      }
    }
  };
  
  const connect_level_order_siblings = function(root) {
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
            levelArr.push(currentNode);
        }
        for(let i=0; i<levelArr.length; i++) {
            if(levelArr[i+1]) {
                levelArr[i].next = levelArr[i+1];
            } else {
                levelArr[i].next = null;
            }
        }
        result.push(levelArr);
    }

  };
  
  
  var root = new TreeNode(12);
  root.left = new TreeNode(7);
  root.right = new TreeNode(1);
  root.left.left = new TreeNode(9);
  root.right.left = new TreeNode(10);
  root.right.right = new TreeNode(5);
  connect_level_order_siblings(root);
  
  root.print_level_order()
  