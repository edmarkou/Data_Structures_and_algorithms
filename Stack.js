const Node = require('./Node');

class Stack {
    constructor(value) {
        this.top = new Node(value);
        this.length = 1;
    }

    push(value) {
        const newNode = new Node(value);
        if (this.length === 0) {
            this.head = newNode;
        } else {
            newNode.next = this.top;
            this.top = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        if (this.length === 0) return undefined;
        let temp = this.top;
        this.top = this.top.next;
        temp.next = null;
        this.length--;
        return temp;
    }
}

module.exports = Stack;