
class Node {
    constructor(value, next) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head;
        this.length = 0;
    }
    append(value) {
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode; 
        this.length++;
    }
    prepend(value) {
        const newNode = new Node(value)
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
    }
    printList() {
        const array = []
        let currentNode = this.head;
        while (currentNode !== null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array;
    }
    insert(value, key) {
        if (key >= this.length) {
            return this.append(value);
        }
        const newNode = new Node(value);
        let leader = this.traversal(key - 1);
        let holderPointer = leader.next;
        leader.next = newNode;
        newNode.next = holderPointer;
    }
    traversal(key) {
        let counter = 0;
        let currentNode = this.head;
        while (counter !== key) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }
    delete() {
        this.head = this.head.next;
    }
}

const linkedList = new LinkedList(20);
linkedList.append(43);
linkedList.prepend(22);
linkedList.prepend(21); 
linkedList.insert(25,2); 
linkedList.delete(); 
console.log(linkedList.printList());