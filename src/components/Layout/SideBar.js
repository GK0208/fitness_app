import React, { Component } from "react";

export default class SideBar extends Component {
  render() {
    return (
      <div id="sidebar">
        {
          <ul>
            <li style={{ marginBottom: "10px", color: "white" }}>
              <b>USERS CONNECTED TO KG FITNESS :</b>
            </li>
            <li style={{ color: "red", margin: "15px" }}>
              Total : {this.props.users.length}
            </li>
            {this.props.users.map(user => (
              <li>
                {user.firstName} {user.lastName}
              </li>
            ))}
          </ul>
        }
      </div>
    );
  }
}
