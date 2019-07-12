import React, { Component } from "react";
import ReactPlayer from "react-player";

export default class ExerciseList extends Component {
  render() {
    return (
      <div>
        {this.props.exercises.map((x, index) => (
          <div key={index} className="row" style={{ marginTop: "10%" }}>
            <div className="col-md-6">
              <h2
                style={{
                  color: "grey",
                  fontFamily: "Impact,Charcoal,sans-serif"
                }}
              >
                <i>{x.Name}</i>
              </h2>
              <div className="row">
                <div className="col-md-12">
                  <h4>
                    <i>{x.Set}</i>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <ReactPlayer url={`${x.Url}`} />
            </div>
          </div>
        ))}
      </div>
    );
  }
}
