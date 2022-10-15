class TreeNode {
  constructor(value) {
    this.value = value; // node value
    this.left = null; //left pointer
    this.right = null; //right pointer
  }
}

class BinarySearchTree {
  constructor() {
    //root pointer
    this.root = null;
  }

  isEmpty() {
    return this.root === null;
  }

  insert(value) {
    const node = new TreeNode(value);
    if (this.isEmpty()) {
      this.root = node;
    } else {
      this.insertNode(this.root, node);
    }

    return value;
  }

  insertNode(root, node) {
    if (node.value < root.value) {
      if (root.left === null) {
        root.left = node;
      } else {
        this.insertNode(root.left, node);
      }
    } else {
      if (root.right === null) {
        root.right = node;
      } else {
        this.insertNode(root.right, node);
      }
    }
  }

  search(root, value) {
    if (!root) {
      return false;
    } else {
      if (root.value === value) {
        return true;
      } else if (value < root.value) {
        return this.search(root.left, value);
      } else {
        return this.search(root.right, value);
      }
    }
  }

  preOrder(root) {
    if (root) {
      console.log(root.value); //read node value
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
  }

  inOrder(root) {
    if (root) {
      this.inOrder(root.left);
      console.log(root.value); //read node value
      this.inOrder(root.right);
    }
  }
  
  postOrder(root) {
    if (root) {
      this.postOrder(root.left);
      this.postOrder(root.right);
      console.log(root.value); //read node value
    }
  }

  levelOrder() {
    let queue = [];
    queue.push(this.root);
    while (queue.length) {
      let curr = queue.shift();
      console.log(curr.value);
      if (curr.left) {
        queue.push(curr.left);
      }
      if (curr.right) {
        queue.push(curr.right);
      }
    }
  }

  min(root) {
    if (!root.left) {
      return root.value;
    } else {
      return this.min(root.left);
    }
  }

  max(root) {
    if (!root.right) {
      return root.value;
    } else {
      return this.max(root.right);
    }
  }

  delete(value) {
    this.root = this.deleteNode(this.root, value);
  }

  deleteNode(root, value) {
    if (root === null) {
      return root;
    }

    if (root.value > value) {
      root.left = this.deleteNode(root.left, value);
    } else if (root.value < value) {
      root.right = this.deleteNode(root.right, value);
    } else {
      if (!root.left && !root.right) {
        return null;
      }
      if (!root.left) {
        return root.right;
      } else if (!root.right) {
        return root.left;
      }

      root.value = this.min(root.right);
      root.right = this.deleteNode(root.right, root.value);
    }

    return root;
  }
}

const a = new TreeNode("a");
const b = new TreeNode("b");
const c = new TreeNode("c");
const d = new TreeNode("d");
const e = new TreeNode("e");
const f = new TreeNode("f");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

const breadthFirstTraversal = (root) => {
  const queue = [root];

  while (queue.length > 0) {
    const curr = queue.shift();
    console.log(curr.value);

    if (curr.left) queue.push(curr.left);
    if (curr.right) queue.push(curr.right);
  }
};

const depthFirstTraversal = (root) => {
  const stack = [root];

  while (stack.length > 0) {
    let curr = stack.pop();
    console.log(curr.value);

    if (curr.right) stack.push(curr.right);
    if (curr.left) stack.push(curr.left);
  }
};

const bfs = (root, target) => {
  const queue = [root];
  let result = [];

  while (queue.length > 0) {
    const curr = queue.shift();
    if (curr.value === target) {
      //  console.log(true);
      result.push(curr.value);
    }
    // console.log(curr.value);

    if (curr.left) queue.push(curr.left);
    if (curr.right) queue.push(curr.right);
  }

  console.log(result);
};

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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return [];

  let result = [];
  const queue = [root];

  console.log(queue.length);

  while (queue.length > 0) {
    let queueLength = queue.length;
    console.log(queue.length);

    let currLevel = [];

    for (let index = 0; index < queueLength; index++) {
      let curr = queue.shift();

      if (curr?.left) queue.push(curr.left);
      if (curr?.right) queue.push(curr.right);
      currLevel.push(curr.val);
    }

    result.push(currLevel);
  }

  return result;
};

console.log(levelOrder([3, 9, 20, null, null, 15, 7]));

// breadthFirstTraversal(a);
// console.log("---------------");
// depthFirstTraversal(a);
bfs(a, "e"); //true
bfs(a, "z"); //false

// const bst = new BinarySearchTree();
// console.log("tree is empty:", bst.isEmpty());

// console.log(bst.insert(10));
// console.log(bst.insert(5));
// console.log(bst.insert(15));
// console.log(bst.insert(3));
// console.log("done");
// console.log(bst.insert(7));
// console.log("tree is empty:", bst.isEmpty());

// console.log(bst.search(bst.root, 10));
// console.log(bst.search(bst.root, 5));
// console.log(bst.search(bst.root, 15));
// console.log(bst.search(bst.root, 20));

// bst.postOrder(bst.root);
// console.log("-----level Order --------");
// bst.levelOrder();
// console.log("-----max value --------");
// console.log(bst.max(bst.root));

// console.log("-----min value --------");

// console.log(bst.min(bst.root));

// console.log("-----regex reesult --------");

// let regex = /<[\w|\s]{1,}>/g;
// let testString =
//   "I will fix <this is not working> now today and sometimes <okay this is it>.";
// let newString = testString.replaceAll(regex, "");
// console.log(newString);

// bst.levelOrder();
// bst.delete(10);
// bst.levelOrder();
