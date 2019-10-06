import React, { Component } from 'react';
import './landing.styles.scss';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import Top from '../../top/top.component';
import LandingMenu from '../../landingMenu/landingMenu.component';
import { firestore, donationData } from '../../../firebase/firebase.utils';
import { updateDonationData } from '../../../redux/donation/donation.actions';

class LandingPage extends Component {
  componentDidMount() {
    const { updateDonationData } = this.props;
    const donationDataRef = firestore.collection('donationData');
    donationDataRef.onSnapshot(async (snapshot) => {
      const data = donationData(snapshot);
      updateDonationData(data);
      console.log(data);
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
};

const mapDispatchToProps = (dispatch) => ({
  updateDonationData: (data) => dispatch(updateDonationData(data)),
});

export default connect(
  null,
  mapDispatchToProps,
)(LandingPage);
