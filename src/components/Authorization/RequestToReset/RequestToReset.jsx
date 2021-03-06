import React from "react";
import { NavLink, Redirect } from "react-router-dom";
import { Form, Field } from "react-final-form";
import { email, required } from "../../../utils/validation/validation";
import { Input } from "../FormControl/FormControl";
import c from "./RequestToReset.module.scss";
import arrow from "../../../assets/images/arrow-left.png";
import axios from 'axios';
import { GoogleReCaptcha } from 'react-google-recaptcha-v3';


class RequestToResetForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isRequestToLogin: false,
      isVerified: false,
      setToken: null,
      error: {},
      message: {},
    }; 
  }

  onSubmit = (form) => {
    this.setState({ 'error': {} });
    axios.post('http://18.184.124.193/api/v1/forgot-password', {
      ...form, recaptcha: this.state.setToken
    }).then(res => {
      if(res.data.success) {
        this.setState({ 'message': 'You have been sent a link to reset your password by email' });
        setTimeout( () => {
          window.location = '/login';
        }, 5000);
      } else {
        this.setState({'error':  res.data.errors});
      }
    }).catch(err => {
      this.setState({'error': { 500: 'Initial server error'} });
    });
  }

  composeValidators = (...validators) => (value) =>
    validators.reduce(
      (error, validator) => error || validator(value),
      undefined
    );

  render() {
    const { error, message } = this.state;
    if (this.state.isRequestToLogin) {
      return <Redirect to="/login" />;
    }
    return (  
      <Form onSubmit={this.onSubmit}>
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit} className={c.form}>
            <div className={c.form__item}>
              <Field
                name="email"
                component={Input}
                placeholder="Email address"
                validate={this.composeValidators(required, email)}
              />
            </div>
            <div>
              <GoogleReCaptcha onVerify={ (token) => { this.setState({'setToken': token}) }}  />
            </div>

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
            <div className={c.form__btn}>
              <button type="submit" className={`btn`}>
                reset password
              </button>
            </div>
          </form>
        )}
      </Form>
    );
  }
}

const RequestToReset = (props) => {
  return (
    <div className={c.request}>
      <div className={`loginTitle`}>Request to reset your password</div>
      <RequestToResetForm />
      <div className={`backLink`}>
        <NavLink to="/login" className={`loginBackLink`}>
          <img src={arrow} alt="logo" /> Back to login
        </NavLink>
      </div>
    </div>
  );
};

export default RequestToReset;
