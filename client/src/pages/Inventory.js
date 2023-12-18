import React, { useState, useContext, useEffect } from 'react';
import { ItemsContext } from '../components/context/items';
import { Card, Container, StyledTable, SectionHeader, EditButton, DeleteButton, StyledFormContainer, StyledFormInput, StyledFormSelect } from '../styles/StyledComponents';

function Inventory() {
  const { items, categories, fetchItems, updateItem, deleteItem } = useContext(ItemsContext);
  const [isEditing, setIsEditing] = useState(false);
  const [editItem, setEditItem] = useState(null);

  useEffect(() => {
    fetchItems();
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEditItem(prevState => ({
      ...prevState,
      [name]: name === 'item_category_id' ? parseInt(value, 10) : value
    }));
  };

  const handleEdit = (item) => {
    setIsEditing(true);
    setEditItem({ ...item });
  };

  const handleUpdate = () => {
    updateItem(editItem);
    setIsEditing(false);
    setEditItem(null);
  };

  const handleDelete = (itemId) => {
    deleteItem(itemId);
  };

  const formatDateForInput = (dateString) => {
    const date = new Date(dateString);
    return date.toISOString().split('T')[0];
  };

  const getCategoryName = (categoryId) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.category : 'Unknown';
  };

  return (
    <Container>
      <SectionHeader>Item Inventory</SectionHeader>

      {isEditing ? (
        <Card>
          <StyledFormContainer>
            <StyledFormInput type="text" name="name" placeholder="Name" value={editItem.name} onChange={handleChange} />
            <StyledFormInput type="number" name="quantity" placeholder="Quantity" value={editItem.quantity} onChange={handleChange} />
            <StyledFormSelect name="item_category_id" value={editItem.item_category_id} onChange={handleChange}>
              {categories.map(category => (
                <option key={category.id} value={category.id}>{category.category}</option>
              ))}
            </StyledFormSelect>
            <StyledFormInput type="text" name="allergens" placeholder="Allergens" value={editItem.allergens} onChange={handleChange} />
            <StyledFormInput type="text" name="dietary_classification" placeholder="Dietary Classification" value={editItem.dietary_classification} onChange={handleChange} />
            <StyledFormInput type="text" name="nutrition_facts" placeholder="Nutrition Facts" value={editItem.nutrition_facts} onChange={handleChange} />
            <StyledFormInput type="text" name="additional_info" placeholder="Additional Information" value={editItem.additional_info} onChange={handleChange} />
            <StyledFormInput type="datetime-local" name="available_until" value={formatDateForInput(editItem.available_until)} onChange={handleChange} />
          </StyledFormContainer>
          <br />
         
            <EditButton onClick={handleUpdate}>Save Changes</EditButton>
            <DeleteButton onClick={() => setIsEditing(false)}>Cancel</DeleteButton>
          
        </Card>
      ) : (
        <StyledTable>
          <thead>
            <tr>
              <th>Name</th>
              <th>Quantity</th>
              <th>Category</th>
              <th>Allergens</th>
              <th>Dietary Classification</th>
              <th>Nutrition Facts</th>
              <th>Additional Info</th>
              <th>Available Until</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td style={{ textAlign: "center" }}>{item.name}</td>
                <td style={{ textAlign: "center" }}>{item.quantity}</td>
                <td style={{ textAlign: "center" }}>{getCategoryName(item.item_category_id)}</td>
                <td style={{ textAlign: "center" }}>{item.allergens}</td>
                <td style={{ textAlign: "center" }}>{item.dietary_classification}</td>
                <td style={{ textAlign: "center" }}>{item.nutrition_facts}</td>
                <td style={{ textAlign: "center" }}>{item.addtional_info}</td>
                <td style={{ textAlign: "center" }}>{item.available_until ? formatDateForInput(item.available_until) : ''}</td>
                <td>
                  <EditButton onClick={() => handleEdit(item)}>Edit</EditButton>
                  <DeleteButton onClick={() => handleDelete(item.id)}>Delete</DeleteButton>
                </td>
              </tr>
            ))}
          </tbody>
        </StyledTable>
      )}
    </Container>
  );
}

export default Inventory;
