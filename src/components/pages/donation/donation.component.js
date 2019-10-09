import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import './donation.styles.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { PropTypes } from 'prop-types';
import { selectDonations } from '../../../redux/donation/donation.selectors';
import { addItem } from '../../../redux/cart/cart.action';
import { modalToggleWindow } from '../../../redux/modal/modal.action';
import MyButton from '../../myButton/myButton.component';
import Spinner from '../../spinner/spinner.component';
import { selectUser } from '../../../redux/user/user.selectors';

const DonationPage = ({
  donations, addItem, user, modalToggleWindow,
}) => {
  const [state, setState] = useState({
    loading: true,
  });

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
                    <MyButton key={donation.id} onClick={() => addItem(donation)} donation>
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

DonationPage.propTypes = {
  donations: PropTypes.shape([]).isRequired,
  addItem: PropTypes.func.isRequired,
  user: PropTypes.shape({}),
  modalToggleWindow: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({ donations: selectDonations, user: selectUser });
const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
  modalToggleWindow: (item, message) => dispatch(modalToggleWindow(item, message)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DonationPage);
