import React, { useCallback, useEffect, useRef, useState } from "react";
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
import { SaveBtn } from "./components/SaveChanges";
import { Sidebar } from "./components/Sidebar";
import { CustomNode } from "./components/customNode";
import { initialEdges, initialNodes } from "./content/initial-elements";

const nodeTypes = { customNode: CustomNode };

let id = 1;
const generateId = () => `dropId_${id++}`;

function App() {
  const rfWrapper = useRef(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const [rfInstance, setRfInstance] = useState(null);
  const [editText, setEditText] = useState("");
  const [id, setId] = useState(null);
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    const isSelected = nodes.some((each) => each.selected);
    setIsSelected(isSelected);
  }, [nodes]);

  const onNodeClick = (e, node) => {
    setId(node.id);
    setEditText(node.data.content);
  };

  const onDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  };

  const onDrop = useCallback(
    (e) => {
      e.preventDefault();
      const type = e.dataTransfer.getData("dataType");
      const label = e.dataTransfer.getData("label");

      if (typeof type === "undefined" || !type) {
        return;
      }
      const position = rfInstance.screenToFlowPosition({
        x: e.clientX,
        y: e.clientY,
      });

      setNodes((node) =>
        node.concat({
          id: generateId(),
          type: type,
          position: position,
          data: {
            heading: "Send Message",
            content: label,
          },
        })
      );
    },
    [setNodes, rfInstance]
  );

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge({ ...params, id: "50" }, eds)),
    [setEdges]
  );

  return (
    <div className="App">
      <ReactFlowProvider>
        <ReactFlow
          ref={rfWrapper}
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
          onNodeClick={onNodeClick}
          onDragOver={onDragOver}
          onDrop={onDrop}
          onInit={setRfInstance}
        >
          <Controls position="top-left" />
          <Background variant="dots" gap={12} size={1} />
        </ReactFlow>
        <Sidebar
          isSelected={isSelected}
          text={editText}
          setText={setEditText}
          textId={id}
          setId={setId}
        />
        <SaveBtn />
      </ReactFlowProvider>
    </div>
  );
}

export default App;
