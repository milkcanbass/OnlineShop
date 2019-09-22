import React from 'react';
import SignIn from '../../signIn/signIn.component';
import SignUp from '../../signUp/signUp.component';
import './signInAndSignUp.styles.scss';

const SignInAndSignUp = () => (
  <div className="signInAndSignUpContainer">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInAndSignUp;
