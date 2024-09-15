class Node {
  //value is node data
  constructor(value) {
    this.head = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  push(value) {
    let newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }

    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }
  pop() {
    let temp = this.head;
    let prev = this.head;

    while (temp.next) {
      prev = temp;
      temp = prev.next;
    }

    this.tail = prev;
    this.tail.next = null;
    this.length--;

    if (!this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return temp;
  }

  unshift(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }

    newNode.next = this.head;
    this.head = newNode;

    this.length++;
    return this;
  }

  shift() {
    if (!this.head) {
      return undefined;
    }

    //1. point the first node/element

    let temp = this.head;

    //2. move the head to next node/element

    this.head = this.head.next;

    //3.  remove first element

    temp.next = null;

    this.length--;

    if (!this.length === 0) {
      this.tail = null;
    }

    return temp;
  }

  getFirstElement() {
    const firstElement = this.head;
    return firstElement;
  }

  getLastElement() {
    if (!this.head) {
      return null;
    }

    let node = this.head;

    while (node) {
      if (!node.next) {
        return node;
      }
      node = node.next;
    }
  }

  get(index) {
    let counter = 0;
    let temp = this.head;

    while (temp) {
      if (counter === index) {
        return temp;
      }
      counter++;
      temp = temp.next;
    }
    return null;
  }

  set(index, value) {
    let temp = this.get(index);

    if (temp) {
      temp.value = value;
      return true;
    }
    return false;
  }

  insert(index, value) {
    if (index == 0) {
      return this.unshift(value);
    }
    if (index == 0) {
      return this.unshift(value);
    }
    if (index == this.length) {
      return this.push(value);
    }

    const newNode = new Node(value);

    const prevIndexTemp = this.get(index - 1);
    newNode.next = prevIndexTemp.next;
    prevIndexTemp.next = newNode;
    this.length++;
    return true;
  }

  size() {
    let counter = 0;
    let temp = this.head;

    while (temp) {
      counter++;
      temp = temp.next;
    }
    return counter;
  }

  clear() {
    this.head = null;
  }
}

const myLinkedList = new LinkedList(8);
myLinkedList.push(10);
myLinkedList.push(9);
myLinkedList.push(15);
// console.log(myLinkedList);
// myLinkedList.pop();
// console.log(myLinkedList);
// myLinkedList.unshift(5);
// console.log(myLinkedList);
// myLinkedList.shift();
// console.log(myLinkedList.getFirstElement());
// console.log(myLinkedList.getLastElement());
// console.log(myLinkedList.get(1));
// console.log(myLinkedList.set(2));
// myLinkedList.insert(2, 4);
// console.log(myLinkedList.get(2));
// console.log(myLinkedList.size());
// console.log(myLinkedList.clear());
// console.log(myLinkedList.size());
