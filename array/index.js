class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;

    return this.length;
  }

  get(index) {
    return this.data[index];
  }

  pop() {
    const LastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return LastItem;
  }

  shift() {
    const firstItem = this.data[0];

    //re-indexing data
    for (let i = 0; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }

    //last index remove
    delete this.data[this.length - 1];
    this.length--;
    return firstItem;
  }

  delete(index) {
    const item = this.data[index];
    //re-indexing data
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }

    delete this.data[this.length - 1];
    this.length--;
    return item;
  }
}

const myNewArray = new MyArray();
myNewArray.push("apple");
myNewArray.push("banana");
myNewArray.push("mango");
myNewArray.push("lemon");

const itemGetByIndex = myNewArray.get(0);

// const LastItemRemove = myNewArray.pop();

// const firstItemRemove = myNewArray.shift();

const deleteByIndex = myNewArray.delete(1);

console.log(myNewArray);
