<<<<<<< HEAD
import React from "react";
=======
import React from 'react';
>>>>>>> santiago/feature/test-repo
import { connect } from "react-redux";
import Login from "./Login";

const mapStateToProps = (state) => {
  return {
<<<<<<< HEAD
    typeLoginPassword: state.login.typeLoginPassword,
  };
};

class LoginContainer extends React.Component {
  render() {
    return <Login {...this.props} />;
=======
    typeLoginPassword: state.login.typeLoginPassword
  };
}

class LoginContainer extends React.Component {
  render() {
      return (
          <Login {...this.props} />
      )
>>>>>>> santiago/feature/test-repo
  }
}
export default connect(mapStateToProps)(LoginContainer);
