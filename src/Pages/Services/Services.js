import React from 'react';
import fluoride from '../../assets/images/fluoride.png'
import cavity from '../../assets/images/cavity.png'
import whitening from '../../assets/images/whitening.png'
import ServiceCard from './ServiceCard';

const Services = () => {

    const serviceData = [
        {
            id: 1,
            name: 'Fluoride treatment',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta facilis dolorum dolores non hic quia rem harum quidem ea possimus?',
            img: fluoride
        },
        {
            id: 2,
            name: 'Cavity treatment',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta facilis dolorum dolores non hic quia rem harum quidem ea possimus?',
            img: cavity
        },
        {
            id: 3,
            name: 'Whitening treatment',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta facilis dolorum dolores non hic quia rem harum quidem ea possimus?',
            img: whitening
        }
    ]

    return (
        <div className='my-6'>
            <div className='text-center'>
            <h2 className='text-primary text-xl uppercase'>Our services</h2>
            <h3 className='text-3xl'>Services we provide</h3>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3'>
                {
                    serviceData.map(service => <ServiceCard
                    key={service.id}
                    service={service}    
                    ></ServiceCard>)
                }    
            </div>
        </div>
    );
};

export default Services;