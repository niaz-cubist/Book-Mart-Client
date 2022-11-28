import React from 'react';
import logo from '../../assets/images/appointment.png'
import { Link } from 'react-router-dom';

const MakeAppoinment = () => {
    return (
        <div>
            <section className='rounded-lg mx-auto px-6 w-10/12 bg-slate-600'

            >
                <div className="hero my-20 py-8">
                    <div className="hero-content  flex-col lg:flex-row">
                        <img src={logo} alt='' className="w-80 rounded-lg hidden md:block lg:block shadow-2xl" />
                        <div className='ml-10'>
                            <h1 className="text-5xl font-bold text-white">Make an Order</h1>
                            <p className="py-6 text-white">Order is not enough. You can't just be stable, and secure, and unchanging, because there are still vital and important new things to be learned</p>
                            <Link to='/dashboard'><button className="btn btn-primary">Lets go</button></Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MakeAppoinment;