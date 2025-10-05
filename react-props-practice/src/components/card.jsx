import React from "react";
//This one is reusable, so it can take different data for the same format.

function Card(props) {
  //Key word props there to use this stuff.
  //In the h2 I have the first props.name, that tap in the id name and show the data.
  //In img I hve the second props.
  //In p I have the third and fourth props.
  //Use the {} to call the props, other way I not work.
  return (
    <div>
      <div className="card">
        <div className="top">
          <h2 className="name">{props.name}</h2>
          <img className="circle-img" src={props.img} alt="avatar_img" />
        </div>
        <div className="bottom">
          <p className="info">{props.phone}</p>
          <p className="info">{props.email}</p>
        </div>
      </div>
    </div>
  );
}
export default Card;
