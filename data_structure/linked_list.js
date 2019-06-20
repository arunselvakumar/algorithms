class node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
        this.tail = null;
    }

    push(value) {
        const node = new node(value);
        if(!this.head) {
            this.head = node;
        } else {
            this.tail.next = node;
        }

        this.tail = node;
    }

    pop() {

    }

    get (index) {

    }

    delete(index) {

    }

    _find(value) {

    }
}
