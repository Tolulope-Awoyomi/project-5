import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
// import { UserContext } from '../components/context/user'; 
import { Button } from '../styles/StyledComponents'; 

function ManageAccount() {
  const navigate = useNavigate();
//   const { delete } = useContext(ItemsContext);

  const handleEditProfile = () => {
    navigate('/edit-profile');
  };

  const handleDeleteAccount = () => {
    if (window.confirm('Are you sure you want to delete your account? This cannot be undone.')) {
      // my delete logic
      navigate('/login');
    }
  };

  return (
    <div>
      <h1>Manage Account</h1>
      <Button onClick={handleEditProfile}>Edit Profile</Button>
      <Button onClick={handleDeleteAccount}>Delete Account</Button>
    </div>
  );
}

export default ManageAccount;
