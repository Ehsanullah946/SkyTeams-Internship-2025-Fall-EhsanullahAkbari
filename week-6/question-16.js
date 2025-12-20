
class  Node {
    constructor(value) {
        this.left = null
        this.right= null
        this.value = value;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        const newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
        } else {
            let currentNode = this.root;
            while (true) {
                if (value < currentNode.value) {
                    if (!currentNode.left) {
                        currentNode.left = newNode;
                        return this;
                    }
                    currentNode = currentNode.left;
                } else {
                    if (!currentNode.right) {
                        currentNode.right = newNode;
                        return this;
                    }
                    currentNode = currentNode.right;
                }
            }
        }
    }
    boundaryTraversal() {
        const result = [];
        if (!this.root) {
            return result;
        }
        const addLeftBoundary = (node) => {
            let current = node.left;
            while (current) {
                if (!isLeaf(current)) {
                    result.push(current.value);
                }
                if (current.left) {
                    current = current.left;
                }
                else {
                    current = current.right;
                }
            }
        }
        const addLeaves = (node) => {
            if (isLeaf(node)) {
                result.push(node.value);
                return;
            }
            if (node.left) {
                addLeaves(node.left);
            }
            if (node.right) {
                addLeaves(node.right);
            }
        }
        const addRightBoundary = (node) => {
            let current = node.right;
            const temp = [];    
            while (current) {
                if (!isLeaf(current)) {
                    temp.push(current.value);
                }
                if (current.right) {
                    current = current.right;
                }
                else {
                    current = current.left;
                }   
            }
            for (let i = temp.length - 1; i >= 0; i--) {
                result.push(temp[i]);
            }
        }
        const isLeaf = (node) => {
            return !node.left && !node.right;
        }
        if (!isLeaf(this.root)) {
            result.push(this.root.value);
        }
        addLeftBoundary(this.root);
        addLeaves(this.root);
        addRightBoundary(this.root);
        return result;
    }

}

const tree = new BinaryTree();
tree.insert(10);
tree.insert(5);
tree.insert(1);
tree.insert(7);
tree.insert(40);
tree.insert(50);
console.log(tree.boundaryTraversal());

