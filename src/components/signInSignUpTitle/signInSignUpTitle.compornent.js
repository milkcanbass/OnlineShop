import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleSignInPage } from '../../redux/signInSinUp/signInSinUp.action';
import './signInSignUpTitle.styles.scss';

class SignInSignUpTitle extends Component {
  // For the case initial render didn't draw line
  componentDidMount() {
    // const target = document.querySelector('.target');
    // console.log(target);
    // const active = document.querySelector('.active.title');
    // const left = active.getBoundingClientRect();
    // const left = active.getBoundingClientRect().left + window.pageXOffset;
    // const top = active.getBoundingClientRect().top + window.pageYOffset;
    // const { width, height } = rect;
    // target.style.width = `${width}px`;
    // target.style.height = `${height}px`;
    // target.style.left = `${left}px`;
    // target.style.top = `${top}px`;
    // target.style.borderColor = 'red';
    // target.style.transform = 'none';
    // }
  }

  componentDidUpdate() {
    // if (this.props.signIn != nextProps.signIn) {
    const target = document.querySelector('.target');
    const active = document.querySelector('.active.title');
    console.log(active);
    const rect = active.getBoundingClientRect();
    const left = active.getBoundingClientRect().left + window.pageXOffset;
    const top = active.getBoundingClientRect().top + window.pageYOffset + 3;
    const { width, height } = rect;
    target.style.width = `${width}px`;
    target.style.height = `${height}px`;
    target.style.left = `${left}px`;
    target.style.top = `${top}px`;

    console.log(left, rect.left);

    // }
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
