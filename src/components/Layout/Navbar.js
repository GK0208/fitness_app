import React, { Component } from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignOutLinks";
import { connect } from "react-redux";

const Navbar = props => {
  const { auth, profile } = props;
  const links = auth.uid ? (
    <SignedInLinks profile={profile} auth={auth} />
  ) : (
    <SignedOutLinks />
  );
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        {auth.uid ? (
          <Link to="/logIn" className="brand-logo">
            KG Fitness
          </Link>
        ) : (
          <Link to="/" className="brand-logo">
            KG Fitness
          </Link>
        )}
        {links}
      </div>
    </nav>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  };
};

export default connect(mapStateToProps)(Navbar);
