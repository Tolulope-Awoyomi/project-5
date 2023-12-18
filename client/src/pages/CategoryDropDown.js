import React, { useContext } from 'react';
import { ItemsContext } from '../components/context/items';
import { CategoryDropDownFormSelect } from '../styles/StyledComponents';

const CategoryDropdown = ({ value, onChange }) => {
  const { categories } = useContext(ItemsContext);

  return (
    <CategoryDropDownFormSelect id="itemCategory" name="item_category_id" value={value} onChange={onChange}>
      <option value="">Select Category</option>
      {categories.map(category => (
        <option key={category.id} value={category.id}>{category.category}</option>
      ))}
    </CategoryDropDownFormSelect>
  );
};

export default CategoryDropdown;
