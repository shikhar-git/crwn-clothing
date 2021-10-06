import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton= ({price})=>{
const priceForStripe=price*100;
const publishableKey="pk_test_51JhSwTSFzBV3cmg4I4WVo5DJa80lpr1MU6xFNpTda68MrH3R5Jq1cC2eYrOVOL1egeU6ZkuuWFJVvHwadTr9ETPp00I7u3heXN";

const onToken=token=>{
    console.log(token);
    alert('Payment Successful');
}

return (
    <StripeCheckout label='Pay Now'
    name='CRWN Clothing Ltd.'
    billingAddress
    shippingAddress
    image='htps://http://svgshare.com/i/CUz.svg'
    description={`Your total is $${price}`}
    amount={priceForStripe}
    panelLabel='Pay Now'
    token={onToken}
    stripeKey={publishableKey}
    />
)
 

};

export default StripeCheckoutButton;