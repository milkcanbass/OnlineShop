import React, { useState } from 'react';
import './signUp.styles.scss';
import InputForm from '../inputForm/inputForm.component';
import MyButton from '../myButton/myButton.component';
import { createUserProfDoc, auth } from '../../firebase/firebase.utils';

const SignUp = () => {
  const [signUpState, setSignUpState] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const { email, password, displayName, confirmPassword } = signUpState;

  const onSubmitHandler = async e => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
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
      console.log(err);
    }
  };

  const onChangeHandler = e => {
    setSignUpState({
      ...signUpState,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="signUpContainer">
      <h2 className="signUpTitle">SIGN UP</h2>
      <span className="signUpSubTitle">Creat an account</span>
      <form className="inputForms" onSubmit={e => onSubmitHandler(e)}>
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

export default SignUp;
