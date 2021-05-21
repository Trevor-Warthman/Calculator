class Tree {
    constructor(data) {
        this.data = data;
        this.children = []
    }

    addChild(node) {
        this.children.push(node);
    }

    getChild(childNum) {
        return this.children[childNum];
    }

    getNumberChildren() {
        return this.children.length;
    }
    printTree() {
        console.log(this.data);
        console.log(this.children);
        for(let i =0; i < this.children.length; i++) {
            this.getChild(i).printTree();
        }
    }
}

module.exports = {Tree};