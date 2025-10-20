import React from "react";
import Avatar from "./Avatar";
import Detail from "./Detail";
//📣Rember to use React Dev tool to truble shoot any problem targgin the right props.
//Here the error is in props.img this is wrong buecause in contacts.js the is imgURL,
//So the righ way => prpos.imgURL
function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <Avatar img={props.img} />
      </div>
      <div className="bottom">
        <Detail detailInfo={props.phone} />
        <Detail detailInfo={props.email} />
      </div>
    </div>
  );
}

export default Card;
