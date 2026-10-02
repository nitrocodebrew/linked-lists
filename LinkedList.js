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

}