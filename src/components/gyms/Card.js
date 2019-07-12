import React from "react";

const Card = ({ property }) => {
  const { title, image } = property;
  return (
    <div className="card">
      <img style={{ height: "350px", width: "600px" }} src={image} alt="gym" />
      <p style={{ marginLeft: "230px" }}>
        <b>{title}</b>
      </p>
    </div>
  );
};

export default Card;
