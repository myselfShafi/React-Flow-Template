import React, { useCallback, useEffect, useState } from "react";
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
  const [isSelected, setIsSelected] = useState(false);

  const onNodeClick = (e, node) => {
    setId(node.id);
    setEditText(node.data.content);
  };

  useEffect(() => {
    const isSelected = nodes.some((each) => each.selected);
    setIsSelected(isSelected);
  }, [nodes]);

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
          isSelected={isSelected}
          text={editText}
          setText={setEditText}
          textId={id}
          setId={setId}
        />
      </ReactFlowProvider>
    </div>
  );
}

export default App;
