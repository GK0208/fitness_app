import React, { Component } from "react";
import { Card, CardText, CardBody, CardTitle, Button } from "reactstrap";

export default class TrainersCard extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "skyblue" }}>
        <Card
          style={{
            width: "400px",
            marginTop: "50px",
            marginLeft: "35%",
            fontFamily: "Impact,Charcoal,sans-serif"
          }}
        >
          <CardBody>
            <CardTitle>
              <b>
                <h2>
                  {this.props.trainer.firstName} {this.props.trainer.lastName}
                </h2>
              </b>
            </CardTitle>
            <div>
              <h5>Age : {this.props.trainer.Age}</h5>
              <h5>
                Available :{" "}
                {this.props.trainer.Available ? (
                  <span style={{ color: "green" }}>YES</span>
                ) : (
                  <span style={{ color: "red" }}>NOT</span>
                )}
              </h5>
              <h5>Email : {this.props.trainer.Mail}</h5>
              <h5 style={{ color: "blue" }}>
                {this.props.trainer.Experience} years expirience
              </h5>
            </div>
          </CardBody>
        </Card>
      </div>
    );
  }
}
