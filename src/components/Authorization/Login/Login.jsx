import React from "react";
import { NavLink } from "react-router-dom";
import c from "./Login.module.scss";
<<<<<<< HEAD
import LoginForm from "./LoginForm/LoginForm";
=======
import LoginForm from './LoginForm/LoginForm';
>>>>>>> santiago/feature/test-repo

const LoginPage = (props) => {
  return (
    <div className={c.login}>
      <div className={`loginTitle`}>Sign in</div>
      <LoginForm />
      <div className={c.login__link}>
        <NavLink to="/request-to-reset" className={c.login__forgetPassword}>
          I don’t remember my password
        </NavLink>
      </div>
    </div>
<<<<<<< HEAD
  );
};

export default LoginPage;
=======
  );  
};



export default LoginPage;
>>>>>>> santiago/feature/test-repo
