class ArrayList {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    push(item) {
        this.data[this.length] = item;
        this.length++;
    }

    pop() {
        const itemToBePopped = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return itemToBePopped;
    }

    get(index) {
        return this.data[index];
    }

    delete(index) {
        const itemTobeDeleted = this.data[index];
        this._collapseTo(index);
        return itemTobeDeleted;
    }

    _collapseTo(index) {
        for(let i = index; i < this.length; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[length - 1];
        this.length--;
    }
}