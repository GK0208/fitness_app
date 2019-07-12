import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { signUp } from "../../actions/authActions";

class SignUp extends Component {
  state = {
    firstName: "",
    lastName: "",
    password: "",
    email: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.signUp(this.state);
  };
  render() {
    const { auth, authError } = this.props;
    if (auth.uid) return <Redirect to={`/user/${auth.uid}`} />;
    return (
      <div className="containers">
        <form onSubmit={this.handleSubmit}>
          <h3>SIGN UP</h3>
          <div className="input-field">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              className="input-field"
              onChange={this.handleChange}
              id="firstName"
              required
            />
          </div>
          <div className="input-field">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              className="input-field"
              id="lastName"
              onChange={this.handleChange}
              required
            />
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
              <label htmlFor="email">E mail</label>
              <input
                type="email"
                className="input-field"
                id="email"
                onChange={this.handleChange}
                required
              />
            </div>
          </div>
          <div className="input-field">
            <button className="btn btn-primary text-slanted">Sign Up</button>
            <div className="red-text center">
              {authError ? <p>{authError}</p> : null}
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    signUp: newUser => dispatch(signUp(newUser))
  };
};

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
