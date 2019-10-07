import React, { Component } from 'react';
import './landing.styles.scss';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import Top from '../../top/top.component';
import LandingMenu from '../../landingMenu/landingMenu.component';
import {
  firestore,
  donationData,
  convertDataSnapshotToMap,
} from '../../../firebase/firebase.utils';
import { updateDonationData } from '../../../redux/donation/donation.actions';
import { updateShopData } from '../../../redux/myShop/myShop.actions';

class LandingPage extends Component {
  // download item data
  componentDidMount() {
    const { updateShopData, updateDonationData } = this.props;

    const myShopDataRef = firestore.collection('myShopData');
    myShopDataRef.onSnapshot(async (snapshot) => {
      const dataMap = convertDataSnapshotToMap(snapshot);
      updateShopData(dataMap);
    });

    const donationDataRef = firestore.collection('donationData');
    donationDataRef.onSnapshot(async (snapshot) => {
      const data = donationData(snapshot);
      updateDonationData(data);
    });
  }

  render() {
    return (
      <div className="landingPageContainer">
        <Top />
        <LandingMenu />
      </div>
    );
  }
}

LandingPage.propTypes = {
  updateDonationData: PropTypes.func,
  myShopData: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])),
};

const mapDispatchToProps = (dispatch) => ({
  updateDonationData: (data) => dispatch(updateDonationData(data)),
  updateShopData: (data) => dispatch(updateShopData(data)),
});

export default connect(
  null,
  mapDispatchToProps,
)(LandingPage);
