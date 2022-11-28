
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Firebase/AuthProvider';

const AppointmentModal = ({ treatment, selectedDate, setTreatment }) => {
    const { name: treatmentName, slots, price } = treatment

    const { user } = useContext(AuthContext)
    // console.log()
    const handleBooking = event => {
        event.preventDefault();
        const from = event.target;
        const slot = from.slot.value;
        const name = from.name.value;
        const email = from.email.value;
        const password = from.password.value;
        console.log(slot)

        const booking = {
            treatment: treatmentName,
            patient: name,
            slot,
            email,
            password,
            price
        }
        console.log(booking)

        fetch('https://bookmart-xi.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })

            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    setTreatment(true)
                    toast.success('booking confirmed')

                }
                else {
                    toast.error(data.message)
                }
            })

    }
    return (
        <div>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{treatmentName}</h3>
                    <form onSubmit={handleBooking}>
                        <input type="text" name='name' defaultValue={user?.displayName
                        } disabled placeholder="Your name" className="input input-bordered my-2 input-primary w-full " />
                        <input type="email" name='email' defaultValue={user?.email} disabled placeholder="input email" className="input input-bordered my-2 input-primary w-full " />
                        <input type="password" name='password' defaultValue={user?.password} placeholder="input password" className="input input-bordered my-2 input-primary w-full " />
                        <input type="submit" value='submittt' className='btn btn-accent w-full my-2  ' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AppointmentModal;