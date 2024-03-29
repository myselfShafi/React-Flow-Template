import React from "react";

export const NodesPanel = () => {
  return (
    <section className="w-10">
      <div className="accordion position-absolute top-0" id="node-panel">
        <div className="accordion-item">
          <h2 className="accordion-header">
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
          </h2>
          <div
            id="collapse-panel"
            className="accordion-collapse collapse show"
            data-bs-parent="#node-panel"
          >
            <div className="accordion-body">
              <strong>This is the first item's accordion body.</strong> It is
              shown by default, until the collapse plugin adds the appropriate
              classNamees that we use to style each element. These classNamees
              control the overall appearance, as well as the showing and hiding
              via CSS transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
