import React from "react";
import Competitions from "./Competitions";
export default function Home() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <Competitions />
          </div>
          <div className="col-6">Teams</div>
        </div>
      </div>
    </div>
  );
}
