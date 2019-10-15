import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import PropTypes from 'prop-types';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_DGQE6QJh7jDOOYYz7YlCrAtS00uZITvJgs';

  const onToken = (token) => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then(() => {
        alert('succesful payment');
      })
      .catch((error) => {
        console.log('Payment Error: ', JSON.parse(error));
        alert(
          'There was an issue with your payment! Please make sure you use the provided credit card.',
        );
      });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="ShinCat&HanDog." // the pop-in header title
      currency="USD"
      shippingAddress
      billingAddress
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      alipay // accept Alipay (default false)
      token={onToken} // submit callback
      stripeKey={publishableKey}
    />
  );
};

StripeCheckoutButton.propTypes = {
  price: PropTypes.number.isRequired,
};

export default StripeCheckoutButton;
