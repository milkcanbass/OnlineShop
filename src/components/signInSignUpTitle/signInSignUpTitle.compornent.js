import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { toggleSignInPage } from '../../redux/signInSinUp/signInSinUp.action';
// import { activeUnderline } from '../../utils/menu.utils';
import './signInSignUpTitle.styles.scss';

class SignInSignUpTitle extends Component {
  // doesnt suit to the format
  // componentDidMount() {
  //   activeUnderline('.target', '.active.title');
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   if (this.props.signIn != prevProps.signIn) {
  //     activeUnderline('.target', '.active.title');
  //   }
  // }

  render() {
    const { toggleSignInPage, signIn } = this.props;

    return (
      <div className="wrapper">
        <div className="listWrapper">
          <div
            className={`${signIn ? 'active' : ''} title`}
            onClick={!signIn ? () => toggleSignInPage() : null}
          >
            <a>SIGN IN</a>
            <span className="target" />
          </div>
          <div
            className={`${!signIn ? 'active' : ''} title`}
            onClick={signIn ? () => toggleSignInPage() : null}
          >
            <a> SIGN UP</a>
          </div>
        </div>
      </div>
    );
  }
}

SignInSignUpTitle.propTypes = {
  signIn: PropTypes.bool.isRequired,
};

const mapsDispatchToProps = (dispatch) => ({
  toggleSignInPage: () => dispatch(toggleSignInPage()),
});

export default connect(
  null,
  mapsDispatchToProps,
)(SignInSignUpTitle);
