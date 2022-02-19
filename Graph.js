class Graph {
    constructor() {
        this.adjacensyList = {};
    }

    add(vertex) {
        if (!this.adjacensyList[vertex]) {
            this.adjacensyList[vertex] = [];
            return true;
        }
        return false;
    }

    addEdge(vertex1, vertex2) {
        if (this.adjacensyList[vertex1] && this.adjacensyList[vertex2]) {
            this.adjacensyList[vertex1].push(vertex2);
            this.adjacensyList[vertex2].push(vertex1);
            return true;
        }
        return false;
    }

    removeEdge(vertex1, vertex2) {
        if (this.adjacensyList[vertex1] && this.adjacensyList[vertex2]) {
            this.adjacensyList[vertex1] = this.adjacensyList[vertex1].filter(edge => edge !== vertex2);
            this.adjacensyList[vertex2] = this.adjacensyList[vertex2].filter(edge => edge !== vertex1);
            return true;
        }
        return false;
    }

    removeVertex(vertex) {
        if (this.adjacensyList[vertex]) {
            while (this.adjacensyList[vertex].length) {
                const temp = this.adjacensyList[vertex].pop();
                this.removeEdge(vertex, temp);
            }
            delete this.adjacensyList[vertex];
            return true;
        }
        return false;
    }
}

module.exports = Graph;