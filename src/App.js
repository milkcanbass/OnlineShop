import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Components
import LandingPage from './components/pages/landing/landing.component';
import Header from './components/header/header.components';
import Modal from './components/modal/modal.component';
import ChekoutPage from './components/pages/checkout/checkout.component';
import DonationPage from './components/pages/donation/donation.component';
import MyShopRoot from './components/pages/myShopRoot/myShopRoot.component';
import Footer from './components/footer/footer.components';

import {
  auth,
  createUserProfDoc,
  addCollectionAndDocumentsToDatabase,
  firestore,
  donationData,
} from './firebase/firebase.utils';
import { setUserLogin } from './redux/user/user.action';
import { updateDonationData } from './redux/donation/donation.actions';
import './_App.scss';

import { createStructuredSelector } from 'reselect';
import { selectUser } from './redux/user/user.selectors';
import { selectDonations } from './redux/donation/donation.selectors';

class App extends Component {
  // for unsucscribe open subscriptin(google auth)
  unsubscribeFromAuth = null;

  // To check if user login
  componentDidMount() {
    addCollectionAndDocumentsToDatabase;

    const { setUserLogin, updateDonationData } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfDoc(userAuth);

        userRef.onSnapshot(snapShot => {
          setUserLogin({ id: snapShot.id, ...snapShot.data() });
        });
      } else {
        setUserLogin(userAuth);
        // addCollectionAndDocumentsToDatabase('donationData', donationData.map(item => item));
      }
    });

    const donationDataRef = firestore.collection('donationData');
    donationDataRef.onSnapshot(async snapShot => {
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
          <Route path="/donation" component={DonationPage} />
          <Route path="/myshop" component={MyShopRoot} />
          <Route path="/checkout" component={ChekoutPage} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setUserLogin: payload => dispatch(setUserLogin(payload)),
  updateDonationData: payload => dispatch(updateDonationData(payload)),
});

const mapStateToProps = createStructuredSelector({
  user: selectUser,
  donationData: selectDonations,
});

App.propTypes = {
  setUserLogin: PropTypes.func,
  user: PropTypes.object,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
