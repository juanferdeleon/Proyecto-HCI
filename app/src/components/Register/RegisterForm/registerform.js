import React from "react";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";

import "./style.css";
import ProfileLogo from "../../img/avatar.svg";
import { connect } from "react-redux";
import * as selectors from "../../../reducers";
import * as actions from "../../../actions/createuser";

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
      <FontAwesomeIcon icon={label === "Contraseña" ? faLock : faUser} />
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

const RegisterForm = ({ handleSubmit, submitting, onSubmit }) => {
  return (
    <div className="register-form-container">
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
          label="Correo Electronico"
          component={renderInput}
        />
        <Field name="name" type="text" label="Nombre" component={renderInput} />
        <Field
          name="password"
          type="password"
          label="Contraseña"
          component={renderInput}
        />
        <Link to="/login">
          <small>¿Ya tienes una cuenta?</small>
        </Link>
        <button className="register-btn" type="submit" disabled={submitting}>
          Register
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

  if (!values.name) {
    errors.name = "Campo requerido";
  }

  if (!values.password) {
    errors.password = "Campo requerido";
  }

  return errors;
};

export default reduxForm({
  form: "registerForm",
  destroyOnUnmount: false,
  validate,
})(
  connect(
    (state) => ({
      isLoading: selectors.getIsCreatingUser(state),
      error: selectors.getCreatingUserErrorMsg(state),
      isAuthenticated: selectors.isAuthenticated(state),
    }),
    (dispatch) => ({
      onSubmit(user, password) {
        dispatch(actions.createUser(user, password));
      },
    })
  )(RegisterForm)
);
