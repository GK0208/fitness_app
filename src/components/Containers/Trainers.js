import React, { Component } from "react";
import firebase from "firebase";
import TrainersCard from "../../Shared/TrainersCard";

export default class Trainers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trainers: null
    };
  }

  async componentDidMount() {
    let data = null;
    const uid = this.props.match.params.uid;
    await firebase
      .firestore()
      .collection("Trainers")
      .get()
      .then(snapshot => {
        snapshot.docs.map(doc =>
          doc.data().uid === uid ? (data = doc.data()) : data == null
        );
      });
    this.setState({ trainers: data });
  }
  render() {
    console.log(this.state.trainers);
    return (
      <div>
        {this.state.trainers != null ? (
          <TrainersCard trainer={this.state.trainers} />
        ) : (
          <h1> Loading</h1>
        )}
      </div>
    );
  }
}
