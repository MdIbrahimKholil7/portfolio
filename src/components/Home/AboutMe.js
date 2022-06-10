import React from 'react';
import about from '../../assets/about.png'
const AboutMe = () => {
    return (
        <div className='px-4 mt-24'>
            <h1 className='text-center mb-16 lg:text-3xl xl:text-4xl text-2xl'><span className='title relative '>About Me</span></h1>
            <div class="hero h-auto ">
                <div class="hero-content w-full  flex-col justify-between lg:flex-row">
                    <img src={about} class="w-[350px] object-cover rounded-lg " alt='aboutImg'/>
                    <div className='max-w-lg'>
                        <h1 class="md:text-5xl text-3xl font-bold">I am <span className='text-[#037fff]'>Ibrahim Kholil</span></h1>
                        <p class="py-6 lg:text-[18px] xl:text-[22px] text-[16px]">Hi There,I am Junior full stack developer.Specially I am a MERN Stack Developer.I can provide clean code and pixel perfect website.I will make your website more interactive and more featurette</p>
                        <button class="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;