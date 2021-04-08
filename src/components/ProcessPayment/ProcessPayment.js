import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import {CardElement} from '@stripe/react-stripe-js';
import React from 'react';


const stripePromise = loadStripe('pk_test_51Ie17yBnWqJxKskHjiOEbItP8GGyoYO9mnR10WVA16nY4Emu4SznTJFfJyq9YsoLVoXLyQOTiEfDQJLIHOpFDhsL002U4Q2fIU');

const ProcessPayment = () => {
    return (
        <Elements stripe={stripePromise}>
            <CardElement
            options={{
                style: {
                base: {
                    fontSize: '16px',
                    color: '#424770',
                    '::placeholder': {
                    color: '#aab7c4',
                    },
                },
                invalid: {
                    color: '#9e2146',
                },
                },
            }}
            />
        </Elements>
    );
};

export default ProcessPayment;