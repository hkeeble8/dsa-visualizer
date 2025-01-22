import React, { useState } from "react";
import DoublyLinkedList, { INode } from "../../data-structures/DoublyLinkedList";
import { NodeGraph } from "../atoms/NodeGraph";
import { GraphEdge, GraphNode } from 'reagraph';

const DoublyLinkedListVisualization: React.FC = () => {
  const ANIMATIION_STEP_TIME_MS : number = 500
  const ANIMATION_RESET_TIME_MS : number = 500
  
  // States
  const [nodes, setNodes] = useState<GraphNode[]>([]);
  const [edges, setEdges] = useState<GraphEdge[]>([]);
  const [traversedIds, setTraversedIds] = useState<string[]>([]);
  const [doublyLinkedList] = useState(new DoublyLinkedList());

  const updateNodes = () => {
    var currentNodes : INode[] = doublyLinkedList.getNodes();

    var newNodes : GraphNode[] = currentNodes.map(n => ({
        id: n.id,
        label: n.value.toString(),
    }));
    setNodes(newNodes);

    var newEdges : GraphEdge[] = currentNodes.map(n => ({
      id: n.id,
      source: n.id.toString(),
      target: n.next ? n.next.id : "",
    }));
    setEdges(newEdges);  
  }

  const finishOperation = (timeoutMultiplier : number) => {
    setTimeout(() => setTraversedIds([]), ANIMATIION_STEP_TIME_MS * timeoutMultiplier + ANIMATION_RESET_TIME_MS);
    setTimeout(() => updateNodes(), ANIMATIION_STEP_TIME_MS * timeoutMultiplier + ANIMATIION_STEP_TIME_MS);
  }

  const addNode = () => {
    // let timeoutMultiplier = 0;
    // linkedList.addNode(nodes.length + 1, (traversedId : string) => {
    //   setTimeout(() => setTraversedIds((prev) => [...prev, traversedId]), timeoutMultiplier * ANIMATIION_STEP_TIME_MS)
    //   timeoutMultiplier++
    // })
    // finishOperation(timeoutMultiplier)
  };

  const removeLastNode = () => {
    // let timeoutMultiplier = 0;
    // linkedList.removeLastNode((traversedId : string) => {
    //   setTimeout(() => setTraversedIds((prev) => [...prev, traversedId]), timeoutMultiplier * ANIMATIION_STEP_TIME_MS)
    //   timeoutMultiplier++
    // })
    // finishOperation(timeoutMultiplier)
  }

  const removeFirstNode = () => {
    // let timeoutMultiplier = 0;
    // linkedList.removeFirstNode((_traversedId : string) => {})
    // finishOperation(timeoutMultiplier)
  }

  return (
      <div>
          <div style={{ width: '50%', height: '50%', border: "2px solid black", borderRadius: "10px" }}>
            <h4>Operations</h4>
            <br/>
        </div>
        <div style={{ position: "fixed", width: '50%', height: '50%' }}>
          <NodeGraph nodes={nodes} edges={edges} traversed={traversedIds}></NodeGraph>
        </div>
      </div>
  );
};

export default DoublyLinkedListVisualization;
