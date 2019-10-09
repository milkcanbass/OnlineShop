import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleSignInPage } from '../../redux/signInSinUp/signInSinUp.action';
import './signInSignUpTitle.styles.scss';

class SignInSignUpTitle extends Component {
  componentDidUpdate(nextProps, nextState) {
    if (this.props.signIn != nextProps.signIn) {
      const active = document.querySelector('.active.title');
      console.log(active);

      const rect = active.getBoundingClientRect();
      console.log(rect);
    }
  }

  render() {
    const { toggleSignInPage, signIn } = this.props;

    function test() {
      // const { height } = target.getBoundingClientRect();
      // const left = target.getBoundingClientRect().left + window.pageXOffset;
      // const top = target.getBoundingClientRect().top + window.pageYOffset;
      // const color = colors[Math.floor(Math.random() * colors.length)];
      // target.style.width = `${width}px`;
      // target.style.height = `${height}px`;
      // target.style.left = `${left}px`;
      // target.style.top = `${top}px`;
      // target.style.borderColor = color;
      // target.style.transform = 'none';
      // function resizeFunc() {
      //   const active = document.getElementsByClassName('active');
      //   if (active) {
      //     const left = active.getBoundingClientRect().left + window.pageXOffset;
      //     const top = active.getBoundingClientRect().top + window.pageYOffset;
      //     target.style.left = `${left}px`;
      //     target.style.top = `${top}px`;
      //   }
      // }
      // window.addEventListener('resize', resizeFunc);
    }

    test();

    return (
      <div className="wrapper">
        <nav className="titleContainer">
          <ul>
            <li
              className={`${signIn ? 'active' : ''} title`}
              onClick={!signIn ? () => toggleSignInPage() : null}
            >
              <a>SIGN IN</a>
            </li>
            <li
              className={`${!signIn ? 'active' : ''} title`}
              onClick={signIn ? () => toggleSignInPage() : null}
            >
              <a> SIGN UP!!!!</a>
            </li>
          </ul>
        </nav>
        <span className="target" />
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
