import React from "react";
import "./Card.css";

const Card = ({ title, subTitle, result, des }) => {
  return (
    <div className="card-container">
      <div className="card-content">
        <div className="card-header">
          <div>
            <h3 className="card-title">{title}</h3>
            <p className="card-subtitle">{subTitle}</p>
          </div>
          <div>
            <p className="card-result">{result}</p>
          </div>
        </div>
        <p className="card-description">{des}</p>
      </div>
    </div>
  );
};

export default Card;
