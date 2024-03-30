import React from "react";

export const NodesPanel = () => {
  return (
    <div
      className="accordion position-absolute top-0"
      id="node-panel"
      style={{ width: "10rem" }}
    >
      <div className="accordion-item">
        <div className="accordion-header">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapse-panel"
            aria-expanded="true"
            aria-controls="collapse-panel"
          >
            Nodes Panel
          </button>
        </div>
        <div
          id="collapse-panel"
          className="accordion-collapse collapse show"
          data-bs-parent="#node-panel"
        >
          <div className="accordion-body"></div>
        </div>
      </div>
    </div>
  );
};
