import Node from "./Node.js";

export default class LinkedList {

    constructor() {
        this.listHead = null;
        this.listTail = null;
        this.length = 0;
    }

    append(data) {
        const node = new Node(data);
        
        if(null !== this.listHead) {
            this.listTail.nextNode = node;
            this.listTail = node;
        }
        else {
            this.listHead = node;
            this.listTail = node;
        }

        this.length++;
    }

    prepend(data) {
        const node = new Node(data);

        node.nextNode = this.listHead;
        this.listHead = node;

        /** If the list is already empty, make sure the node is also assigned 
         * as tail.
         */
        if(null === this.listTail) {
            this.listTail = node;
        }

        this.length++;
    }

    size() {
        return this.length;
    }

    head() {
        return this.listHead;
    }

    tail() {
        return this.listTail;
    }

    at(idx) {
        let current = this.listHead;
        let i = 0;

        while(current !== null) {
            if(i === idx) {
                return current;
            }

            current = current.nextNode;
            i++;
        }
    }

    pop() {
        let current = this.listHead;
        let previous = null;

        // List is empty
        if(this.listHead === null) {
            return;
        }

        // Only one node
        if(this.listHead.nextNode === null) {
            this.listHead = null;
            this.listTail = null;
            
            this.length--;

            return;
        }

        while(current.nextNode !== null) {
            previous = current;
            current = current.nextNode;
        }

        previous.nextNode = null;
        this.listTail = previous;

        this.length--;
    }
}