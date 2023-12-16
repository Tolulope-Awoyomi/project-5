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
  PageHeader, 
  BreadcrumbContainer,
  BreadcrumbLink,
  Section,
  FormCard
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
    category: 'meals'
  });
  const [errors, setErrors] = useState([]);
  
  const validateForm = () => {
    const errors = [];
    // Add validation logic here
    // Example: if (!newItem.name) errors.push('Item name is required.');
    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewItem({ ...newItem, [name]: value });
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
      <PageHeader>
        <div className="container">
          <h2>Add Items</h2>
          <BreadcrumbContainer>
            <BreadcrumbLink to="/foodbusiness">Food Business Services</BreadcrumbLink>
            <span> / </span>
            <BreadcrumbLink to="#">Register Items</BreadcrumbLink>
          </BreadcrumbContainer>
        </div>
      </PageHeader>

      <Section>
        <FormContainer>
          <FormCard>
            <form onSubmit={handleSubmit}>

            {/* Category Select */}
            <FormGroup>
                <FormLabel htmlFor="itemCategory">Category</FormLabel>
                <FormSelect
                  id="itemCategory"
                  name="category"
                  value={newItem.category}
                  onChange={handleChange}>
                  {categories.map(category => (
                    <option key={category.id} value={category.name}>
                      {category.name}
                    </option>
                  ))}
                </FormSelect>
              </FormGroup>
      
              {/* Name Input */}
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

              {/* Quantity Input */}
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

              {/* Expiration Date Input */}
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

              {/* Allergens Input */}
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

              {/* Dietary Classification Input */}
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

              {/* Nutrition Facts Input */}
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

              {/* Category Select */}
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


              {/* Error Messages */}
              {errors.length > 0 && (
                <ErrorAlert>
                  {errors.map((error, index) => (
                    <p key={index}>{error}</p>
                  ))}
                </ErrorAlert>
              )}

              {/* Submit Button */}
              <SubmitButton type="submit">Add Item</SubmitButton>
            </form>
          </FormCard>
        </FormContainer>
      </Section>
    </>
  );
}

export default AddItem;
