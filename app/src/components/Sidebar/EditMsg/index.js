import React from "react";

export const EditMessage = ({ value, setNodes, textId, setText, setId }) => {
  const onTextChange = (e) => {
    e.preventDefault();
    setText(e.target.value);
  };

  const submitText = () => {
    setNodes((nodes) => {
      const obj = nodes?.find((each) => each.id === textId);
      let arr = nodes.filter((each) => each != obj);
      if (obj) {
        obj.data.content = value;
        return [...arr, obj];
      } else {
        console.log("couldn't find the target node object");
        return nodes;
      }
    });
    setText("");
    setId(null);
  };
  return (
    <div className="d-grid gap-0 row-gap-3">
      <label htmlFor="edit-box" className="form-label">
        Edit Message:
      </label>
      <textarea
        className="form-control"
        id="edit-box"
        rows="3"
        style={{ resize: "none" }}
        value={value}
        onChange={onTextChange}
      ></textarea>
      <button
        type="submit"
        onClick={submitText}
        className="btn btn-outline-success"
      >
        Submit
      </button>
    </div>
  );
};
