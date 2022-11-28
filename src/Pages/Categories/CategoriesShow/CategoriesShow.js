import React from 'react';
import { Link } from 'react-router-dom';

const CategoriesShow = ({ data }) => {
    console.log()
    return (
        <div>
            <div className="card mx-auto card-compact my-5 rounded-lg md:w-64 w-80 bg-base-100 shadow-2xl">
                <figure><img className='h-52 w-11/12' src={data?.img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{data?.name}</h2>
                    <p>{data?.details}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/categories/${data.name}`}><button className="btn btn-primary text-white">Explore</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoriesShow;