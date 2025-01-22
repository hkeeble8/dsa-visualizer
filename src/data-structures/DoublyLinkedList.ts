// import {v4 as uuidv4} from 'uuid';

export interface INode {
  id: string
  value: number;
  next: INode | null;
  prev: INode | null;
}

// interface ITraversedCallback {
//     (traversedId: string): void;
// };

class DoublyLinkedList {
    head: INode | null = null;
    tail: INode | null = null;

    // addNode(value: number, traversedCallback : ITraversedCallback) {
        
    // }

    getNodes() {
      return []
    }
}

export default DoublyLinkedList