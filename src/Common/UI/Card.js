import React from "react";
const Card = (props) => {
  return(
    <React.Fragment>
    <div className="col-md-6 col-lg-4">
      <div className="card">
        <img
          className="card-img-top"
          src={props.cardImg}
          alt={props.cardTitle}
        />
        <div className="card-body">
          <h5 className="card-title">{props.cardTitle}</h5>
          <p className="card-text">
          {props.cardText}</p>
        </div>
      </div>
    </div>
  </React.Fragment>
  );
};
export default Card;
