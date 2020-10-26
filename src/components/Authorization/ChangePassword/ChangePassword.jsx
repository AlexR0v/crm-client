import React from "react";
import { NavLink, Redirect } from "react-router-dom";
import { Form, Field } from "react-final-form";
import { required, newPassword } from "../../../utils/validation/validation";
import { Password } from "../FormControl/FormControl";
import c from "./ChangePassword.module.scss";
import arrow from "../../../assets/images/arrow-left.png";
import eyeClose from "../../../assets/images/close-eye.png";
import eyeOpen from "../../../assets/images/open-eye.png";
<<<<<<< HEAD
=======
import axios from 'axios';

>>>>>>> santiago/feature/test-repo

class ChangePasswordForm extends React.Component {
  state = {
    isShowNewPassword: false,
    isShowConfirmNewPassword: false,
    isRequestToLogin: false,
<<<<<<< HEAD
=======
    error: {},
    message: {},
    email: null,
    token: null,
>>>>>>> santiago/feature/test-repo
  };

  toggleShowNewPassword = () => {
    const { isShowNewPassword } = this.state;
    this.setState({ isShowNewPassword: !isShowNewPassword });
  };

  toggleShowConfirmPassword = () => {
    const { isShowConfirmNewPassword } = this.state;
    this.setState({ isShowConfirmNewPassword: !isShowConfirmNewPassword });
  };

  composeValidators = (...validators) => (value) =>
    validators.reduce(
      (error, validator) => error || validator(value),
      undefined
    );

<<<<<<< HEAD
  onSubmit = (value) => {
    console.log(value);
    this.setState({ isRequestToLogin: true });
  };

  render() {
=======
  onSubmit = (form) => {
    let email = window.location.search.split('?')[1].split('&')[0].split('=')[1];
    let token = window.location.search.split('?')[1].split('&')[1].split('=')[1];


    if(!token) {
      alert('You are not authorized');
      return;
    }
    axios.post('http://18.184.124.193/api/v1/reset-password', {
      password: form.newPassword,
      password_confirmation: form.confirmNewPassword,
      token: token,
      email: email
    }).then(res => {
      if(res.data.success) {
        this.setState({ 'message': 'Your password has been successfully changed' });
        this.setState({ 'error': {} });
        setTimeout(() => {
          window.location = '/login';
        }, 5000);
      }else{
        this.setState({'error':  res.data.errors});
      }
    }).catch(err => {
      this.setState({'error': { 500: 'Initial server error'} });
    });
  };

  render() {
    const { error, message } = this.state;
>>>>>>> santiago/feature/test-repo
    if (this.state.isRequestToLogin) {
      return <Redirect to="/login" />;
    }
    const { isShowNewPassword, isShowConfirmNewPassword } = this.state;
    return (
      <Form
        onSubmit={this.onSubmit}
        validate={(values) => {
          const errors = {};
          if (values.confirmNewPassword !== values.newPassword) {
            errors.confirmNewPassword = "Must match";
          }
          return errors;
        }}
      >
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit} className={c.form}>
            <div className={c.form__item}>
              <Field
                name="newPassword"
                types={isShowNewPassword ? "text" : "password"}
                type="password"
                component={Password}
                placeholder="New Password"
                validate={this.composeValidators(required, newPassword)}
              />
              <span
                className="passwordEye"
                onClick={() => this.toggleShowNewPassword()}
              >
                {isShowNewPassword ? (
                  <img src={eyeOpen} alt="" />
                ) : (
                  <img src={eyeClose} alt="" />
                )}
              </span>
            </div>
            <div className={c.form__item}>
              <Field
                name="confirmNewPassword"
                types={isShowConfirmNewPassword ? "text" : "password"}
                component={Password}
                placeholder="Confirm New Password"
                validate={this.composeValidators(required)}
              />
              <span
                className="passwordEye"
                onClick={() => this.toggleShowConfirmPassword()}
              >
                {isShowConfirmNewPassword ? (
                  <img src={eyeOpen} alt="" />
                ) : (
                  <img src={eyeClose} alt="" />
                )}
              </span>
            </div>
<<<<<<< HEAD
=======
            {Object.values(error).length > 0 && (
              <div className={c.error}>
                <div className={c.error__title}>Error</div>
                <ul className={c.error__list}>
                  {Object.values(error).map((error) => (
                    <li key={Object.keys(error)} className={c.error__item}>
                      {Object.values(error)}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {Object.values(message).length > 0 && (
              <div className={c.success}>
                <div className={c.success__title}>{Object.values(message)}</div>
              </div>
            )}
>>>>>>> santiago/feature/test-repo
            <div className={c.form__btn}>
              <button type="submit" className={`btn`}>
                CHANGE
              </button>
            </div>
          </form>
        )}
      </Form>
    );
  }
}

const ChangePassword = (props) => {
  return (
    <div className={c.changePassword}>
      <div className={`loginTitle`}>Change Password</div>
      <ChangePasswordForm />
      <div className={`backLink`}>
        <NavLink to="/login" className={`loginBackLink`}>
          <img src={arrow} alt="" /> Back to login
        </NavLink>
      </div>
    </div>
  );
};

export default ChangePassword;
