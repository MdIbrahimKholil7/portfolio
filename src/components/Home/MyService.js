import React from 'react';
import { BiCodeAlt } from 'react-icons/bi';
import { BiMobile } from 'react-icons/bi';
const MyService = () => {
    return (
        <div className='my-24 px-4'>
            <h1 className='text-center mb-24 lg:text-3xl xl:text-4xl text-2xl'><span className='title relative py-7'>My Services</span></h1>
            <div className='grid  md:grid-cols-2 lg:grid-cols-3 gap-7 mt-12 justify-items-center'>
                <div className='service-card xl:p-9 max-w-sm shadow-xl p-2 '>
                    <div className='text-center flex justify-center'>
                        <BiCodeAlt
                            className='text-center text-3xl'
                        />
                    </div>
                    <h1 className='text-center text-[17px] font-bold my-3'>Web Development</h1>
                    <p>
                        I am a junior mern stack web developer.A mern Stack web application i provide.I can create every kinds of website.
                    </p>
                </div>
                <div className='service-card xl:p-9 max-w-sm shadow-xl p-2'>
                    <div className='text-center flex justify-center'>
                        <BiMobile
                            className='text-center text-3xl'
                        />
                    </div>
                    <h1 className='text-center text-[17px] font-bold my-3'>Responsive Development</h1>
                    <p>
                        Responsive design is most important in todays world.Because most of the user visit site with mobile,pc or tablet
                    </p>
                </div>
                <div className='service-card xl:p-9 max-w-sm shadow-2xl p-2'>
                    <div className='text-center flex justify-center ' >
                        <svg className=' text-3xl' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="commonIcons" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M288 39.056v16.659c0 10.804 7.281 20.159 17.686 23.066C383.204 100.434 440 171.518 440 256c0 101.689-82.295 184-184 184-101.689 0-184-82.295-184-184 0-84.47 56.786-155.564 134.312-177.219C216.719 75.874 224 66.517 224 55.712V39.064c0-15.709-14.834-27.153-30.046-23.234C86.603 43.482 7.394 141.206 8.003 257.332c.72 137.052 111.477 246.956 248.531 246.667C393.255 503.711 504 392.788 504 256c0-115.633-79.14-212.779-186.211-240.236C302.678 11.889 288 23.456 288 39.056z"></path></svg>
                    </div>
                    <h1 className='text-center text-[17px] font-bold my-3'>Web Design</h1>
                    <p>
                        Web design is the most important part for a website.A unique and beautiful design attract user and satisfy user experience.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default MyService;