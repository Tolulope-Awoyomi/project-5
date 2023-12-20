import React, { useState, useContext, useEffect } from 'react';
import { ItemsContext } from '../components/context/items';
import { UserContext } from '../components/context/user';
import { useNavigate } from 'react-router-dom';
import {
  Card,
  Container,
  StyledTable,
  SectionHeader,
  EditButton,
  DeleteButton,
  WelcomeMessage,
  StyledFormContainer,
  StyledFormInput,
  StyledFormSelect,
  Header,
  LogoutButton,
  BreadcrumbContainer,
  BreadcrumbLink,
  BreadcrumbSeparator
} from '../styles/StyledComponents';

function Inventory() {
  const { items, categories, fetchUserItems, updateItem, deleteItem } = useContext(ItemsContext);
  const { user, logout } = useContext(UserContext);
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [editItem, setEditItem] = useState(null);
  const [validationErrors, setValidationErrors] = useState({});

  useEffect(() => {
    fetchUserItems();
  }, []);

  const logoutUser = () => {
    logout();
    navigate('/login');
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEditItem(prevState => ({
      ...prevState,
      [name]: name === 'item_category_id' ? parseInt(value, 10) : value
    }));
    setValidationErrors({ ...validationErrors, [name]: '' });
  };

  const validateItem = (item) => {
    let errors = {};
    if (!item.name) errors.name = 'Name is required';
    if (item.quantity <= 0) errors.quantity = 'Quantity must be at least 1';
    if (!item.available_until) errors.available_until = 'Available until date is required';
    if (!item.available_until_time) {
      errors.available_until_time = 'Available until time is required';
    } else {
      const timePattern = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/; 
      if (!timePattern.test(item.available_until_time)) {
        errors.available_until_time = 'Time must be in HH:mm format';
      }
    }
    if (item.item_category_id === null || item.item_category_id === undefined) errors.item_category_id = 'Category must be selected';
    return errors;
  };

  const getTodayDateInLocalTimezone = () => {
    const now = new Date();
    const timezoneOffsetInMs = now.getTimezoneOffset() * 60000; 
    const localTime = new Date(now - timezoneOffsetInMs);
    return localTime.toISOString().split('T')[0];
  };
  
  const today = getTodayDateInLocalTimezone();
  

  const handleUpdate = () => {
    const errors = validateItem(editItem);
    if (Object.keys(errors).length === 0) {
      updateItem(editItem);
      setIsEditing(false);
      setEditItem(null);
      setValidationErrors({});
    } else {
      setValidationErrors(errors);
    }
  };

  const handleEdit = (item) => {
    setIsEditing(true);
    setEditItem({ ...item });
  };

  const handleDelete = (itemId) => {
    deleteItem(itemId);
  };

  const getCategoryName = (categoryId) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.category : 'Unknown';
  };

  return (
    <Container>
      <Header>
        {user && user.business_name && <WelcomeMessage>Welcome, {user.business_name}!</WelcomeMessage>}
        <BreadcrumbContainer>
          <BreadcrumbLink to="/food-business">Services</BreadcrumbLink>
          <BreadcrumbSeparator>/</BreadcrumbSeparator>
          <BreadcrumbLink to="/inventory">Inventory</BreadcrumbLink>
        </BreadcrumbContainer>
        <LogoutButton onClick={logoutUser}>Log Out</LogoutButton>
      </Header>

      {isEditing ? (
        <Card>
          <SectionHeader>Edit Food</SectionHeader>
          <StyledFormContainer>
            <StyledFormInput 
              type="text" 
              name="name" 
              placeholder="Name" 
              value={editItem.name} 
              onChange={handleChange} 
            />
            {validationErrors.name && <div className="error-message">{validationErrors.name}</div>}

            <StyledFormInput 
              type="number" 
              name="quantity" 
              placeholder="Quantity" 
              value={editItem.quantity} 
              onChange={handleChange} 
            />
            {validationErrors.quantity && <div className="error-message">{validationErrors.quantity}</div>}

            <StyledFormSelect 
              name="item_category_id" 
              value={editItem.item_category_id} 
              onChange={handleChange}
            >
              {categories.map(category => (
                <option key={category.id} value={category.id}>{category.category}</option>
              ))}
            </StyledFormSelect>
            {validationErrors.item_category_id && <div className="error-message">{validationErrors.item_category_id}</div>}

            <StyledFormInput 
              type="text" 
              name="allergens" 
              placeholder="Allergens" 
              value={editItem.allergens} 
              onChange={handleChange} 
            />

            <StyledFormInput 
              type="text" 
              name="addtional_info" 
              placeholder="Additional Info" 
              value={editItem.addtional_info} 
              onChange={handleChange} 
            />

            <StyledFormInput
              type="date"
              name="available_until"
              placeholder="YYYY-MM-DD"
              value={editItem.available_until || ''}
              min={today} 
              onChange={handleChange}
            />
            {validationErrors.available_until && <div className="error-message">{validationErrors.available_until}</div>}

            <StyledFormInput
              type="text"
              name="available_until_time"
              placeholder="HH:mm"
              value={editItem.available_until_time || ''}
              onChange={handleChange}
            />
            {validationErrors.available_until_time && <div className="error-message">{validationErrors.available_until_time}</div>}
        </StyledFormContainer>
            <br />
            <EditButton onClick={handleUpdate}>Save Changes</EditButton>
            <DeleteButton onClick={() => setIsEditing(false)}>Cancel</DeleteButton>
        </Card>
      ) : (
        <>
          <SectionHeader>Food Inventory</SectionHeader>
          <StyledTable>
            <thead>
              <tr>
                <th>Name</th>
                <th>Quantity</th>
                <th>Category</th>
                <th>Allergens</th>
                <th>Additional Info</th>
                <th>Available Until</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(items) && items.map((item) => (
                <tr key={item.id}>
                  <td style={{ textAlign: "center" }}>{item.name}</td>
                  <td style={{ textAlign: "center" }}>{item.quantity}</td>
                  <td style={{ textAlign: "center" }}>{getCategoryName(item.item_category_id)}</td>
                  <td style={{ textAlign: "center" }}>{item.allergens}</td>
                  <td style={{ textAlign: "center" }}>{item.addtional_info}</td>
                  <td style={{ textAlign: "center" }}>{item.available_until} {item.available_until_time}</td>
                  <td>
                    <EditButton onClick={() => handleEdit(item)}>Edit</EditButton>
                    <DeleteButton onClick={() => handleDelete(item.id)}>Delete</DeleteButton>
                  </td>
                </tr>
              ))}
            </tbody>
          </StyledTable>
        </>
      )}
    </Container>
  );
}

export default Inventory;
