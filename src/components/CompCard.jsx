import React from "react";

export default function CompCard(props) {
  return (
    <div>
      <a href={`/competition/${props.id}/teams?id=${props.id}`}>
        <div className="card my-2" style={{ width: "300px", height: "400px;" }}>
          <img src={props.img} alt="" className="card-img-top" height="250px" />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <small className="card-text">{props.country}</small>
          </div>
        </div>
      </a>
    </div>
  );
}
