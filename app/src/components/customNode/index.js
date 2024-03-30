import React from "react";
import { Handle, Position } from "reactflow";

export const CustomNode = ({ data }) => {
  return (
    <div>
      <div className="card" style={{ minWidth: "12rem" }}>
        <div className="card-header text-center bg-primary text-light fw-bold">
          {data.heading}
        </div>
        <div className="card-body">{data.content}</div>
        <Handle type="source" position={Position.Bottom} id="h-2" />
        <Handle type="target" position={Position.Top} id="h-1" />
      </div>
    </div>
  );
};
