
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
    ZigzagTraversal() {
        let array = [];
        const largestEelement = (node) => {
            if (node === null) {
                return;
            }
            array.push(node.value);
            largestEelement(node.right);
            largestEelement(node.left);     
        }
        largestEelement(this.root);
        return array;
    }

}

const tree = new BinaryTree();
tree.insert(10);
tree.insert(5);
tree.insert(1);
tree.insert(7);
tree.insert(40);
tree.insert(50);
console.log(tree.ZigzagTraversal());
