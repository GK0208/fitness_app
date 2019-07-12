import React, { Component } from "react";
import { connect } from "react-redux";
import firebase from "firebase";
import Product from "./Product";
import TrainersSideBar from "../Layout/TrainersSideBar";
import Modal from "react-modal";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      trainers: [],
      products: [],
      myProducts: []
    };
  }
  OpenModal = () => {
    this.setState({ isOpen: true });
  };

  CloseModal = () => {
    this.setState({ isOpen: false });
  };

  async componentDidMount() {
    const data = [];
    await firebase
      .firestore()
      .collection("Trainers")
      .get()
      .then(snapshot => {
        snapshot.docs.forEach(doc => data.push(doc.data()));
      });
    this.setState({ trainers: data });

    const products = [];
    await firebase
      .firestore()
      .collection("Products")
      .get()
      .then(snapshot => {
        snapshot.docs.forEach(doc => products.push(doc.data()));
      });
    this.setState({ products });
  }

  renderNav = () => {
    const open = this.state.isOpen;
    !open
      ? (document.getElementById("sidebar").style = "left:0px")
      : (document.getElementById("sidebar").style = "left:-350px");

    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  toCart = product => {
    const newProducts = this.state.myProducts;
    let prod = newProducts.find(x => {
      return x.name === product.name;
    });
    prod === undefined
      ? newProducts.push(product)
      : alert("You already have this product in your shopping cart");

    this.setState({
      myProducts: newProducts
    });
  };

  removeFromCart = product => {
    let myProducts = this.state.myProducts;
    let newProducts = myProducts.filter(x => x.name !== product.name);
    this.setState({
      myProducts: newProducts
    });
  };

  makeOrder = (products, total) => {
    console.log(products, total);
    const order = firebase.firestore.collection("orders").doc();
    order.set({
      products,
      total
    });
  };

  render() {
    let total = 0;
    console.log(this.props);
    const customStyles = {
      content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)"
      }
    };
    return (
      <div className="row">
        <Modal
          isOpen={this.state.isOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <button className="btn" onClick={this.CloseModal}>
            Close
          </button>
          <div>
            <h3>Your purchase is successfully recieved !</h3>
            <p>
              <i>Please wait till we set our backend to get your products !</i>
            </p>
          </div>
        </Modal>

        <div className="col-md-2" style={{ backgroundColor: "skyblue" }}>
          <button
            style={{
              marginTop: "10px",
              fontFamily: "Impact,Charcoal,sans-serif",
              color: "black"
            }}
            className="btn"
            onClick={this.renderNav}
          >
            SEE ALL Trainers
          </button>
          {this.state.trainers.length === 0 ? (
            <h1 style={{ marginLeft: "-300px" }}>Loading..</h1>
          ) : (
            <div className="row" style={{ height: "100%", width: "100%" }}>
              <div className="col-md-12">
                <TrainersSideBar users={this.state.trainers} />
              </div>
            </div>
          )}
        </div>
        <div className="col-md-6" style={{ borderLeft: "2px solid black" }}>
          <h1
            style={{
              fontFamily: "Impact,Charcoal,sans-serif",
              textAlign: "center"
            }}
          >
            <i>SHOPPING CART</i>
          </h1>
          <div className="row">
            {this.state.products != null ? (
              this.state.products.map(x => (
                <div className="col-md-6">
                  {" "}
                  <Product
                    toCart={() => this.toCart(x)}
                    width={"200px"}
                    height={"250px"}
                    use={"Add To Cart"}
                    props={x}
                  />
                </div>
              ))
            ) : (
              <h1>Loading</h1>
            )}
          </div>
        </div>
        <div
          className="col-md-4"
          style={{
            textAlign: "center",
            backgroundColor: "skyblue",
            borderLeft: "2px solid black"
          }}
        >
          <h4 style={{ fontFamily: "Impact,Charcoal,sans-serif" }}>Cart</h4>
          <div className="row">
            {this.state.myProducts.map(x => (
              <div className="col-md-6">
                <Product
                  toCart={() => this.removeFromCart(x)}
                  width={"160px"}
                  height={"300px"}
                  use={"Remove"}
                  props={x}
                />
              </div>
            ))}
          </div>

          {this.state.myProducts.forEach(x => (total += x.price))}
          <div className="row">
            <div className="col-md-12">
              {this.state.myProducts.length > 0 ? (
                <div className="row">
                  <div className="col-md-12">
                    <h4 style={{ color: "red" }}>Total: {total} $</h4>
                  </div>
                  <div className="col-md-12">
                    <button onClick={this.OpenModal} className="btn">
                      Make Order
                    </button>
                  </div>
                </div>
              ) : (
                <h4
                  style={{
                    fontFamily: "Impact,Charcoal,sans-serif",
                    color: "red"
                  }}
                >
                  Your shopping card is empty
                </h4>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  };
};

export default connect(mapStateToProps)(User);
