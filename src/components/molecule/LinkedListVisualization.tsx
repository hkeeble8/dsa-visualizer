import React, { useState } from "react";
import LinkedList, { INode } from "../../data-structures/LinkedList";
import { NodeGraph } from "../atoms/NodeGraph";
import { GraphEdge, GraphNode } from 'reagraph';

const LinkedListVisualization: React.FC = () => {
  const ANIMATIION_STEP_TIME_MS : number = 500
  const ANIMATION_RESET_TIME_MS : number = 500
  
  // States
  const [nodes, setNodes] = useState<GraphNode[]>([]);
  const [edges, setEdges] = useState<GraphEdge[]>([]);
  const [traversedIds, setTraversedIds] = useState<string[]>([]);
  const [linkedList] = useState(new LinkedList());

  const updateNodes = () => {
    var currentNodes : INode[] = linkedList.getNodes();

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
    let timeoutMultiplier = 0;
    linkedList.addNode(nodes.length + 1, (traversedId : string) => {
      setTimeout(() => setTraversedIds((prev) => [...prev, traversedId]), timeoutMultiplier * ANIMATIION_STEP_TIME_MS)
      timeoutMultiplier++
    })
    finishOperation(timeoutMultiplier)
  };

  const removeLastNode = () => {
    let timeoutMultiplier = 0;
    linkedList.removeLastNode((traversedId : string) => {
      setTimeout(() => setTraversedIds((prev) => [...prev, traversedId]), timeoutMultiplier * ANIMATIION_STEP_TIME_MS)
      timeoutMultiplier++
    })
    finishOperation(timeoutMultiplier)
  }

  const removeFirstNode = () => {
    let timeoutMultiplier = 0;
    linkedList.removeFirstNode((_traversedId : string) => {})
    finishOperation(timeoutMultiplier)
  }

  return (
      <div>
          <div style={{ width: '50%', height: '50%', border: "2px solid black", borderRadius: "10px" }}>
            <h4>Operations</h4>
            <button onClick={addNode}>Add Node</button>
            <br/>
            <button onClick={removeLastNode}>Remove Last Node</button>
            <br/>
            <button onClick={removeFirstNode}>Remove First Node</button>
            <br/>
            <button>Add Node At Index</button><input type="number"></input>
            <br/>
            <button>Remove Node At Index</button><input type="number"></input>
            <br/>
            <button>Get Node At Index</button><input type="number"></input>
            <br/>
            <button>Set Node At Index</button><input type="number"></input>
            <br/>
            <button>Reverse</button>
            <br/>
        </div>
        <div style={{ position: "fixed", width: '50%', height: '50%' }}>
          <NodeGraph nodes={nodes} edges={edges} traversed={traversedIds}></NodeGraph>
        </div>
      </div>
  );
};

export default LinkedListVisualization;
