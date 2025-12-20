
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
 arrayToBST(array) {
        for (let i = 0; i < array.length; i++) {
            this.insert(array[i]);
        }
    }

}

const tree = new BinaryTree();
console.log(tree.arrayToBST([15,10,20,8,12,17,25]));
