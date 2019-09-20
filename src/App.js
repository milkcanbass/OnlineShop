import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

// Components
import LandingPage from './pages/landing/landing.component';
import Header from './components/header/header.components';
import Modal from './components/modal/modal.component';
import ShopPage from './pages/shop/shop.component';
import Dede from './pages/shop/dede';

import './_App.scss';

import { auth, createUserProfDoc } from './firebase/firebase.utils';

import { setUserLogin } from './redux/user/user.action';

class App extends Component {
  // for unsucscribe open subscriptin(google auth)
  unsubscribeFromAuth = null;

  // To check if user login
  componentDidMount() {
    const { setUserLogin } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfDoc(userAuth);

        userRef.onSnapshot(snapShot => {
          setUserLogin({ id: snapShot.id, ...snapShot.data() });
        });
      } else {
        setUserLogin(userAuth);
      }
    });
  }

  // For logout
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const { user } = this.props;

    return (
      <div>
        {/* for changing header by auth */}
        <Header user={user} />
        <Modal />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/dede" component={Dede} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setUserLogin: payload => dispatch(setUserLogin(payload)),
});

const mapStateToProps = state => ({
  user: state.user.user,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
