import { useEffect, useRef } from 'react';
import { GraphCanvas, GraphCanvasRef, GraphEdge, GraphNode } from 'reagraph';

export interface NodeGraphProps {
    nodes : GraphNode[]
    edges : GraphEdge[]
    traversed : string[]
}

export const NodeGraph = ( props : NodeGraphProps ) => {
    const graphRef = useRef<GraphCanvasRef | null>(null);

    useEffect(() => {
        if (props.nodes.length > 1) { // Some hack, for some reason doesn't work for the first node?
            graphRef.current?.fitNodesInView();
        }
    }, [props.nodes, props.edges]);

    return (
        <GraphCanvas layoutType="hierarchicalLr" layoutOverrides={{
            nodeSeparation: 0.5}}
            ref={graphRef}
            nodes={props.nodes}
            edges={props.edges}
            selections={props.traversed}
        />
    )
  };