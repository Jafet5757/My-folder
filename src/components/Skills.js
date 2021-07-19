import React from "react";
import Collapse from "./Collapse";

export default function Skills() {
  return (
    <div className="container mt-5">
      <p className="middle-text text-center">Skills</p>
      <div className="row">
        <div className="col-md">
          <Collapse title="Frontend Dveloper" id="fd" icon="far fa-file-code text-red middle-text" position={0}/>
        </div>
        <div className="col-md">
          <Collapse title="Backend developer" id="bd" icon="fas fa-terminal text-red middle-text" position={1}/>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Collapse title="Others" id="ot" icon="fas fa-boxes text-red middle-text" position={2}/>
        </div>
      </div>
    </div>
  );
}
