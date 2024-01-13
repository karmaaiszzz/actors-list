import React from "react";

const Actor = (props) => {
  const { id, name, img, about } = props.actorData;
  return (
    <div
      style={{
        maxHeight: "400px",
        width: "600px",
        display: "flex",
        gap: "2rem",
        background: "#f6f6f5",
        padding: "1rem",
      }}
    >
      <div>
        <img src={img} />
      </div>
      <div>
        <h4> {name}</h4>
        <p style={{ fontSize: "0.75rem" }}>{about}</p>
      </div>
    </div>
  );
};

export default Actor;
