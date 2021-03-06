import React from 'react';
import { Fade } from 'react-reveal';
import about from '../../assets/about.png'
const AboutMe = () => {
    return (
        <div className='px-4 mt-24'>
            <h1 className='text-center mb-16 lg:text-3xl xl:text-4xl text-2xl'><span className='title relative '>About Me</span></h1>
            <div class="hero h-auto ">
                <div class="hero-content w-full lg:gap-10 gap-9 flex-col justify-between lg:flex-row">
                    <Fade left

                    >

                        <img
                            src={about} class="xl:w-[320px] img lg:w-[240px] w-[180px] object-cover rounded-lg " alt='aboutImg' />

                    </Fade>
                    <div >
                        <Fade right>
                            <div
                                data-aos="zoom-in"
                                data-aos-duration="1000"
                                className='max-w-lg mt-[70px]'>
                                <h1 class="xl:text-5xl lg:text-4xl text-3xl font-bold">I am <span className='text-[#037fff]'>Ibrahim Kholil</span></h1>
                                <p class="py-6 lg:text-[16px] xl:text-[18px] text-[16px]">Hi There,I am Junior full stack developer.Specially I am a MERN Stack Developer.I can provide clean code and pixel perfect website.I will make your website more interactive and more featurette</p>
                                <div>
                                    <div>
                                        <h1 className='text-xl'>Name : Ibrahim Kholil</h1>
                                        <h1 className='text-xl'>Email : kholilmdibrahim17@gmail.com</h1>
                                        <h1 className='text-xl'>Phone : 01741313873 </h1>
                                    </div>
                                </div>
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;