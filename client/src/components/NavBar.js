import React from 'react';
import { StyledNav, StyledNavLink } from '../styles/StyledComponents'; 

const Navbar = () => {
    return (
        <StyledNav>
            <StyledNavLink to="/items">Food Items</StyledNavLink>
            <StyledNavLink to="/food-business">Food Business</StyledNavLink>
        </StyledNav>
    );
};

export default Navbar;
