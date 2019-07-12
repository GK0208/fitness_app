import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class TrainersSideBar extends Component {
  render() {
    return (
      <div id="sidebar">
        {
          <ul>
            <li style={{ marginBottom: "10px", color: "black" }}>
              <b>Trainers on KG FITNESS :</b>
            </li>
            <li style={{ color: "red", margin: "15px" }}>
              Total : {this.props.users.length}
            </li>
            {this.props.users.map((user, index) => (
              <li key={index}>
                <Link
                  style={{ color: "black" }}
                  key={index}
                  to={`/trainer/${user.uid}`}
                >
                  <i>
                    {user.firstName} {user.lastName}
                  </i>
                </Link>
              </li>
            ))}
          </ul>
        }
      </div>
    );
  }
}
