export default class Node {
    // Constructs a new node with given value.
    // Next node will be empty at the initialization
    constructor(value){
        this.value = value;
        this.next = null;
    }

    // Sets the next node property.
    next(node) {
        this.next = node;
    }
}