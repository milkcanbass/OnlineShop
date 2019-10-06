import React, { Component } from 'react';
import './donation.styles.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { PropTypes } from 'prop-types';
import { selectDonations } from '../../../redux/donation/donation.selectors';
import { addItem } from '../../../redux/cart/cart.action';
import MyButton from '../../myButton/myButton.component';
import Spinner from '../../spinner/spinner.component';

class DonationPage extends Component {
  state = {
    loading: true,
  };

  render() {
    const { donations, addItem } = this.props;
    return (
      <div className="donationPageContainer">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/jaifeimaohandagou.appspot.com/o/webImages%2Fdonation01.jpg?alt=media&token=39dcc44b-243b-4856-9204-52ad71ab96d1"
          className="img"
          onLoad={() => this.setState({ loading: false })}
          alt="pageBackgroundImage"
        />

        {this.state.loading ? (
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
                  {donations.map((donation) => (
                    <MyButton key={donation.id} onClick={() => addItem(donation)} donation>
                      $
                      {donation.price}
                    </MyButton>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    );
  }
}

DonationPage.propTypes = {
  donations: PropTypes.shape({}).isRequired,
  addItem: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({ donations: selectDonations });
const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DonationPage);
