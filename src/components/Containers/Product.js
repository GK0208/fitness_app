import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

const Product = property => {
  const { use, height, props, width } = property;

  return (
    <Card style={{ width, height, marginTop: "30%", marginLeft: "10px" }}>
      <CardImg top height="100px" src={`${props.img}`} alt="" />
      <CardBody>
        <CardTitle>
          <b>{props.name}</b>
        </CardTitle>
        <CardText>
          <div>Price :{props.price}</div>
          <div>Weight: {props.weight}</div>
        </CardText>
      </CardBody>
      <button onClick={property.toCart} className="btn btn-primary">
        {use}
      </button>
    </Card>
  );
};
export default Product;
