import React from 'react';
import img1 from '../../assets/team/t1.jpg'
import img2 from '../../assets/team/t2.jpg'
import img3 from '../../assets/team/t3.jpg'


const Team = () => {
    return (
        <div className='my-10'>
            <h1 className='text-center text-orange-500 py-6 text-5xl font-medium'>Our team</h1>
            <div className='grid xs:w-7/12 sm:w-7/12 md:grid-cols-1 md:w-64 lg:grid-cols-3 mx-auto w-10/12 grid-cols-1 gap-4 my-10'>
                <div className="card card-compact w-80 bg-base-100 shadow-xl">
                    <figure><img src={img1} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">DeadPool</h2>
                        <p>Graphic Designer</p>

                    </div>
                </div>
                <div className="card card-compact w-80 bg-base-100 shadow-xl">
                    <figure><img src={img2} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Spidey</h2>
                        <p>Professional photographer.</p>

                    </div>
                </div>
                <div className="card card-compact w-80 bg-base-100 shadow-xl">
                    <figure><img src={img3} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">BatMan</h2>
                        <p>Web Developer</p>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Team;