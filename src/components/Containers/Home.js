import React, { Component } from "react";
import data from "../gyms/Images";
import Card from "../gyms/Card";
import firebase from "firebase";
import SideBar from "../Layout/SideBar";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: data.images,
      image: data.images[0],
      users: [],
      isOpen: false
    };
  }
  async componentDidMount() {
    const data = [];
    await firebase
      .firestore()
      .collection("users")
      .get()
      .then(snapshot => {
        snapshot.docs.forEach(doc => data.push(doc.data()));
      });
    this.setState({ users: data });
  }

  nextImg = () => {
    const newIndex = this.state.image.index + 1;
    this.setState({
      image: data.images[newIndex]
    });
  };

  prevImg = () => {
    const newIndex = this.state.image.index - 1;
    console.log(newIndex);
    this.setState({
      image: data.images[newIndex]
    });
  };

  renderNav = () => {
    const open = this.state.isOpen;
    !open
      ? (document.getElementById("sidebar").style = "left:0px")
      : (document.getElementById("sidebar").style = "left:-350px");

    this.setState({
      isOpen: !this.state.isOpen
    });
  };
  render() {
    const { images, image } = this.state;
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-md-3">
            <button
              style={{
                marginTop: "10px",
                fontFamily: "Impact,Charcoal,sans-serif",
                color: "black"
              }}
              className="btn"
              onClick={this.renderNav}
            >
              SEE ALL USERS
            </button>
            {this.state.users.length === 0 ? (
              <h1 style={{ marginLeft: "-300px" }}>Loading..</h1>
            ) : (
              <div className="row">
                <div className="col-md-12">
                  <SideBar users={this.state.users} />
                </div>
              </div>
            )}
          </div>
          <div className="col-md-9">
            <h2 style={{ marginLeft: "13%", color: "grey" }}>
              <b>VISIT OUR GYMS</b>
            </h2>
            <div className="cards-slider">
              <div className="cards-slider-wrapper">
                <Card property={image} />
              </div>
              <button
                style={{ marginLeft: "230px", marginRight: "10px" }}
                onClick={() => this.prevImg()}
                disabled={image.index === 0}
                className="btn btn-primary"
              >
                Prev
              </button>
              <button
                onClick={() => this.nextImg()}
                disabled={image.index === images.length - 1}
                className="btn btn-primary"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
