import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Components
import LandingPage from './components/pages/landing/landing.component';
import Header from './components/header/header.components';
import Modal from './components/modal/modal.component';
import ShopPage from './components/pages/shop/shop.component';
import ChekoutPage from './components/pages/checkout/checkout.component';
import DonationPage from './components/pages/donation/donation.component';
import MyShop from './components/pages/myShop/myShop.component';
import MyShopRoot from './components/pages/myShopRoot/myShopRoot.component';

import { auth, createUserProfDoc } from './firebase/firebase.utils';
import { setUserLogin } from './redux/user/user.action';
import './_App.scss';

import { createStructuredSelector } from 'reselect';
import { selectUser } from './redux/user/user.selectors';

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

  // For prevent memory leak by subscribing
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const { user } = this.props;

    return (
      <div>
        <Header user={user} />
        <Modal />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/myshop" component={MyShopRoot} />
          <Route path="/donation" component={DonationPage} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setUserLogin: payload => dispatch(setUserLogin(payload)),
});

const mapStateToProps = createStructuredSelector({
  user: selectUser,
});

App.propTypes = {
  setUserLogin: PropTypes.func,
  user: PropTypes.object,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
