export default class BidirectionalNode {
    constructor(value){
        this.value = value;
        this.next = null;
        this.previous = null;
    }
    next(node) {
        this.next = node;
    }
    previous(node) {
        this.previous = node;
    }
}