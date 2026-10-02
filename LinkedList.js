import Node from "./Node.js";

export default class LinkedList {

    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(data) {
        const node = new Node(data);
        
        if(null !== this.head) {
            this.tail.nextNode = node;
            this.tail = node;
        }
        else {
            this.head = node;
            this.tail = node;
        }
    }

    prepend(data) {
        const node = new Node(data);

        node.nextNode = this.head;
        this.head = node;

        /** If the list is already empty, make sure the node is also assigned 
         * as tail.
         */
        if(null === this.tail) {
            this.tail = node;
        }
    }

}