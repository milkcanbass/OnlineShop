import React, { Component } from 'react';
import './landing.styles.scss';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { createStructuredSelector } from 'reselect';
import Top from '../../top/top.component';
import LandingMenu from '../../landingMenu/landingMenu.component';
import {
  firestore,
  donationData,
  convertDataSnapshotToMap,
} from '../../../firebase/firebase.utils';
import { updateDonationData } from '../../../redux/donation/donation.actions';
import { updateShopData } from '../../../redux/myShop/myShop.actions';
import { selectDropdownOpen } from '../../../redux/cart/cart.selectors';
import { closeDropdown } from '../../../redux/cart/cart.action';

class LandingPage extends Component {
  // download item data
  componentDidMount() {
    const {
      updateShopData, updateDonationData, dropdownOpen, closeDropdown,
    } = this.props;
    // close dropDown when move to top page
    if (dropdownOpen) {
      closeDropdown();
    }
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
  updateDonationData: PropTypes.func.isRequired,
  myShopData: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])),
  dropdownOpen: PropTypes.bool.isRequired,
  closeDropdown: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  updateDonationData: (data) => dispatch(updateDonationData(data)),
  updateShopData: (data) => dispatch(updateShopData(data)),
  closeDropdown: () => dispatch(closeDropdown()),
});

const mapStateToProps = createStructuredSelector({
  dropdownOpen: selectDropdownOpen,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LandingPage);
