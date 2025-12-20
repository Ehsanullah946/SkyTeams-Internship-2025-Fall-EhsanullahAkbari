
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
    inorderTraversalArray(array) {
        const buildBST = (arr, start, end) => {
            if (start > end) {
                return null;
            }
            let mid = Math.floor((start + end) / 2);
            const node = new Node(arr[mid]);
            node.left = buildBST(arr, start, mid - 1);
            node.right = buildBST(arr, mid + 1, end);
            return node;
        }
        this.root = buildBST(array, 0, array.length -1 );
        return this.root;
      }

}

const tree = new BinaryTree();
console.log(tree.inorderTraversalArray([8,10,12,15,17,20,25]));

