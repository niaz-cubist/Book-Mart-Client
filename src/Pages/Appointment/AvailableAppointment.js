
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AppointmentModal from './AppointmentModal';
import AppointmentOption from './AppointmentOption';

const AvailableAppointment = ({ selectedDate }) => {

    const loader = useLoaderData()
    console.log(loader);

    const [treatment, setTreatment] = useState(null)



    return (
        <div className='my-6'>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
                {
                    loader.map(option => <AppointmentOption
                        option={option}
                        setTreatment={setTreatment}

                    ></AppointmentOption>)
                }
            </div>
            {
                treatment &&
                <AppointmentModal
                    treatment={treatment}
                    selectedDate={selectedDate}
                    setTreatment={setTreatment}
                ></AppointmentModal>
            }
        </div>
    );
};

export default AvailableAppointment;