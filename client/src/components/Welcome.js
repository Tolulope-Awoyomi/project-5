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
  FlexContainer,
  ManageAccountButton 
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
        <div>
          <FontAwesomeIcon icon={faUserCog} onClick={navigateToManageAccount} />
          <LogoutButton onClick={logoutUser}>Log Out</LogoutButton>
        </div>
      </Header>
      {error && <ErrorAlert>{error}</ErrorAlert>}

      <FlexContainer>
        <IconBoxItem>
          <FontAwesomeIcon icon={faPlus} size="2x" />
          <Title>Add Item</Title>
          <Description>Allows food business to submit food donations, ensuring they find their way to those in need.</Description>
          <SubmitButton onClick={navigateToAddItemPage}>Add</SubmitButton>
        </IconBoxItem>

        <IconBoxItem>
          <FontAwesomeIcon icon={faDolly} size="2x" />
          <Title>Inventory</Title>
          <Description>The gateway for food business to efficiently track their entire stock donations inventory.</Description>
          <SubmitButton onClick={navigateToInventoryPage}>View</SubmitButton>
        </IconBoxItem>
      </FlexContainer>
    </Container>
  );
}

export default Welcome;
