import React from "react";
import "./Card.css";
import { categories } from "../../helper/data";
import Item from "../item/Item";
import react from "../../assets/react.svg";
const Card = () => {
  return (
    <div className="card-container">
      <div className="heading">
        <img className="react-img" src={react}></img>
      </div>
      <div className="card-body">
        <h2 className="card-body-title">Languages</h2>
        <div className="cards">
          {categories.map((category, index) => {
            return <Item category={category} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};
export default Card;
