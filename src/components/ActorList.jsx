import React from "react";
import Actor from "./Actor";
import { actorList } from "../../actor.data";
const ActorList = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      {actorList.map((item) => {
        return <Actor key={item.id} actorData={item} />;
      })}
    </div>
  );
};

export default ActorList;
