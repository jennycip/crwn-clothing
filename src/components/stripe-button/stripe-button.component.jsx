import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishablekey = 'pk_test_51IGM5zLcnu1kC0ezkPM2r3jJCiKX4ybWfxanUf9260vg5vJLlArUsNKjd5aOKLDUKjl0tVYMxdu1vv7v0brH3gCX00zUr4vklp';

    const onToken = token => {
        console.log(token);
        alert('Payment successful')
    }

    return (
        <StripeCheckout label='Pay Now' name='CRWN CLOTHING Ltd.' billingAddress shippingAddress
            image='http://svgshare.com/i/CUz.svg'
            description={`Your Total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishablekey} />
    )
}

export default StripeCheckoutButton;