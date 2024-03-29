import React, { useCallback } from "react";
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  addEdge,
  useEdgesState,
  useNodesState,
} from "reactflow";
import "./App.css";

import "reactflow/dist/style.css";
import { NodesPanel } from "./components/NodesPanel";
import { CustomNode } from "./components/customNode";

const initialNodes = [
  {
    id: "1",
    type: "customNode",
    position: { x: 100, y: 100 },
    data: { label: "1" },
  },
  {
    id: "2",
    type: "customNode",
    position: { x: 200, y: 200 },
    data: { label: "2" },
  },
];
const initialEdges = [{ id: "e1-2", source: "1", target: "2" }];

function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const nodeTypes = { customNode: CustomNode };

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <div className="App">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
      >
        <Controls />
        <MiniMap />
        <Background variant="dots" gap={12} size={1} />
      </ReactFlow>
      <NodesPanel />
    </div>
  );
}

export default App;
