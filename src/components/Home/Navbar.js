import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = ({children}) => {
    return (
        <div>
            <div class="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content flex flex-col items-center justify-center">
                    {/* <!-- Page content here --> */}
                    {children}
                    <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div class="drawer-side">
                    <label for="my-drawer-2" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-60 bg-base-300 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                     <NavLink to='home'>Home</NavLink>
                     <NavLink to='project'>Project</NavLink>
                     <NavLink to='contact'>Contact Me</NavLink>
                     <NavLink to='resume'>Resume</NavLink>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;