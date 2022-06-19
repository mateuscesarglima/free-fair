import React from "react";
import './FeiranteCard.css'
const FeiranteCard = ({ name, first, second, thirst, fourth, img }) => {
  return (
    <div className="feirante-card">
      <img src={img} alt="" />
      <div className="feirante-text-box">
        <div className="feirante-name">
          <h1>{name}</h1>
        </div>
        <ul className="feirante-list">
          <li className="feirante-list-item">{first}</li>
          <li className="feirante-list-item">{second}</li>
          <li className="feirante-list-item">{thirst}</li>
          <li className="feirante-list-item">{fourth}</li>
        </ul>
      </div>
    </div>
  );
};

export default FeiranteCard;
