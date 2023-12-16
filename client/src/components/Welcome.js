import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from './context/user';
import { Container, Card, Header, ErrorAlert, WelcomeMessage, LogoutButton } from '../styles/StyledComponents';

function Welcome() {
  const { user, logout } = useContext(UserContext);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  function logoutUser() {
    fetch('/logout', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then((response) => {
        if (response.ok) {
            logout();
            navigate('/login');
        } else {
            return response.json().then(data => {
                throw new Error(data.error || 'Logout failed');
            });
        }
    })
    .catch((error) => {
        setError(error.message);
    });
  }

  return (
    <Container>
      <Card>
        <Header>
          <WelcomeMessage>Welcome, {user.business_name}!</WelcomeMessage>
        </Header>
        <LogoutButton onClick={logoutUser}>Log Out</LogoutButton>
        {error && <ErrorAlert>{error}</ErrorAlert>}
      </Card>
    </Container>
  );
}

export default Welcome;