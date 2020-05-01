import React from "react";

export default function CompCard(props) {
  return (
    <div>
      <div className="card">
        <img src={props.img} alt="" className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <small className="card-text">{props.country}</small>
        </div>
      </div>
    </div>
  );
}
