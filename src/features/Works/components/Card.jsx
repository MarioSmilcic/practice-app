import React from "react";
import "../Works.css";

const Card = ({ imgUrl, title, description }) => {
  return (
    <div className="card">
      <img src={imgUrl} alt="img" />
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
};

export default Card;
