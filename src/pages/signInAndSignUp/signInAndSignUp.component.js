import React from 'react';
import SignIn from '../../components/signIn/signIn.component';
import SignUp from '../../components/signUp/signUp.component';
import './signInAndSignUp.styles.scss';

const SignInAndSignUp = () => (
  <div className="signInAndSignUpContainer">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInAndSignUp;
