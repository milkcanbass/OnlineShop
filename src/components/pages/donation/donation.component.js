import React, { useState } from 'react';
import './donation.styles.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { PropTypes } from 'prop-types';
import { selectDonations } from '../../../redux/donation/donation.selectors';
import { addItem } from '../../../redux/cart/cart.action';
import MyButton from '../../myButton/myButton.component';
import Spinner from '../../spinner/spinner.component';

const DonationPage = ({ donations, addItem }) => {
  const imageUrl =
    'https://firebasestorage.googleapis.com/v0/b/jaifeimaohandagou.appspot.com/o/webImages%2Ffruit-and-snack-baskets.jpg?alt=media&token=9bf724b5-76cc-42c7-98f9-38c8dd29509d';
  const [loading, setLoading] = useState({
    loading: true,
  });

  return (
    <div className="donationPageContainer">
      <img src={imageUrl} className="img" onLoad={() => setLoading({ loading: false })} />

      {loading.loading ? (
        <Spinner />
      ) : (
        <>
          <div className="imageCover" />
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
        </>
      )}
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
