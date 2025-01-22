import {v4 as uuidv4} from 'uuid';

interface INode {
  id: string
  value: number;
  next: INode | null;
}

interface ITraversedCallback {
  (traversedId: string): void;
};

class LinkedList {
  head: INode | null = null;
  tail: INode | null = null;

  addNode(value: number, traversedCallback : ITraversedCallback) {
    const newNode: INode = { id: uuidv4(), value, next: null };
    
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }

    let currentNode = this.head;
    while (currentNode) {
      traversedCallback(currentNode.id)
      if (!currentNode.next) {
        currentNode.next = newNode;
        this.tail = newNode;
        return;
      }
      currentNode = currentNode.next;
    }
  }

  removeLastNode(traversedCallback : ITraversedCallback) {
      if (this.head == null) {
        return;
      }

      let currentNode = this.head;
      while (currentNode.next != this.tail && currentNode.next) {
        traversedCallback(currentNode.id)
        currentNode = currentNode.next;
      }
      traversedCallback(currentNode.id)

      this.tail = currentNode;
      this.tail.next = null;
  }

  removeFirstNode(_traversedCallback : ITraversedCallback) {
    if (this.head == null) {
      return;
    } else if (this.head == this.tail) {
      this.head = null;
      this.tail = null;
      return;
    }
    this.head = this.head.next;
  }

  getNodes() {
    let nodes = [];
    let currentNode = this.head;
    while (currentNode) {
      nodes.push(currentNode);
      currentNode = currentNode.next;
    }
    return nodes;
  }
}

export default LinkedList;
export type { INode };