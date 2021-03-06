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
  const { email, password, displayName } = signUpState;

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      createUserProfDoc(user, { displayName });
      modalCloseWindow();
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
      <form className="inputForms" onSubmit={(e) => onSubmitHandler(e)}>
        <InputForm
          type="text"
          name="displayName"
          label="Display Name"
          value={displayName}
          handleChange={onChangeHandler}
          autoComplete="off"
          required
        />
        <InputForm
          type="email"
          name="email"
          label="Email"
          value={email}
          handleChange={onChangeHandler}
          autoComplete="off"
          required
        />
        <InputForm
          type="password"
          name="password"
          label="Password"
          value={password}
          handleChange={onChangeHandler}
          autoComplete="off"
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
