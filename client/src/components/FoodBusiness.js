import React from 'react';
import { Card, WelcomeText, DescriptionText, LinksContainer, StyledNavLink } from '../styles/StyledComponents'; 

const FoodBusiness = () => {

    return (
        <>
            <Card>
                <WelcomeText>Join Our Effort to Reduce Food Waste</WelcomeText>
                <DescriptionText>
                    Connect with our community to donate your excess food. Help us make a difference today!
                </DescriptionText>
            </Card>
            <LinksContainer>
                <StyledNavLink to="/signup">Sign Up</StyledNavLink>
                <StyledNavLink to="/login">Login</StyledNavLink>
            </LinksContainer>
        </>
    );
};

export default FoodBusiness;
