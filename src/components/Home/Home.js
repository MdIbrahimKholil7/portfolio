import React from 'react';
import Banner from './Banner';
import Project from './Project';

const Home = () => {
    return (
        <div className='text-white max-w-[1500px] mx-auto '>
            <Banner/>
            <Project/>
        </div>
    );
};

export default Home;