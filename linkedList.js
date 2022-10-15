class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

//Head only Pointer
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  //0(1)
  prependNode(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      node.next = null;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
    return node;
  }

  print() {
    if (this.isEmpty()) {
      return "list is empty";
    } else {
      let curr = this.head;
      let listValues = "";
      while (curr) {
        listValues += `${curr.value} `;
        curr = curr.next;
      }
      return listValues;
    }
  }

  hasCycle() {
    let fastPointer = this.head;
    let slowPointer = this.head;

    while (fastPointer != null && fastPointer.next != null) {
      fastPointer = fastPointer.next.next;
      slowPointer = slowPointer.next;

      if (slowPointer === fastPointer) {
        return true;
      }
    }

    return false;
  }

  //0(n)
  appendNode(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      node.next = null;
    } else {
      let prev = this.head;
      while (prev.next != null) {
        prev = prev.next;
      }
      prev.next = node;

      node.next = null;
    }
    this.size++;
    return node;
  }

  insert(value, position) {
    if (position < 0 || position > this.size) return `invalid index`;
    if (position === 0) return this.prependNode(value);
    const node = new Node(value);
    let curr = this.head;
    let index = 0;
    while (index < position - 1) {
      curr = curr.next;
      index++;
    }
    let currentNode = curr;
    node.next = currentNode.next;
    curr.next = node;
    this.size++;

    return currentNode;
  }

  removeFrom(position) {
    if (position < 0 || position > this.size) return `invalid index`;
    let removedNode;

    if (position === 0) {
      removedNode = this.head;
      this.head = this.head.next;
      this.size--;
      return removedNode.value;
    }
    let curr = this.head;
    let index = 0;
    while (index < position - 1) {
      curr = curr.next;
      index++;
    }
    removedNode = curr.next;
    curr.next = curr.next.next;
    this.size--;
    return removedNode.value;
  }

  remove(value) {
    if (this.isEmpty()) {
      return null;
    }
    if (this.head.value === value) {
      this.head = this.head.next;
      this.size--;
      return value;
    }
    let curr = this.head;
    // let index = 0;
    let removedNode;
    while (curr != null) {
      if (curr?.next?.value === value) {
        removedNode = curr.next;
        curr.next = curr.next.next;
        this.size--;

        return removedNode.value;
      }
      curr = curr.next;
    }
    return null;
  }

  find(value) {
    if (this.isEmpty()) {
      return "list is empty";
    } else {
      let curr = this.head;
      let index = 0;
      while (curr) {
        if (curr.value === value) return `found at index ${index}`;
        curr = curr.next;
        index++;
      }
      return "not found";
    }
  }

  reverse() {
    let curr = this.head;
    let prev = null; //prev
    while (curr) {
      let next = curr?.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }

    this.head = prev;

    return this.print();
  }
}

const list1 = new LinkedList();

// console.log(list1.print());

// console.log(list1.appendNode(1));
// console.log(list1.appendNode(2));
// console.log(list1.appendNode(3));
// console.log(list1.appendNode(4));
// console.log(list1.prependNode(5));
// console.log(list1.prependNode(6));
// console.log(list1.prependNode(7));
// console.log(list1.insert(8, 2));
// console.log(list1.insert(9, 2));
// console.log(list1.print());

// console.log(list1.insert(10, -98));
// console.log("removed", list1.removeFrom(1));
// console.log("removedItem", list1.remove(4));
// console.log("removedItem", list1.find(3));
// console.log("removedItem", list1.find(7));
// console.log("reverse", list1.reverse(7));

// console.log(list1.print());
// console.log(list1.isEmpty());
// console.log(list1.getSize());

// console.log("cycle:", list1.hasCycle());

//Head and Tail Pointer
class LinkedList2 {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  print() {
    if (this.isEmpty()) {
      return "list is empty";
    } else {
      let curr = this.head;
      let listValues = "";
      while (curr) {
        listValues += `${curr.value} `;
        curr = curr.next;
      }
      return listValues;
    }
  }

