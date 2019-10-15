import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import './donation.styles.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { PropTypes } from 'prop-types';
import { selectDonations } from '../../../redux/donation/donation.selectors';
import { modalToggleWindow } from '../../../redux/modal/modal.action';
import MyButton from '../../myButton/myButton.component';
import Spinner from '../../spinner/spinner.component';
import { selectUserId } from '../../../redux/user/user.selectors';
import { addItemToCart } from '../../../firebase/firebase.utils';
import { selectCartId, selectDropdownOpen } from '../../../redux/cart/cart.selectors';

import { closeDropdown } from '../../../redux/cart/cart.action';

const DonationPage = ({
  donations,
  user,
  modalToggleWindow,
  cartId,
  dropdownOpen,
  closeDropdown,
}) => {
  const [state, setState] = useState({
    loading: true,
  });

  // close dropDown menu when move to this page
  useEffect(() => {
    if (dropdownOpen) {
      closeDropdown();
    }
  }, []);

  const page = (
    <div className="donationPageContainer">
      <img
        src="https://firebasestorage.googleapis.com/v0/b/jaifeimaohandagou.appspot.com/o/webImages%2Fdonation01.jpg?alt=media&token=39dcc44b-243b-4856-9204-52ad71ab96d1"
        className="img"
        onLoad={() => setState({ loading: false })}
        alt="pageBackgroundImage"
      />

      {state.loading ? (
        <Spinner />
      ) : (
        <>
          <div className="imageCover" />
          <div className="contentContainer">
            <div className="contentBackground" />
            <div className="textContainer">
              <div className="title">Thank you for your help!</div>
              <div className="text">We really appreciate your help.</div>
              {user ? (
                <div className="donationButtons">
                  {donations.map((donation) => (
                    <MyButton
                      key={donation.id}
                      onClick={() => addItemToCart(cartId, donation)}
                      donation
                    >
                      $
                      {donation.price}
                    </MyButton>
                  ))}
                </div>
              ) : (
                <MyButton
                  role="button"
                  id="signInAndSignUp"
                  onClick={(e) => {
                    modalToggleWindow(e.target.id);
                  }}
                  googleButton
                >
                  Sign In to donate
                </MyButton>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );

  return <div>{donations.length > 0 ? page : <Redirect to="/" />}</div>;
};

DonationPage.defaultProps = {
  user: {},
  cartId: '',
};

DonationPage.propTypes = {
  donations: PropTypes.shape([]).isRequired,
  user: PropTypes.shape({}),
  modalToggleWindow: PropTypes.func.isRequired,
  cartId: PropTypes.string,
  dropdownOpen: PropTypes.bool.isRequired,
  closeDropdown: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  donations: selectDonations,
  user: selectUserId,
  cartId: selectCartId,
  dropdownOpen: selectDropdownOpen,
});
const mapDispatchToProps = (dispatch) => ({
  modalToggleWindow: (item, message) => dispatch(modalToggleWindow(item, message)),
  closeDropdown: () => dispatch(closeDropdown()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DonationPage);
