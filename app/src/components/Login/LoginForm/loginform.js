import React from "react";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";

import "./style.css";
import ProfileLogo from "../../img/avatar.svg";
import * as selectors from "../../../reducers";
import * as actions from "../../../actions/auth";

const renderInput = ({ input, meta, label }) => (
  <div
    className={
      meta.active
        ? "input-div one focus"
        : meta.errors && meta.touched
        ? "input-div one form-error"
        : meta.dirty
        ? "input-div one focus"
        : "input-div one"
    }
  >
    <div className="i">
      <FontAwesomeIcon icon={label === "Usuario" ? faUser : faLock} />
    </div>
    <div>
      <h5>{label}</h5>
      <input
        {...input}
        className="input"
        type={label === "Contraseña" ? "password" : "text"}
      />
    </div>
    {meta.error && meta.touched && (
      <span className="errorMessage">{meta.error}</span>
    )}
  </div>
);

const LoginForm = ({ handleSubmit, submitting, onSubmit }) => {
  return (
    <div className="login-form-container">
      <img className="avatar" src={ProfileLogo} alt="" />
      <form
        onSubmit={handleSubmit((values) =>
          onSubmit(values.user, values.password)
        )}
      >
        <h2>Bienvenido</h2>
        <Field
          name="user"
          type="text"
          label="Usuario"
          component={renderInput}
        />
        <Field
          name="password"
          type="password"
          label="Contraseña"
          component={renderInput}
        />
        <Link to="/register">
          <small>¿No tienes una cuenta?</small>
        </Link>
        <button className="login-btn" type="submit" disabled={submitting}>
          Login
        </button>
      </form>
    </div>
  );
};

const validate = (values) => {
  const errors = {};

  if (!values.user) {
    errors.user = "Campo requerido";
  }

  if (!values.password) {
    errors.password = "Campo requerido";
  }

  return errors;
};

export default reduxForm({
  form: "loginForm",
  destroyOnUnmount: false,
  validate,
})(
  connect(
    (state) => ({
      isLoading: selectors.getIsAuthenticating(state),
      error: selectors.getAuthenticatingError(state),
      isAuthenticated: selectors.isAuthenticated(state),
      authUsername: selectors.getAuthUsername(state),
    }),
    (dispatch) => ({
      onSubmit(user, password) {
        console.log(user, password);
        dispatch(actions.startLogin(user, password));
      },
    })
  )(LoginForm)
);
