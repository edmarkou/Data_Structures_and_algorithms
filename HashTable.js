class HashTable {
    constructor(size = 7) {
        this.dataMap = new Array(size);
    }

    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length;
        }
        return hash;
    }

    set(key, value) {
        const index = this._hash(key);
        if (!this.dataMap[index]) {
            this.dataMap[index] = [];
        }
        this.dataMap[index].push([key, value]);
        return this.dataMap[index];
    }

    get(key) {
        const index = this._hash(key);
        if (!this.dataMap[index]) {
            return undefined;
        }
        let values = [];
        for (let i = 0; i < this.dataMap[index].length; i++) {
            if (this.dataMap[index][i][0] === key) {
                values.push(this.dataMap[index][i][1])
            }
        }
        if (!values.length) return undefined;
        else if (values.length === 1) return values[0];
        else return values;
    }

    keys() {
        const keys = [];
        for (let i = 0; i < this.dataMap.length; i++) {
            if (this.dataMap[i]) {
                for (let y = 0; y < this.dataMap[i].length; y++) {
                    keys.push(this.dataMap[i][y][0]);
                }
            }
        }
        return keys;
    }
}

module.exports = HashTable;