import React, { useState } from "react";
import { Form } from "react-bootstrap";

const WhetherSearch = ({ onSearch }) => {
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    onSearch(text);
  };

  return (
    <Form onSubmit={onSubmit} style={{ padding: "25px 0" }}>
      <div style={{ textAlign: "center" }}>
        <input
          type="text"
          value={text}
          className="form-control"
          onChange={(e) => setText(e.target.value)}
        />
        <button
          className="badge bg-warning"
          style={{ marginLeft: "5px", border: "0" }}
          type="submit"
        >
          검색
        </button>
      </div>
    </Form>
  );
};

export default WhetherSearch;
