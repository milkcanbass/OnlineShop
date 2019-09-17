import React, { useState } from 'react';
import './signUp.styles.scss';
import InputForm from '../inputForm/inputForm.component';
import MyButton from '../myButton/myButton.component';
import { signInWithGoogleAccount } from '../../firebase/firebase.utils';

const SignUp = () => {
  const [signUpState, setSignUpState] = useState({
    email: '',
    password: '',
    nickName: '',
    cart: [],
  });
  const { email, password, nickName } = signUpState;

  const onSubmitHandler = e => {
    e.preventDefault();
    console.log(e);
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
          name="nickName"
          label="NickName"
          value={nickName}
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
        <div className="signUpButtons">
          <MyButton type="submit">Register</MyButton>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
