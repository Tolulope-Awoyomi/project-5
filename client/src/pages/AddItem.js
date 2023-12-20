import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ItemsContext } from '../components/context/items';
import { UserContext } from '../components/context/user';
import CategoryDropdown from './CategoryDropDown'; 
import { FormContainer, FormGroup, FormLabel, FormInput, SubmitButton, ErrorAlert, Container, Card, CentreHeader, LogoutButton, Header, WelcomeMessage, BreadcrumbContainer, BreadcrumbLink, BreadcrumbSeparator } from '../styles/StyledComponents'; 

function AddItem() {
  const { addItem } = useContext(ItemsContext);
  const { user, logout } = useContext(UserContext);
  const navigate = useNavigate();
  const [newItem, setNewItem] = useState({
    name: '',
    quantity: '',
    item_category_id: '',
    allergens: '',
    addtional_info: '',
    available_until: '',
    available_until_time: '',
    // expiration_date: '',
  });
  const [errors, setErrors] = useState([]);
  
  const logoutUser = () => {
    logout(); 
    navigate('/login');
  };

  const validateForm = () => {
    const errors = [];
  
    if (!newItem.name) {
      errors.push('Item name is required.');
    }
  
    if (!newItem.quantity) {
      errors.push('Quantity is required.');
    } else if (isNaN(newItem.quantity) || newItem.quantity <= 0) {
      errors.push('Quantity must be a positive number.');
    }
  
    if (!newItem.available_until) {
      errors.push('Available until date is required.');
    } else if (!/^\d{4}-\d{2}-\d{2}$/.test(newItem.available_until)) {
      errors.push('Available until date must be in the format YYYY-MM-DD.');
    } else {
      const getTodayDateInLocalTimezone = () => {
        const now = new Date();
        const timezoneOffsetInMs = now.getTimezoneOffset() * 60000; 
        const localTime = new Date(now - timezoneOffsetInMs);
        return localTime.toISOString().split('T')[0];
      };
      
      const today = getTodayDateInLocalTimezone();
      const currentDate = new Date(today);
      const availableUntilDate = new Date(newItem.available_until);
    
      if (availableUntilDate < currentDate) {
        errors.push('Available until date cannot be in the past.');
      }
    }    
      

    if (!newItem.available_until_time) {
      errors.push('Available until time is required.');
    } else if (!/^\d{2}:\d{2}$/.test(newItem.available_until_time)) {
      errors.push('Available until time must be in the format HH:mm.');
    }    
  
    // if (!newItem.expiration_date) {
    //   errors.push('Expiration date is required.');
    // } else if (new Date(newItem.expiration_date) < new Date()) {
    //   errors.push('Expiration date cannot be in the past.');
    // }

    // if (!newItem.allergens) {
    //   errors.push('Allergens information is required.');
    // }

    if (!newItem.item_category_id) {
      errors.push('Category is required.');
    }
  
    return errors;
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'item_category_id') {
      setNewItem({ ...newItem, [name]: value ? parseInt(value, 10) : '' });
    } else {
      setNewItem({ ...newItem, [name]: value });
    }
  };  

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (formErrors.length > 0) {
      setErrors(formErrors);
      return;
    }
  
    const itemData = {
      name: newItem.name,
      quantity: newItem.quantity,
      item_category_id: newItem.item_category_id,
      allergens: newItem.allergens,
      available_until: newItem.available_until,
      available_until_time: newItem.available_until_time,
      addtional_info: newItem.addtional_info,
      // expiration_date: newItem.expiration_date,
    };
  
    addItem(itemData);
    navigate('/inventory');
  };
  
  return (
    <Container>
      <Header>
          {user && user.business_name && <WelcomeMessage>Welcome, {user.business_name}!</WelcomeMessage>} 
          <BreadcrumbContainer>
            <BreadcrumbLink to="/food-business">Services</BreadcrumbLink>
            <BreadcrumbSeparator>/</BreadcrumbSeparator>
            <BreadcrumbLink to="/additem">Add Food</BreadcrumbLink>
        </BreadcrumbContainer>
          <LogoutButton onClick={logoutUser}>Log Out</LogoutButton> 
        </Header>

          <Card>
            <CentreHeader> <h4>Add Food</h4> </CentreHeader>
          
            <FormContainer>
                <form onSubmit={handleSubmit}>
          
                  <FormGroup>
                    <FormLabel htmlFor="itemName">Food Name</FormLabel>
                    <FormInput
                      type="text"
                      id="itemName"
                      name="name"
                      value={newItem.name}
                      onChange={handleChange}
                    />
                  </FormGroup>

                  <FormGroup>
                    <FormLabel htmlFor="itemQuantity">Quantity</FormLabel>
                    <FormInput
                      type="number"
                      id="itemQuantity"
                      name="quantity"
                      value={newItem.quantity}
                      onChange={handleChange}
                    />
                  </FormGroup>

                  <FormGroup>
                    <FormLabel htmlFor="itemCategory">Category</FormLabel>
                    <CategoryDropdown value={newItem.item_category_id} onChange={handleChange} />
                  </FormGroup>

                  {/* <FormGroup>
                    <FormLabel htmlFor="expiration_date">Expiration Date</FormLabel>
                    <FormInput
                      type="date"
                      id="expiration_date"
                      name="expiration_date"
                      value={newItem.expiration_date}
                      onChange={handleChange}
                    />
                  </FormGroup> */}

                  <FormGroup>
                    <FormLabel htmlFor="allergens">Allergens</FormLabel>
                    <FormInput
                      type="text"
                      id="allergens"
                      name="allergens"
                      value={newItem.allergens}
                      onChange={handleChange}
                    />
                  </FormGroup>

                  <FormGroup>
                    <FormLabel htmlFor="addtional_info">Additional Information</FormLabel>
                    <FormInput
                      type="text"
                      id="addtional_info"
                      name="addtional_info"
                      value={newItem.addtional_info}
                      onChange={handleChange}
                    />
                  </FormGroup>

                  <FormGroup>
                    <FormLabel htmlFor="available_until">Available Until (Date)</FormLabel>
                    <FormInput
                      type="date"
                      id="available_until"
                      name="available_until"
                      value={newItem.available_until}
                      onChange={handleChange}
                    />
                  </FormGroup>

                  <FormGroup>
                    <FormLabel htmlFor="available_until_time">Available Until (Time)</FormLabel>
                    <FormInput
                      type="text"
                      id="available_until_time"
                      name="available_until_time"
                      placeholder="HH:mm (use military time)"
                      value={newItem.available_until_time}
                      onChange={handleChange}
                    />
                  </FormGroup>

                  {errors.length > 0 && (
                    <ErrorAlert>
                      {errors.map((error, index) => (
                        <p key={index}>{error}</p>
                      ))}
                    </ErrorAlert>
                  )}

                  <SubmitButton type="submit">Add Item</SubmitButton>
                </form>
            </FormContainer>
          </Card>
        </Container>
  );
}

export default AddItem;
