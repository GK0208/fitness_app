import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button
} from "reactstrap";

class ExerciseCard extends Component {
  render() {
    return (
      <div>
        <Card style={{ width: "400px", marginTop: "50px", marginLeft: "50px" }}>
          <CardImg
            top
            height="250px"
            src={`${this.props.Src}`}
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle>
              <b>{this.props.Name}</b>
            </CardTitle>
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </CardText>
            <Link to={`/exercises/${this.props.Name}`}>
              <Button>See Top 5</Button>
            </Link>
          </CardBody>
        </Card>
      </div>
    );
  }
}
export default ExerciseCard;
