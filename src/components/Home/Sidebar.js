import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Sidebar = () => {
    return (
        <div>
            <Navbar>
                <Outlet/>
            </Navbar>
        </div>
    );
};

export default Sidebar;