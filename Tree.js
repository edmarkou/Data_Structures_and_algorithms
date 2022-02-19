const Node = require("./TreeNode");

class Tree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);
        if (this.root === null) this.root = newNode;
        else {
            let temp = this.root;
            while (true) {
                // go left
                if (newNode.value < temp.value) {
                    if (temp.left === null) {
                        temp.left = newNode;
                        return this.root;
                    }
                    temp = temp.left;
                } // go right
                else if (newNode.value > temp.value) {
                    if (temp.right === null) {
                        temp.right = newNode;
                        return this.root
                    }
                    temp = temp.right;
                } else {
                    return undefined;
                }
            }
        }
    }

    contains(value) {
        if (this.root === null) return false;
        else {
            let temp = this.root;
            while (temp) {
                if (value < temp.value) temp = temp.left;
                else if (value > temp.value) temp = temp.right;
                else return true;
            }
            return false;
        }
    }

    minValueNode(value) {
        let currentNode = this.root;
        while (value > currentNode.value && currentNode.right !== null) {
            currentNode = currentNode.right;
        }
        while (currentNode.left !== null) {
            currentNode = currentNode.left;
        }
        return currentNode;
    }

    BFS() {
        let currentNode = this.root;
        const queue = [];
        const results = [];
        queue.push(currentNode);
        while (queue.length) {
            currentNode = queue.shift();
            results.push(currentNode.value);
            if (currentNode.left) queue.push(currentNode.left);
            if (currentNode.right) queue.push(currentNode.right);
        }
        return results;
    }

    DFS_preorder() {
        const results = [];
        function traverse(currentNode) {
            results.push(currentNode.value);
            if (currentNode.left) traverse(currentNode.left);
            if (currentNode.right) traverse(currentNode.right);
        };
        traverse(this.root);
        return results;
    }

    DFS_postorder() {
        const results = [];
        function traverse(currentNode) {
            if (currentNode.left) traverse(currentNode.left);
            if (currentNode.right) traverse(currentNode.right);
            results.push(currentNode.value);
        };
        traverse(this.root);
        return results;
    }

    DFS_inorder() {
        const results = [];
        function traverse(currentNode) {
            if (currentNode.left) traverse(currentNode.left);
            results.push(currentNode.value);
            if (currentNode.right) traverse(currentNode.right);
        };
        traverse(this.root);
        return results;
    }
}

module.exports = Tree;