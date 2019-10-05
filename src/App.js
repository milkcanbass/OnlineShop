import React, { Component, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import {
  auth, createUserProfDoc, firestore, donationData,
} from './firebase/firebase.utils';
import { setUserLogin } from './redux/user/user.action';
import { updateDonationData } from './redux/donation/donation.actions';
import './_App.scss';
import { selectUser } from './redux/user/user.selectors';
import { selectDonations } from './redux/donation/donation.selectors';
import lazyLoadingImport from './utils/lazyLoadingImport';

// Components
import LandingPage from './components/pages/landing/landing.component';
import Header from './components/header/header.components';
import Footer from './components/footer/footer.components';
import Modal from './components/modal/modal.component';

const CheckoutPage = lazy(() => import('./components/pages/checkout/checkout.component'));
const MyShopRoot = lazy(() => import('./components/pages/myShopRoot/myShopRoot.component'));
const DonationPage = lazy(() => import('./components/pages/donation/donation.component'));

class App extends Component {
  // for unsucscribe open subscriptin(google auth)
  unsubscribeFromAuth = null;

  // To check if user login
  componentDidMount() {
    const { setUserLogin, updateDonationData } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfDoc(userAuth);

        userRef.onSnapshot((snapShot) => {
          setUserLogin({ id: snapShot.id, ...snapShot.data() });
        });
      } else {
        setUserLogin(userAuth);
        // addCollectionAndDocumentsToDatabase('donationData', donationData.map(item => item));
      }
    });

    // Fetch donation data to pass it to donation page
    const donationDataRef = firestore.collection('donationData');
    donationDataRef.onSnapshot(async (snapShot) => {
      const finalData = donationData(snapShot);
      updateDonationData(finalData);
    });
  }

  // For prevent memory leak by subscribing
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const { user } = this.props;
    return (
      <div className="appContainer">
        <Header user={user} />

        <Modal />

        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/donation" component={lazyLoadingImport(DonationPage)} />
          <Route path="/myshop" component={lazyLoadingImport(MyShopRoot)} />
          <Route exact path="/checkout" component={lazyLoadingImport(CheckoutPage)} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  setUserLogin: PropTypes.func.isRequired,
  user: PropTypes.shape({}),
};

App.defaultProps = {
  user: null,
};

const mapDispatchToProps = (dispatch) => ({
  setUserLogin: (payload) => dispatch(setUserLogin(payload)),
  updateDonationData: (payload) => dispatch(updateDonationData(payload)),
});

const mapStateToProps = createStructuredSelector({
  user: selectUser,
  donationData: selectDonations,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
