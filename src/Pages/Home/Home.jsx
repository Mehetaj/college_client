import React from 'react';
import CollegeCard from '../CollegeCard/CollegeCard';
import Gallery from '../Gallery/Gallery';
import Testi from '../Testimonals/Testi';
import Paper from '../Paper/Paper';

const Home = () => {
    return (
        <div>
            <CollegeCard />
            <Gallery />
            <Paper />
            <Testi />
        </div>
    );
};

export default Home;