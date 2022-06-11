import React from 'react';
import { NavLink } from 'react-router-dom';
import img from '../../assets/img2.png'
const Navbar = ({ children }) => {
    return (
        <div>
            <div class="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content flex flex-col ">
                    {/* <!-- Page content here --> */}
                    {children}
                    <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                </div>

                <div class="drawer-side">
                    <label for="my-drawer-2" class="drawer-overlay"></label>
                    <ul class="menu text-center overflow-y-auto w-56 xl:w-64 bg-base-300 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <div className='bg-white rounded-full relative w-[186px] h-[186px] mb-3 mx-auto mt-7'>
                            <img className='rounded-full w-[130px] h-[186px] mx-auto' src={img} alt="" />
                        </div>
                        <div class="divider mb-9"></div>
                        <li ><NavLink className='text-center p-3 uppercase text-[16px] block' to='/'>Home</NavLink></li>
                        <li><NavLink className='text-center p-3 uppercase text-[16px] block' to='project'>Project</NavLink></li>
                        <li > <NavLink className='text-center p-3 uppercase text-[16px] block' to='contact'>Contact Me</NavLink></li>
                        <li > <NavLink className='text-center p-3 uppercase text-[16px] block' to='blog'>Blog</NavLink></li>
                        <li><a className='text-center uppercase block text-[16px]' href="https://drive.google.com/file/d/1H_uu-qckcXWKRSJCcOa_TLIBtYEYNRfx/view" target='_blank' rel="noreferrer" download={true}>Resume</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;