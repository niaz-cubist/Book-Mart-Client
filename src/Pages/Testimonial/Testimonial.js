import React from 'react';
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import Review from './Review';

const Testimonial = () => {
    const reviews = [
        {
            _id: 1,
            name: 'Dwayne Johnson',
            img: people1,
            review: 'A book is frightening to me when it makes me feel unsettled. Fear, both real and supernatural, is very personal, and I enjoy a mix of both.To me, the best horror novels are personal.',
            location: 'california'
        },
        {
            _id: 1,
            name: 'Andrew Tate',
            img: people2,
            review: 'For some, fear can come in the shape of a vampire, alien, werewolf, demon, or ghost, while for others it can be human depravity, systemic racism, or illness, to name a few..',
            location: 'california'
        },
        {
            _id: 1,
            name: 'Snoop Dogg',
            img: people3,
            review: 'It’s not surprising that, in a time filled with fresh horrors daily, that people are turning to horror novels for reassurance and even comfort: to be told that the terrors will pass..',
            location: 'california'
        }
    ]
    return (
        <div className='bg-slate-300 w-11/12 xs:w-90  mx-auto px-4 rounded-lg pb-6'>
            <section className='my-6 ml-10'>
                <div className='flex text-center justify-between'>
                    <div className='mt-6'>
                        <h2 className='text-3xl  text-white my-5'>What Our Clients say...</h2>
                    </div>
                </div>
                <div className='grid xs:mx-5 md:grid-cols-3 sm:mx-5 sm:gap-8 xs:gap-8 lg:grid-cols-3 grid-cols-1'>
                    {
                        reviews.map(review => <Review
                            key={review._id}
                            review={review}
                        ></Review>)
                    }
                </div>
            </section>
        </div>
    );
};

export default Testimonial;