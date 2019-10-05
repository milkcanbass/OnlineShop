import React, { useState } from 'react';
import './signUp.styles.scss';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import InputForm from '../inputForm/inputForm.component';
import MyButton from '../myButton/myButton.component';
import { createUserProfDoc, auth } from '../../firebase/firebase.utils';
import { modalCloseWindow, modalToggleWindow } from '../../redux/modal/modal.action';

const SignUp = ({ modalCloseWindow, modalToggleWindow }) => {
  const [signUpState, setSignUpState] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const {
    email, password, displayName, confirmPassword,
  } = signUpState;

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      modalCloseWindow();
      modalToggleWindow('error', "Passwords don't match");
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      createUserProfDoc(user, { displayName });
      setSignUpState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    } catch (err) {
      modalCloseWindow();
      modalToggleWindow('error', err.message);
    }
  };

  const onChangeHandler = (e) => {
    setSignUpState({
      ...signUpState,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="signUpContainer">
      <h2 className="signUpTitle">SIGN UP</h2>
      <span className="signUpSubTitle">Creat an account</span>
      <form className="inputForms" onSubmit={(e) => onSubmitHandler(e)}>
        <InputForm
          type="text"
          name="displayName"
          label="Display Name"
          value={displayName}
          handleChange={onChangeHandler}
          required
        />
        <InputForm
          type="email"
          name="email"
          label="Email"
          value={email}
          handleChange={onChangeHandler}
          required
        />
        <InputForm
          type="password"
          name="password"
          label="Password"
          value={password}
          handleChange={onChangeHandler}
          required
        />
        <InputForm
          type="password"
          name="confirmPassword"
          label="Confirm Password"
          value={confirmPassword}
          handleChange={onChangeHandler}
          required
        />
        <div className="signUpButtons">
          <MyButton type="submit">Register</MyButton>
        </div>
      </form>
    </div>
  );
};

SignUp.propTypes = {
  modalToggleWindow: PropTypes.func.isRequired,
  modalCloseWindow: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  modalToggleWindow: (type, message) => dispatch(modalToggleWindow(type, message)),
  modalCloseWindow: () => dispatch(modalCloseWindow()),
});

export default connect(
  null,
  mapDispatchToProps,
)(SignUp);
