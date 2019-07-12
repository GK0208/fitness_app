import React, { Component } from "react";

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { signIn } from "../../actions/authActions";
import { Redirect } from "react-router-dom";

class LogIn extends Component {
  state = {
    email: "",
    password: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.signIn(this.state);
  };
  render() {
    const { authError, auth } = this.props;
    if (auth.uid) return <Redirect to={`/user/${auth.uid}`} />;
    return (
      <div className="containers">
        <form onSubmit={this.handleSubmit}>
          <h3>SIGN IN</h3>
          <div className="input-field">
            <label htmlFor="userName">e- mail</label>
            <input
              type="email"
              className="input-field"
              onChange={this.handleChange}
              id="email"
              aria-describedby="emailHelp"
              required
            />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="input-field"
              id="password"
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="input-field">
            <button className="btn btn-primary text-slanted">Log In</button>
          </div>
          <div className="red-text center">
            {authError ? <p>{authError}</p> : null}
          </div>

          <div className="input-field">
            <Link to="/signUp"> DONT HAVE AN ACOUNT ? REGISTER HERE ! </Link>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  };
};
const mapDispatchToProps = dispatch => {
  return {
    signIn: creds => dispatch(signIn(creds))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LogIn);
