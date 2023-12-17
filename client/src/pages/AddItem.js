import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ItemsContext } from '../components/context/items';
import { 
  FormContainer, 
  FormGroup, 
  FormLabel, 
  FormInput, 
  FormSelect, 
  SubmitButton, 
  ErrorAlert, 
  Container,
  Card, 
  CentreHeader
} from '../styles/StyledComponents'; 

function AddItem() {
  const { addItem, categories } = useContext(ItemsContext);
  const navigate = useNavigate();
  const [newItem, setNewItem] = useState({
    name: '',
    quantity: '',
    additional_info: '',
    available_until: '',
    expiration_date: '',
    allergens: '',
    dietary_classification: '',
    nutrition_facts: '',
    category: ''
  });
  const [errors, setErrors] = useState([]);
  
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
  
    if (!newItem.additional_info) {
      errors.push('Additional information is required.');
    }
  
    if (!newItem.available_until) {
      errors.push('Available until date is required.');
    } else if (new Date(newItem.available_until) < new Date()) {
      errors.push('Available until date cannot be in the past.');
    }
  
    if (!newItem.expiration_date) {
      errors.push('Expiration date is required.');
    } else if (new Date(newItem.expiration_date) < new Date()) {
      errors.push('Expiration date cannot be in the past.');
    }

    if (!newItem.allergens) {
      errors.push('Allergens information is required.');
    }
  
    if (!newItem.dietary_classification) {
      errors.push('Dietary classification is required.');
    }
  
    if (!newItem.nutrition_facts) {
      errors.push('Nutrition facts are required.');
    }

    if (!newItem.category) {
      errors.push('Category is required.');
    }
  
    return errors;
  };
  

  const handleChange = (e) => {
    setNewItem({ ...newItem, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (formErrors.length > 0) {
      setErrors(formErrors);
    } else {
      addItem(newItem);
      navigate('/inventory');
    }
  };
  
  return (
    <>
      <Container>
          <Card>
            <CentreHeader> <h4>Add Item</h4> </CentreHeader>
          
            <FormContainer>
                <form onSubmit={handleSubmit}>

                <FormGroup>
                  <FormLabel htmlFor="itemCategory">Category</FormLabel>
                  <FormSelect
                    id="itemCategory"
                    name="category"
                    value={newItem.category}
                    onChange={handleChange}>
                    <option value="">Select Category</option>
                    {categories.map(category => (
                      <option key={category.id} value={category.name}>
                        {category.name}
                      </option>
                    ))}
                  </FormSelect>
                </FormGroup>
          
                  <FormGroup>
                    <FormLabel htmlFor="itemName">Item Name</FormLabel>
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
                    <FormLabel htmlFor="additional_info">Additional Information</FormLabel>
                    <FormInput
                      type="text"
                      id="additional_info"
                      name="additional_info"
                      value={newItem.additional_info}
                      onChange={handleChange}
                    />
                  </FormGroup>

                  <FormGroup>
                    <FormLabel htmlFor="expiration_date">Expiration Date</FormLabel>
                    <FormInput
                      type="date"
                      id="expiration_date"
                      name="expiration_date"
                      value={newItem.expiration_date}
                      onChange={handleChange}
                    />
                  </FormGroup>

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
                    <FormLabel htmlFor="dietary_classification">Dietary Classification</FormLabel>
                    <FormInput
                      type="text"
                      id="dietary_classification"
                      name="dietary_classification"
                      value={newItem.dietary_classification}
                      onChange={handleChange}
                    />
                  </FormGroup>

                  <FormGroup>
                    <FormLabel htmlFor="nutrition_facts">Nutrition Facts</FormLabel>
                    <FormInput
                      type="text"
                      id="nutrition_facts"
                      name="nutrition_facts"
                      value={newItem.nutrition_facts}
                      onChange={handleChange}
                    />
                  </FormGroup>

                  <FormGroup>
                    <FormLabel htmlFor="itemCategory">Category</FormLabel>
                    <FormSelect
                      id="itemCategory"
                      name="category"
                      value={newItem.category}
                      onChange={handleChange}>
                        {categories.map((category) => (
                          <option key={category.id} value={category.name}>{category.name}</option>
                        ))}
                    </FormSelect>
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
      </>
  );
}

export default AddItem;
