import React, { Component } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import LogIn from "./components/Layout/LogIn";
import SignUp from "./components/Layout/SignUp";
import Navbar from "./components/Layout/Navbar";
import Home from "./components/Containers/Home";
import User from "./components/Containers/Users";
import Exercises from "./components/Exercises/Exercises";
import Chest from "./components/Exercises/Chest";
import Back from "./components/Exercises/Back";
import Legs from "./components/Exercises/Legs";
import Shoulders from "./components/Exercises/Shoulders";
import Trainers from "./components/Containers/Trainers";

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/logIn" component={LogIn} />
          <Route path="/SignUp" component={SignUp} />
          <Route path="/user/:uid" component={User} />
          <Route exact path="/:id/exercises" component={Exercises} />
          <Route path="/exercises/chest" component={Chest} />
          <Route path="/exercises/back" component={Back} />
          <Route path="/exercises/legs" component={Legs} />
          <Route path="/exercises/shoulders" component={Shoulders} />
          <Route path="/trainers" component={User} />
          <Route path="/trainer/:uid" component={Trainers} />
        </Switch>
      </Router>
    );
  }
}

export default App;
