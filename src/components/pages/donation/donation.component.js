import React from 'react';
import './donation.styles.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { PropTypes } from 'prop-types';
import { selectDonations } from '../../../redux/donation/donation.selectors';
import { addItem } from '../../../redux/cart/cart.action';
import MyButton from '../../myButton/myButton.component';

const DonationPage = ({ match, donations, addItem }) => {
  const imageUrls =    'https://firebasestorage.googleapis.com/v0/b/jaifeimaohandagou.appspot.com/o/webImages%2Ffruit-and-snack-baskets.jpg?alt=media&token=9bf724b5-76cc-42c7-98f9-38c8dd29509d';

  return (
    <div className="donationPageContainer">
      <div style={{ backgroundImage: `url(${imageUrls})` }} className="img">
        <div className="imageCover" />
      </div>
      <div className="contentContainer">
        <div className="contentBackground" />
        <div className="textContainer">
          <div className="title">Thank you for your help!</div>
          <div className="text">We really appreciate your help.</div>
          <div className="donationButtons">
            {donations.map(donation => (
              <MyButton key={donation.id} onClick={() => addItem(donation)} donation>
                ${donation.price}
              </MyButton>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({ donations: selectDonations });
const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DonationPage);
