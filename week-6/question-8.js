
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
        printKItem(k) {
        let array = [];
        const nodeAtGivenDistance = (node) => {
            if (node === null) {
                return;
            } 
            if (k === 0) {
                array.push(node.value);
            } else {
                k--;
                nodeAtGivenDistance(node.left);
                nodeAtGivenDistance(node.right);
                k++; 
           }
        }
        nodeAtGivenDistance(this.root);
        return array;
    }
}

const tree = new BinaryTree();
tree.insert(9);
tree.insert(21);
tree.insert(15);
tree.insert(25);

