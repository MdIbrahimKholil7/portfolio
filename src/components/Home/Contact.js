import React from 'react';
import { BsTelephone } from 'react-icons/bs';
import {MdOutlineMail } from 'react-icons/md';
import {MdOutlineLocationOn } from 'react-icons/md';
const Contact = () => {
    return (
        <div className='px-4'>
            <h1 className='text-center mb-24 lg:text-3xl xl:text-4xl text-2xl'><span className='title relative '>Contract Me</span></h1>

            <div className='grid lg:grid-cols-2 gap-7'>
                <form className='mb-12'>
                    <div >
                        <div className=''>
                            <div className='relative mb-7'>
                                <label className='absolute left-2 top-[-13px] px-2 bg-base-200' htmlFor="name">Name</label>
                                <input className='border-solid bg-transparent py-[10px] px-2 border-[1px] w-full focus:outline-none rounded-sm border-gray-400' type="text" name='name' />
                            </div>
                            <div className='relative mb-7'>
                                <label className='absolute left-2 top-[-13px] px-2 bg-base-200' htmlFor="name">Email</label>
                                <input className='border-solid bg-transparent py-[10px] px-2 border-[1px] w-full focus:outline-none rounded-sm border-gray-400' type="text" name='email' />
                            </div>
                        </div>
                        <div className='relative mb-7'>
                            <label className='absolute left-2 top-[-13px] px-2 bg-base-200' htmlFor="name">Message</label>
                            <textarea className='border-solid bg-transparent py-[10px] px-2 border-[1px] w-full focus:outline-none rounded-sm border-gray-400' type="text" name='name' />
                        </div>
                    </div>
                    <button className='btn btn-primary'>Send Email</button>
                </form>
                <div>
                    <div className='flex shadow-2xl p-4 items-center px-2 mb-4'>
                        <div className='border-solid border-[1px] border-gray-400 p-3 text-[22px] mr-5 text-white'>
                            <BsTelephone
                            />
                        </div>
                        <div>
                            <h1>Phone : 01741313873</h1>
                        </div>
                    </div>
                    <div className='flex shadow-2xl p-4 mb-4 items-center px-2'>
                        <div className='border-solid border-[1px] border-gray-400 p-3 text-[22px] mr-5 text-white'>
                            <MdOutlineMail
                            />
                        </div>
                        <div>
                            <h1>Email : kholilmdibrahim17@gmail.com</h1>
                        </div>
                    </div>
                    <div className='flex shadow-2xl p-4 items-center'>
                        <div className='border-solid border-[1px] border-gray-400 p-3 text-[22px] mr-5 text-white'>
                            <MdOutlineLocationOn
                            />
                        </div>
                        <div>
                            <h1>Address : Chuadanga,Bangladesh</h1>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Contact;