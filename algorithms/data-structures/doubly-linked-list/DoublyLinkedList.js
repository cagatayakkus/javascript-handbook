import BidirectionalNode from "./BidirectionalNode";

export default class DoublyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
    }
    append(value){
        var newNode = new BidirectionalNode(value);
        if(!this.head){
            this.head = this.tail = newNode;
            return newNode;
        }
        var currentNode = this.head;
        while(currentNode.next){
            currentNode = currentNode.next;
        }
        currentNode.next = newNode;
        newNode.previous = currentNode;
        this.tail = newNode;
        return this.tail;
    }
    prepend(value){
        var newNode = new BidirectionalNode(value);
        if(!this.head){
            this.head = this.tail = newNode;
        }
        newNode.next = this.head.next;
        this.head.previous = newNode;
        this.head = newNode;
        return this.head;
    }
    delete(value) {
        if(!this.head) return null;
        if(this.head.value == value) {
            if(this.head == this.tail) {
                var temp = this.head;
                this.head = this.tail = null;
                return temp;
            }
            var temp = this.head;
            this.head = this.head.next;
            this.head.previous = null;
            return temp;
        }

        var currentNode = this.head;
        while(currentNode.next && currentNode.next.value != value) {
            currentNode = currentNode.next;
        }

        if(currentNode.next && currentNode.next.value == value) {
            if(currentNode.next == this.tail) {
                var deletedNode = currentNode.next;
                this.tail.previous = null;
                this.tail = currentNode;
                currentNode.next = null;
                return deletedNode;
            }
            var deletedNode = currentNode.next;
            currentNode.next.next.previous = currentNode;
            currentNode.next = currentNode.next.next;
            return deletedNode;
        }
        return null;
    }
    get(index) {
        if(!this.head) return null;
        var currentNode = this.head;
        var count = 0;
        while(count < index && currentNode.next) {
            currentNode = currentNode.next
            count++;
        }
        return currentNode;
    }
    size() {
        if(!this.head) return 0;
        var currentNode = this.head;
        let count = 1;
        while(currentNode.next) {
            currentNode = currentNode.next;
            count++;
        }
        return count;
    }
}