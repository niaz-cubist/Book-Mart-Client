import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe('pk_test_51M7MeIJHbuyRCuFnVTCGRGFSNV2c50AytQDpuKbTXUxR0wiAvZC4Spr8rSCdxgrjvpklaP71xJvLfYiyVUtVpNui002eETGLLD');
const Payment = () => {
    const booking = useLoaderData()
    const { treatment, price, slot, appointmentDate } = booking
    return (
        <div>
            <h3 className='text-3x'>Pay for {treatment}</h3>
            <p className='text-xl'>Please pay <strong>${price}</strong> from your booking on {appointmentDate} at {slot}</p>
            <div className='w-96 y-12 py-12'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                        booking={booking}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;