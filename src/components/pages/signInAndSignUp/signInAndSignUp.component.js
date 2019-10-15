import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import SignIn from '../../signIn/signIn.component';
import SignUp from '../../signUp/signUp.component';
import SignInSignUpTitle from '../../signInSignUpTitle/signInSignUpTitle.compornent';
import { selectSignIn } from '../../../redux/signInSinUp/signInSinUp.selectors';
import './signInAndSignUp.styles.scss';

const SignInAndSignUp = ({ signIn }) => (
  <div className="signInAndSignUpContainer">
    <SignInSignUpTitle signIn={signIn} />
    {signIn ? <SignIn /> : <SignUp />}
  </div>
);

SignInAndSignUp.propTypes = {
  signIn: PropTypes.bool.isRequired,
};

const mapStateToProps = createStructuredSelector({
  signIn: selectSignIn,
});

export default connect(mapStateToProps)(SignInAndSignUp);
