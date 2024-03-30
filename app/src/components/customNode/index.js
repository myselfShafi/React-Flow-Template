import React from "react";
import { Handle, Position } from "reactflow";

export const CustomNode = ({ data, selected }) => {
  return (
    <div
      className={`card p-1 ${
        selected && "shadow-lg border border-info"
      } bg-body-tertiary`}
      style={{ minWidth: "12rem" }}
    >
      <div className="card-header text-center bg-info-subtle text-info-emphasis fw-bold">
        {data.heading}
      </div>
      <div className="card-body">{data.content}</div>
      <Handle type="source" position={Position.Bottom} id="h-2" />
      <Handle type="target" position={Position.Top} id="h-1" />
    </div>
  );
};
