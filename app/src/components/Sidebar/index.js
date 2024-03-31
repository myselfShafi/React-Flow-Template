import React from "react";
import { EditMessage } from "./EditMsg";

export const Sidebar = ({ isSelected, text, textId, setText, setId }) => {
  return (
    <div
      className="position-absolute bg-body-secondary border rounded overflow-hidden p-1"
      style={{ right: "2rem", top: "5rem", bottom: "5rem", width: "20rem" }}
    >
      <header className="bg-primary-subtle p-2 rounded text-primary-emphasis mb-4">
        <h4 className="text-center">Edit Panel</h4>
      </header>
      <section className="p-2">
        {isSelected ? (
          <EditMessage
            value={text}
            textId={textId}
            setId={setId}
            setText={setText}
          />
        ) : (
          <div className="text-center">
            <h5 className="text-info-emphasis">
              Select a node to edit the message
            </h5>
          </div>
        )}
      </section>
    </div>
  );
};
