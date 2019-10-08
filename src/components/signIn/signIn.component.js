import React, { useState } from 'react';
import './signIn.styles.scss';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import firebase from 'firebase/app';
import InputForm from '../inputForm/inputForm.component';
import MyButton from '../myButton/myButton.component';
import { auth } from '../../firebase/firebase.utils';
import { modalToggleWindow, modalCloseWindow } from '../../redux/modal/modal.action';

const SignIn = ({ modalCloseWindow, modalToggleWindow }) => {
  const [signInState, setSignInState] = useState({
    email: '',
    password: '',
  });
  const { email, password } = signInState;

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password);
      modalCloseWindow();
    } catch (err) {
      modalCloseWindow();
      modalToggleWindow('error', err.message);
    }
  };

  const onChangeHandler = (e) => {
    setSignInState({
      ...signInState,
      [e.target.name]: e.target.value,
    });
  };
  const signInWithGoogleAccount = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.setCustomParameters({ prompt: 'select_account' });
    auth
      .signInWithPopup(provider)
      .then((result) => {
        modalCloseWindow();
      })
      .catch((err) => {
        const errorCode = err.code;
        modalCloseWindow();
        modalToggleWindow('error', err.message);
      });
  };

  return (
    <div className="signInContainer">
      <h2 className="signInTitle">SIGN IN</h2>
      <span className="signInSubTitle">I have an account</span>
      <form className="inputForms" onSubmit={(e) => onSubmitHandler(e)}>
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
        <div className="signInButtons">
          <MyButton type="submit">Sign in</MyButton>
          <MyButton onClick={signInWithGoogleAccount} googleButton>
            use Gmail Account
          </MyButton>
        </div>
      </form>
    </div>
  );
};

SignIn.propTypes = {
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
)(SignIn);
