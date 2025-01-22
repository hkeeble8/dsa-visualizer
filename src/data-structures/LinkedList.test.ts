import { describe, expect, test } from 'vitest'
import LinkedList from "./LinkedList";

describe('testing linkedlist', () => {
    test('new list should have no head or tail', () => {
        let ll = new LinkedList()
        expect(ll.head).toBe(null);
        expect(ll.tail).toBe(null);
    });

    test('adding a node to an empty list should set tail and head', () => {
        let ll = new LinkedList()
        ll.addNode(1, () => {});
        expect(ll.head).toBeTruthy();
        expect(ll.head?.value).toBe(1);
        expect(ll.tail).toBeTruthy();
        expect(ll.tail?.value).toBe(1);
        expect(ll.head).toMatchObject(ll.tail!);
        
        expect(ll.head?.next).toBeFalsy()
    })

    test('adding two nodes to an empty list should set tail, head and next accordingly', () => {
        let ll = new LinkedList();
        ll.addNode(1, () => {});
        ll.addNode(2, () => {});
        expect(ll.head).toBeTruthy();
        expect(ll.head?.value).toBe(1);
        expect(ll.tail).toBeTruthy();
        expect(ll.tail?.value).toBe(2);
        expect(ll.head?.next).toMatchObject(ll.tail!)
        expect(ll.tail?.next).toBeFalsy()
    })

    test('calling getNodes should return all nodes'), () => {
        let ll = new LinkedList();
        ll.addNode(1, () => {});
        ll.addNode(2, () => {});

        var nodes = ll.getNodes();
        expect(nodes.length).toBe(2)

        expect(nodes[0].id).toBeTruthy()
        expect(nodes[0].value).toBe(1)
        expect(nodes[1].id).toBeTruthy()
        expect(nodes[1].value).toBe(2)
    }
});