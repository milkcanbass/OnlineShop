import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';
import { toggleSignInPage } from '../../redux/signInSinUp/signInSinUp.action';
import { activeUnderline } from '../../utils/menu.utils';
import './signInSignUpTitle.styles.scss';

class SignInSignUpTitle extends Component {
  componentDidMount() {
    activeUnderline('.target', '.active.title');
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.signIn != prevProps.signIn) {
      activeUnderline('.target', '.active.title');
    }
  }

  render() {
    const { toggleSignInPage, signIn } = this.props;

    return (
      <div className="wrapper">
        <nav className="titleContainer">
          <ul>
            <li
              className={`${signIn ? 'active' : ''} title`}
              onClick={!signIn ? () => toggleSignInPage() : null}
            >
              <a>SIGN IN</a>
              <span className="target" />
            </li>
            <li
              className={`${!signIn ? 'active' : ''} title`}
              onClick={signIn ? () => toggleSignInPage() : null}
            >
              <a> SIGN UP</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

const mapsDispatchToProps = (dispatch) => ({
  toggleSignInPage: () => dispatch(toggleSignInPage()),
});

export default connect(
  null,
  mapsDispatchToProps,
)(SignInSignUpTitle);
