import React from 'react';
import { StyledNav, StyledNavLink, Logo } from '../styles/StyledComponents'; 
import logo from '../styles/images/Food.png'

const Navbar = () => {
    return (
        <StyledNav>
             <Logo src={logo} alt="Your Business Logo" />
            <StyledNavLink to="/items">Food Items</StyledNavLink>
            <StyledNavLink to="/food-business">Food Business</StyledNavLink>
        </StyledNav>
    );
};

export default Navbar;
