import React, { useContext, useState } from 'react';
import { UserContext } from "../components/context/user";
import { useNavigate } from "react-router-dom";
import { 
  Container, 
  Header, 
  ErrorAlert, 
  WelcomeMessage, 
  LogoutButton, 
  IconBoxItem, 
  Title, 
  Description, 
  SubmitButton, 
  FlexContainer
} from '../styles/StyledComponents';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faDolly, faUserCog } from '@fortawesome/free-solid-svg-icons';

function Welcome() {
  const { user, logout } = useContext(UserContext);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  function navigateToAddItemPage() {
    navigate("/additem");
  }

  function navigateToInventoryPage() {
    navigate("/inventory");
  }

  function navigateToManageAccount() {
    navigate("/manage-account"); 
  }

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
      <Header>
        <WelcomeMessage>Welcome, {user.business_name}!</WelcomeMessage>
        
        <FontAwesomeIcon className="icon" icon={faUserCog} size="2x" onClick={navigateToManageAccount} />
          
          <LogoutButton onClick={logoutUser}>Log Out</LogoutButton>
        
      </Header>
      {error && <ErrorAlert>{error}</ErrorAlert>}

      <FlexContainer>
        <IconBoxItem>
          <FontAwesomeIcon icon={faPlus} size="2x" />
          <Title>Add Food</Title>
          <Description>Easily add food items to your inventory for others to fetch.</Description>
          <SubmitButton onClick={navigateToAddItemPage}>Add</SubmitButton>
        </IconBoxItem>

        <IconBoxItem>
          <FontAwesomeIcon icon={faDolly} size="2x" />
          <Title>Inventory</Title>
          <Description>Keep track of your food stock and manage inventory efficiently.</Description>
          <SubmitButton onClick={navigateToInventoryPage}>View</SubmitButton>
        </IconBoxItem>
      </FlexContainer>
    </Container>
  );
}

export default Welcome;
