import React from 'react';

const Review = ({ review }) => {
    const { _id, name, location, review: userReview, img } = review
    return (
        <div>
            <div className="card md:w-10/12 lg:w-10/12 w-80 bg-base-100 shadow-xl">
                <div className="card-body ">
                    <p>{userReview}</p>
                    <div className="avatar flex justify-evenly">
                        <div className="w-24 mt-3 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={img} alt='' />
                        </div>
                        <div>
                            <h2>{name}</h2>
                            <h2>{location} </h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;