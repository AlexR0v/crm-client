import React from "react";
import { connect } from "react-redux";
import ChangePassword from "./ChangePassword";

<<<<<<< HEAD
class ChangePasswordContainer extends React.Component {
  render() {
    return <ChangePassword {...this.props} />;
=======

class ChangePasswordContainer extends React.Component {

  render() {
    return (
      <ChangePassword
        {...this.props}

      />
    );
>>>>>>> santiago/feature/test-repo
  }
}

export default connect()(ChangePasswordContainer);
