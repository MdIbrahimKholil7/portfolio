import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { BsLinkedin } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';
import { Cursor, useTypewriter } from 'react-simple-typewriter'
// import 'react-simple-typewriter/dist/index.css'
const Banner = () => {

    const { text } = useTypewriter({
        words: [' Junior Web Developer', ' Frontend Developer'],
        loop: 0,
        delaySpeed:1000,
        deleteSpeed:60
    })
    return (
        <div>
            <div class=" w-full min-h-screen bg-base-200">
                <div class="flex h-screen items-center justify-start md:px-20 px-4">
                    <div class="max-w-lg text-left">
                        <h1 class="md:text-4xl text-2xl font-bold font">Hi, I am <span className='text-[#037fff]'>Ibrahim Kholil</span></h1>
                        <div className='text-2xl mt-2'>
                            I Am A
                            <span className='text-[#037fff] font-bold'>
                                {
                                    text
                                }
                                <Cursor
                                    cursorStyle='|'
                                />
                                
                            </span>
                        </div>
                        <div className='flex my-7'>
                            <a href="https://github.com/MdIbrahimKholil7" target='_blank' rel='noreferrer'><FaGithub
                                className='text-3xl mr-5 text-primary'
                            />
                            </a>

                            <a
                                href="https://www.linkedin.com/feed/" target='_blank' rel='noreferrer'
                            >
                                <BsLinkedin
                                    className='text-3xl mr-5 text-primary'
                                />
                            </a>
                            <a
                                href="https://web.facebook.com/" target='_blank' rel='noreferrer'
                            >
                                <FaFacebook
                                    className='text-3xl mr-5 text-primary'
                                />
                            </a>
                        </div>
                        <button class="btn btn-primary mr-9">Hire Me</button>
                        <a href="Ibrahim Kholil.pdf" download={true}><button class="btn btn-primary">Download Cv</button></a>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Banner;