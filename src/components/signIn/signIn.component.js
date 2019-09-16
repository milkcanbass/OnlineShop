import React, { useState } from 'react';
import './signIn.styles.scss';
import InputForm from '../inputForm/inputForm.component';

const SignIn = () => {
  const [signInState, setiSgnInState] = useState({
    email: '',
    password: '',
  });
  const { email, password } = signInState;

  const onSubmitHandler = e => {
    e.preventDefault();
    console.log(e);
  };

  const onChangeHadler = e => {
    setiSgnInState({
      ...signInState,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="signInContainer">
      <h2>I have an account</h2>
      <form className="inputForms" onSubmit={e => onSubmitHandler(e)}>
        <InputForm
          type="email"
          name="email"
          label="Email"
          value={email}
          handleChange={onChangeHadler}
          required
        />
        <InputForm
          type="password"
          name="password"
          label="Password"
          value={password}
          handleChange={onChangeHadler}
          required
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default SignIn;
