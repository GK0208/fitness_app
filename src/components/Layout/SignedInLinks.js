import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../actions/authActions";

const SignedInLinks = props => {
  return (
    <ul className="right">
      <li>
        <NavLink to={`/${props.auth.uid}/exercises`}>TOP 5</NavLink>
      </li>
      <li>
        <NavLink to="/" onClick={props.signOut}>
          Log Out
        </NavLink>
      </li>
      <li>
        <NavLink
          to={`/user/${props.auth.uid}`}
          className="btn btn-floating blue lighten-1"
        >
          {props.profile.initials}
        </NavLink>
      </li>
    </ul>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SignedInLinks);
