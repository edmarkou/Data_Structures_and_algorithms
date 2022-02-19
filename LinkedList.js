const Node = require('./Node');

class LinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = this.head;
        this.length = 1;
    }

    push(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        if (!this.head) {
            return undefined;
        } else {
            let temp = this.head;
            let prev = this.head;
            while (temp.next) {
                prev = temp;
                temp = temp.next;
            }
            this.tail = prev;
            this.tail.next = null;
            this.length--;
            if (this.length === 0) {
                this.head = null;
                this.tail = null;
            }
            return temp;
        }
    }

    shift() {
        if (!this.head) return undefined;
        let prev;
        prev = this.head;
        this.head = this.head.next;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
        prev.next = null;
        return prev;
    }

    unshift(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    get(index) {
        if (this.length <= index || index < 0) return undefined;

        let temp = this.head;
        for (let i = 0; i < index; i++) {
            temp = temp.next;
        }
        return temp;
    }

    set(index, value) {
        let temp = this.get(index);
        if (temp) {
            temp.value = value;
        }
        return !!temp;
    }

    insert(index, value) {
        if (index === 0) {
            this.unshift(value);
            return true;
        }
        else if (index === this.length) {
            this.push(value);
            return true;
        }
        else if (index < 0 || index > this.length) return false;

        const newNode = new Node(value);
        const temp = this.get(index - 1);
        newNode.next = temp.next;
        temp.next = newNode;
        this.length++;
        return true;
    }

    remove(index) {
        if (index >= this.length || index < 0) return undefined;
        else if (index === 0) return this.shift();
        else if (index === this.length - 1) return this.pop();

        let before = this.get(index - 1);
        let temp = before.next;
        before.next = temp.next;
        temp.next = null;
        this.length--;

        return temp;
    }

    reverse() {
        let temp = this.head;
        this.head = this.tail;
        this.tail = temp;
        let next = temp.next;
        let prev = null;
        for (let i = 0; i < this.length; i++) {
            next = temp.next;
            temp.next = prev;
            prev = temp;
            temp = next;
        }
        return this;
    }
}

module.exports = LinkedList;