import React, { useContext, useState } from 'react';
import { UserContext } from '../components/context/user';
import { useNavigate } from 'react-router-dom';
import { FormContainer, FormGroup, FormLabel, FormInput, LogoutButton, ErrorAlert, Container, Card, CentreHeader, EditProfileBreadcrumbContainer, BreadcrumbSeparator, BreadcrumbLink, Header, WelcomeMessage, EditButton, DeleteButton } from '../styles/StyledComponents';

function EditProfile() {
    const { user, updateUser, logout } = useContext(UserContext);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        business_name: user.business_name,
        email: user.email,
        phone_number: user.phone_number,
        address: user.address,
        fda_registration_number: user.fda_registration_number
    });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await updateUser(formData);
        if (response.success) {
            navigate('/welcome'); 
        } else {
            setError(response.errors.join(', '));
        }
    };

    const logoutUser = () => {
        logout(); 
        navigate('/login');
      };

    const handleCancel = () => {
        navigate('/manage-account'); 
      };

    return (
        <Container> 
            <Header>
                {user && user.business_name && <WelcomeMessage>Welcome, {user.business_name}!</WelcomeMessage>} 
                <EditProfileBreadcrumbContainer>
                    <BreadcrumbLink to="/food-business">Services</BreadcrumbLink>
                    <BreadcrumbSeparator>/</BreadcrumbSeparator>
                    <BreadcrumbLink to="/manage-account">Manage Account</BreadcrumbLink>
                    <BreadcrumbSeparator>/</BreadcrumbSeparator>
                    <BreadcrumbLink to="/edit-profile">Edit Profile</BreadcrumbLink>
                </EditProfileBreadcrumbContainer>
                <LogoutButton onClick={logoutUser}>Log Out</LogoutButton> 
            </Header>

            <Card>
                <FormContainer>
                    <CentreHeader> <h4>Edit Profile</h4> </CentreHeader>
                    <form onSubmit={handleSubmit}>
                        <FormGroup>
                            <FormLabel htmlFor="business_name">Business Name</FormLabel>
                            <FormInput 
                                type="text" 
                                id="business_name" 
                                name="business_name" 
                                value={formData.business_name} 
                                onChange={handleChange} 
                            />
                        </FormGroup>
                        
                        <FormGroup>
                            <FormLabel htmlFor="email">Email</FormLabel>
                            <FormInput 
                                type="text" 
                                id="email" 
                                name="email" 
                                value={formData.email} 
                                onChange={handleChange} 
                            />
                        </FormGroup>

                        <FormGroup>
                            <FormLabel htmlFor="phone_number">Phone Number</FormLabel>
                            <FormInput 
                                type="text" 
                                id="phone_number" 
                                name="phone_number" 
                                value={formData.phone_number} 
                                onChange={handleChange} 
                            />
                        </FormGroup>

                        <FormGroup>
                            <FormLabel htmlFor="address">Address</FormLabel>
                            <FormInput 
                                type="text" 
                                id="address" 
                                name="address" 
                                value={formData.address} 
                                onChange={handleChange} 
                            />
                        </FormGroup>

                        <FormGroup>
                            <FormLabel htmlFor="fda_registration_number">FDA Registration Number</FormLabel>
                            <FormInput 
                                type="text" 
                                id="fda_registration_number" 
                                name="fda_registration_number" 
                                value={formData.fda_registration_number} 
                                onChange={handleChange} 
                            />
                        </FormGroup>

                        <EditButton type="submit">Update Profile</EditButton>
                        <DeleteButton onClick={handleCancel}>Cancel</DeleteButton>
                    </form>
                    {error && <ErrorAlert>{error}</ErrorAlert>}
                </FormContainer>
            </Card>
        </Container>
    );
}

export default EditProfile;
