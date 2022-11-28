import React from 'react';
import Banner from '../Banner/Banner'
import Categories from '../Categories/CategoriesData.js/CategoriesData';
import Dashboard from '../Dashboard/Dashboard';
import InfoCards from '../InfoCards/InfoCards';
import MakeAppoinment from '../MakeAppoinment/MakeAppoinment';
import Testimonial from '../Testimonial/Testimonial';
import Team from './Team';

const Home = () => {

    return (
        <div className='mx-5'>
            <Banner></Banner>
            <Categories></Categories>
            <MakeAppoinment></MakeAppoinment>
            <InfoCards></InfoCards>
            <Team></Team>
            <Testimonial></Testimonial>
            <Dashboard></Dashboard>
        </div>
    );
};

export default Home;