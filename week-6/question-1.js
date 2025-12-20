
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
    height() {
        const calculateHeight = (node) => { 
            if (node === null) {
                return 0;
            }
            const leftHeight = calculateHeight(node.left);  //   1  2
            const rightHeight = calculateHeight(node.right); //  0  
            return Math.max(leftHeight, rightHeight) + 1;
        }
        return calculateHeight(this.root);
    }
}

const tree = new BinaryTree();
tree.insert(9);
tree.insert(21);
tree.insert(15);
tree.insert(25);
console.log(tree.height());
