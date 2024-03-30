import React, { useCallback, useState } from "react";
import ReactFlow, {
  Background,
  Controls,
  ReactFlowProvider,
  addEdge,
  useEdgesState,
  useNodesState,
} from "reactflow";
import "./App.css";

import "reactflow/dist/style.css";
import { NodesPanel } from "./components/NodesPanel";
import { Sidebar } from "./components/Sidebar";
import { CustomNode } from "./components/customNode";
import { initialEdges, initialNodes } from "./content/initial-elements";

const nodeTypes = { customNode: CustomNode };

function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const [editText, setEditText] = useState("");
  const [id, setId] = useState(null);

  const onNodeClick = (e, node) => {
    setId(node.id);
    setEditText(node.data.content);
  };

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <div className="App">
      <ReactFlowProvider>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
          onNodeClick={onNodeClick}
        >
          <Controls />
          <Background variant="dots" gap={12} size={1} />
        </ReactFlow>
        <NodesPanel />
        <Sidebar
          nodes={editText}
          setText={setEditText}
          textId={id}
          setId={setId}
          setNodes={setNodes}
        />
      </ReactFlowProvider>
    </div>
  );
}

export default App;
