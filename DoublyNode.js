const Node = require('./Node');

class DoublyNode extends Node {
    constructor(value) {
        super(value);
        this.prev = null;
    }
}

module.exports = DoublyNode;