import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
  const priceInCents = price * 100;
  const publishableKey =
    'pk_test_51HNZUmBl7Y2CUJRKLpqRFeRPy4Dk0CE56g0ZOBMkAjkgoiKCAGjVoerWHxXJ6hhQrLHfWj1jAxhSHGFAslwGRnSJ00hRrK7yqE';
  const onToken = (token) => {
    console.log(token);
    // the token is passed to your backend, where you create the charge
    alert(
      'Payment Successful.\nThanks for buying at Maximal Style. Enjoy your minimalist clothes!'
    );
  };
  return (
    <StripeCheckout
      label="Make your payment"
      name="Maximal Style Ltd."
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Total price: $${price}`}
      amount={priceInCents}
      panelLabel="Pay now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};
export default StripeCheckoutButton;
