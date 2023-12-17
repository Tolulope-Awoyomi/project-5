import React, { useContext } from 'react';
import { ItemsContext } from '../components/context/items';
import { FormSelect } from '../styles/StyledComponents';

const CategoryDropdown = ({ value, onChange }) => {
  const { categories } = useContext(ItemsContext);

  return (
    <FormSelect id="itemCategory" name="item_category_id" value={value} onChange={onChange}>
      <option value="">Select Category</option>
      {categories.map(category => (
        <option key={category.id} value={category.id}>{category.category}</option>
      ))}
    </FormSelect>
  );
};

export default CategoryDropdown;
