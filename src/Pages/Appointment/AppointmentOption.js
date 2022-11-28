import React from 'react';

const AppointmentOption = ({ option, setTreatment }) => {

    return (
        <div>
            <div className="card w-80 mx-auto bg-base-100 shadow-xl my-10">
                <div className="card-body">
                    <figure><img className='h-64 w-11/12' src={option?.img} alt="Shoes" /></figure>
                    <h2 className="card-title">Name: {option.name}</h2>
                    <p>Price: {option.price}</p>
                    <p>Slot: {option.slot}</p>
                    <div className="card-actions justify-end">{/* <label onClick={() => setTreatment(option)} disabled={slots.length === 0} htmlFor="my-modal-3" className="btn btn-primary">Book appointment</label> */}
                        <label onClick={() => setTreatment(option)} htmlFor="my-modal-3" className="btn btn-primary" >Booked</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;