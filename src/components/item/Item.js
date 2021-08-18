import React, { useState } from "react";

const Item = ({ category }) => {
  const [showCategory, setShowCategory] = useState(true);
  return (
    <div className="card-item" onClick={() => setShowCategory(!showCategory)}>
      {showCategory ? (
        <>
          <img className="card-img" src={category.img}></img>
          <h5 className="card-title">{category.name}</h5>
        </>
      ) : (
        <>
          <ul className="category-options">
            {category.options.map((option, i) => {
              return <li key={i}>{option}</li>;
            })}
          </ul>
        </>
      )}
    </div>
  );
};
export default Item;
