class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  class LinkedListNode {
    constructor(val) {
      this.head = new Node(val);
    }
  
    add(val) {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = new Node(val);
    }
  
    removeTail() {
      let temp = this.head;
      while (temp.next.next !== null) {
        temp = temp.next;
      }
     temp.next = null;
    }

    remove(value) {
      if (!this.next) return;
      if (this.next.value === value) {
        this.next = this.next.next;
      } else {
        this.next.remove(value);
      }
    }  
  
    getList() {
      if (!this.next) return this.value;
    return `${this.value} ${this.next.getList()}`;
    }
  }
  
  const list = new LinkedListNode("A");
  console.log(list.head);
  list.add("B");
  console.log(list.getList());
  list.add("C");
  console.log(list.getList());
  list.removeTail();
  console.log(list.getList());
  
  module.exports = { LinkedListNode };

  test('linked list adds', () => {
    const root = new LinkedListNode('A');
    const nodeB = new LinkedListNode('B');
    const nodeC = new LinkedListNode('C');
    const nodeD = new LinkedListNode('D');
    root.add(nodeB);
    root.add(nodeC);
    root.add(nodeD);
  
    expect(root.next).toBe(nodeB);
    expect(nodeB.next).toBe(nodeC);
    expect(nodeC.next).toBe(nodeD);
    expect(nodeD.next).toBe(null);
  });
  
  test('linked list getList', () => {
    const root = new LinkedListNode('A');
    const nodeB = new LinkedListNode('B');
    const nodeC = new LinkedListNode('C');
    const nodeD = new LinkedListNode('D');
    expect(root.getList()).toBe('A');
    root.add(nodeB);
    expect(root.getList()).toBe('A B');
    root.add(nodeC);
    expect(root.getList()).toBe('A B C');
    root.add(nodeD);
    expect(root.getList()).toBe('A B C D');
  });
  
  test('linked list remove', () => {
    const root = new LinkedListNode('A');
    const nodeB = new LinkedListNode('B');
    const nodeC = new LinkedListNode('C');
    const nodeD = new LinkedListNode('D');
    root.add(nodeB);
    root.add(nodeC);
    root.add(nodeD);
    root.remove('C');
    expect(root.getList()).toBe('A B D');
  });