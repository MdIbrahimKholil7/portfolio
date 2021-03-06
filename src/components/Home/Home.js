import React from 'react';
import Banner from './Banner';
import Project from './Project';
import MyService from './MyService';
import Skill from './Skill';
import AboutMe from './AboutMe';
import Contact from './Contact';
import Hamburger from './Hamburger';

const Home = () => {
    return (
        <div className='text-white max-w-[1500px] mx-auto '>
            <Hamburger/>
            <Banner/>
            <Project/>
            <AboutMe/>
            <MyService/>
            <Skill/>
            <Contact/>
        </div>
    );
};

export default Home;