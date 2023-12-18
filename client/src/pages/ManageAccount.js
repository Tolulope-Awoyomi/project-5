import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../components/context/user';
import { Container, BreadcrumbContainer, BreadcrumbLink, BreadcrumbSeparator, Header, WelcomeMessage, LogoutButton, Card, SectionHeader, EditButton, DeleteButton } from '../styles/StyledComponents'; 

function ManageAccount() {
  const navigate = useNavigate();
  const { user, logout } = useContext(UserContext); 

  const logoutUser = () => {
    logout(); 
    navigate('/login');
  };

  const handleEditProfile = () => {
    navigate('/edit-profile');
  };

  const handleDeleteAccount = async () => {
    if (window.confirm('Are you sure you want to delete your account? This cannot be undone.')) {
      try {
        const response = await fetch(`/users/${user.id}`, { method: 'DELETE' });
        if (!response.ok) {
          throw new Error('Failed to delete account');
        }
        logout(); 
        navigate('/signup'); 
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };

  return (
    <Container>
      <Header>
        {user && user.business_name && <WelcomeMessage>Welcome, {user.business_name}!</WelcomeMessage>} 
        <BreadcrumbContainer>
          <BreadcrumbLink to="/food-business">Services</BreadcrumbLink>
          <BreadcrumbSeparator>/</BreadcrumbSeparator>
          <BreadcrumbLink to="/manage-account">Manage Account</BreadcrumbLink>
        </BreadcrumbContainer>
        <LogoutButton onClick={logoutUser}>Log Out</LogoutButton> 
      </Header>
      <Card>
        <SectionHeader>Edit Item</SectionHeader>
        <EditButton onClick={handleEditProfile}>Edit Profile</EditButton>
        <DeleteButton onClick={handleDeleteAccount}>Delete Account</DeleteButton>
      </Card>
    </Container>
  );
}

export default ManageAccount;