  hasCycle() {
    let fastPointer = this.head;
    let slowPointer = this.head;

    while (fastPointer != null && fastPointer.next != null) {
      fastPointer = fastPointer.next.next;
      slowPointer = slowPointer.next;

      if (slowPointer === fastPointer) {
        return true;
      }
    }

    return false;
  }

  insert(value, position) {
    if (position < 0 || position > this.size) return `invalid index`;
    if (position === 0) return this.prependNode(value);
    const node = new Node(value);
    let curr = this.head;
    let index = 0;
    while (index < position - 1) {
      curr = curr.next;
      index++;
    }
    let currentNode = curr;
    node.next = currentNode.next;
    curr.next = node;
    this.size++;

    return currentNode;
  }

  //Tail Pointers effects

  //0(1)
  prependNode(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
    return node;
  }

  //0(1)
  appendNode(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
    return node;
  }

  removeFrom(position) {
    if (position < 0 || position > this.size) return `invalid index`;
    let removedNode;

    if (position === 0) {
      removedNode = this.head;
      this.head = this.head.next;
      this.size--;
      return removedNode.value;
    }
    let curr = this.head;
    let index = 0;
    while (index < position - 1) {
      curr = curr.next;
      index++;
    }
    removedNode = curr.next;
    curr.next = curr.next.next;
    this.size--;
    return removedNode.value;
  }

  remove(value) {
    if (this.isEmpty()) {
      return null;
    }
    if (this.head.value === value) {
      this.head = this.head.next;
      this.size--;
      return value;
    }
    let curr = this.head;
    // let index = 0;
    let removedNode;
    while (curr != null) {
      if (curr?.next?.value === value) {
        removedNode = curr.next;
        curr.next = curr.next.next;
        this.size--;

        return removedNode.value;
      }
      curr = curr.next;
    }
    return null;
  }

  find(value) {
    if (this.isEmpty()) {
      return "list is empty";
    } else {
      let curr = this.head;
      let index = 0;
      while (curr) {
        if (curr.value === value) return `found at index ${index}`;
        curr = curr.next;
        index++;
      }
      return "not found";
    }
  }

  reverse() {
    let curr = this.head;
    let prev = null; //prev
    while (curr) {
      let next = curr?.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }

    this.head = prev;

    return this.print();
  }

  removeFromFront() {
    if (this.isEmpty()) {
      return null;
    }

    const value = this.head.value;
    this.head = this.head.next;
    this.size--;
    return value;
  }

  removeFromEnd() {
    if (this.isEmpty()) {
      return null;
    }
    const value = this.tail.value;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let prev = this.head;
      while (prev.next != this.tail) {
        prev = prev.next;
      }

      prev.next = null;
      this.tail = prev;
    }
    this.size--;
    return value;
  }
}

const list2 = new LinkedList2();

// console.log(list2.print());

// console.log(list2.appendNode(1));
// console.log(list2.appendNode(2));
// console.log(list2.appendNode(3));
// console.log(list2.appendNode(4));
// console.log(list2.prependNode(5));
// console.log(list2.prependNode(6));
// console.log(list2.prependNode(7));
// // console.log(list2.removeFromFront());
// // console.log(list2.removeFromEnd());
// console.log(list2.print());
// console.log(list2.getSize());




 function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
 }

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let p1 = l1,
    p2 = l2,
    carry = 0,
    num1 = 0,
    num2 = 0,
    solution = new ListNode(0),
    current = solution;

  while (p1 || p2) {
    num1 = p1 ? p1.val : 0;
    num2 = p2 ? p2.val : 0;

    console.log({num1, num2})
    if (num1 + num2 + carry > 9) {
      current.next = new ListNode(num1 + num2 + carry - 10);
      current = current.next;
      carry = 1;
    } else {
      current.next = new ListNode(num1 + num2 + carry);
      current = current.next;
      carry = 0;
    }

    if (p1) p1 = p1.next;
    if (p2) p2 = p2.next;
  }
  if (carry) current.next = new ListNode(carry);

  return solution.next;
};

let l1 = [2, 4, 3], l2 = [5, 6, 4];

console.log(addTwoNumbers(l1, l2));
