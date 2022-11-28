import React, { useEffect, useState } from 'react';
import CategoriesShow from '../CategoriesShow/CategoriesShow';


const Categories = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://bookmart-xi.vercel.app/categories')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    return (
        <div>

            <h2 className='text-center text-4xl text-orange-600 font-medium'>Categories</h2>
            <div className='my-8 grid grid-cols-3 xl:grid-cols-3 xs:grid-cols-1 xs:gap-5 sm:grid-cols-1 md:grid-cols-3'>
                {
                    data.map((param) => <CategoriesShow key={param._id} data={param}></CategoriesShow>)
                }
            </div>

        </div>
    );
};

export default Categories;