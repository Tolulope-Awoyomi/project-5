import React, { useContext } from 'react';
import { ItemsContext } from '../components/context/items';

const CategoryDropdown = () => {
  const { categories } = useContext(ItemsContext);

  return (
    <select>
      {categories.map(category => (
        <option key={category.id} value={category.name}>
          {category.name}
        </option>
      ))}
    </select>
  );
};

export default CategoryDropdown;
