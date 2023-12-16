import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <NavLink to="/items-menu">Items Menu</NavLink>
            <NavLink to="/food-business">Food Business</NavLink>
        </nav>
    );
};

export default Navbar;
