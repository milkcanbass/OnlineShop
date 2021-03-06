import React, { Component, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { auth, createUserProfDoc, getUserCartRef } from './firebase/firebase.utils';
import { setUserLogin } from './redux/user/user.action';
import './_App.scss';
import { selectDonations } from './redux/donation/donation.selectors';
import lazyLoadingImport from './utils/lazyLoadingImport';
import { selectUserId } from './redux/user/user.selectors';
import { setCartInitial } from './redux/cart/cart.action';

// Components
import LandingPage from './components/pages/landing/landing.component';
import Header from './components/header/header.components';
import Footer from './components/footer/footer.components';
import Modal from './components/modal/modal.component';

// code splitting
const CheckoutPage = lazy(() => import('./components/pages/checkout/checkout.component'));
const MyShopRoot = lazy(() => import('./components/pages/myShopRoot/myShopRoot.component'));
const DonationPage = lazy(() => import('./components/pages/donation/donation.component'));
const NotFoundPage = lazy(() => import('./components/pages/notFound/notFound.component'));

class App extends Component {
  // for subscribe(google auth)
  unsubscribeFromAuth = null;

  // To check if user login
  componentDidMount() {
    const { setUserLogin, setCartInitial } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      // This is user signIn and signUp
      if (userAuth) {
        const userRef = await createUserProfDoc(userAuth);
        userRef.onSnapshot(async (snapShot) => {
          setUserLogin(snapShot.id);
          getUserCartRef(snapShot.id);
        });
      } else {
        // For Logout
        setUserLogin(userAuth);
        setCartInitial();
      }
    });
  }

  // For prevent memory leak by subscribing
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="appContainer">
        <Header />
        <Modal />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/donation" component={lazyLoadingImport(DonationPage)} />
          <Route path="/myshop" component={lazyLoadingImport(MyShopRoot)} />
          <Route exact path="/checkout" component={lazyLoadingImport(CheckoutPage)} />
          <Route path="*" component={lazyLoadingImport(NotFoundPage)} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  setUserLogin: PropTypes.func.isRequired,
  user: PropTypes.string,
  setCartInitial: PropTypes.func.isRequired,
};

App.defaultProps = {
  userId: '',
};

const mapDispatchToProps = (dispatch) => ({
  setUserLogin: (payload) => dispatch(setUserLogin(payload)),
  setCartInitial: () => dispatch(setCartInitial()),
});

const mapStateToProps = createStructuredSelector({
  donationData: selectDonations,
  userId: selectUserId,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
