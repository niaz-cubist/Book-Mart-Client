import React from 'react';
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'
import InfoCard from './InfoCard';

const InfoCards = () => {
    const cardData = [
        {
            id: 1,
            name: 'Opening hours',
            description: 'open 9am to 5pm everyday',
            icon: clock,
            bgClass: 'bg-primary'
        },
        {
            id: 1,
            name: 'Our location',
            description: '4301 Caldwell Road,New York',
            icon: marker,
            bgClass: 'bg-accent'
        },
        {
            id: 1,
            name: 'Contact us',
            description: `+1-202-555-0179\n , +1-202-555-0194`,
            icon: phone,
            bgClass: 'bg-primary'
        }
    ]
    return (
        <div>
            <div>
                <h2 className='text-center text-5xl  text-orange-600 font-medium'>Contact Us</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 mx-auto w-11/12 lg:grid-cols-3 gap-6 py-6 my-6'>
                {
                    cardData.map(card => <InfoCard
                        key={card.id}
                        card={card}
                    ></InfoCard>)
                }
            </div>
        </div>
    );
};

export default InfoCards;