import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../components/context/user';
import { Card, WelcomeText, DescriptionText, LinksContainer, StyledNavLink } from '../styles/StyledComponents';

const FoodBusiness = () => {
    const { loggedIn } = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (loggedIn) {
            navigate('/welcome');
        }
    }, [loggedIn, navigate]);

    return !loggedIn ? (
        <>
            <Card>
                <WelcomeText>Fetch some food today</WelcomeText>
                <DescriptionText>
                    Join our community of Restaurants to donate excess food. Do not throw unsold food away, fetch it out!
                </DescriptionText>
            </Card>
            <LinksContainer>
                <StyledNavLink to="/signup">Sign Up</StyledNavLink>
                <StyledNavLink to="/login">Login</StyledNavLink>
            </LinksContainer>
        </>
    ) : null;
};

export default FoodBusiness;
