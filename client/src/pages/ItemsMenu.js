import React, { useState, useEffect, useContext } from 'react';
import { ItemsContext } from '../components/context/items';

function ItemsMenu() {
  const { items, fetchDonationItems } = useContext(ItemsContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchZip, setSearchZip] = useState('');
  const [searchBusinessName, setSearchBusinessName] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    fetchDonationItems();
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchZip = (e) => {
    setSearchZip(e.target.value);
  };

  const handleSearchBusinessName = (e) => {
    setSearchBusinessName(e.target.value);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredItems = items.filter(item => {
    const matchesName = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesZip = item.user.zip.toLowerCase().includes(searchZip.toLowerCase());
    const matchesBusinessName = item.user.business_name.toLowerCase().includes(searchBusinessName.toLowerCase());
    const matchesCategory = selectedCategory === '' || item.category === selectedCategory;

    return matchesName && matchesZip && matchesBusinessName && matchesCategory;
  });

  const showItemDetails = (item) => {
    alert(`Item: ${item.name}\nBusiness Name: ${item.user.business_name}\nQuantity: ${item.quantity}`);
  };

  // Extract unique categories from items
  const categories = Array.from(new Set(items.map(item => item.category)));

  return (
    <div>
      <div className="categories-menu">
        {categories.map(category => (
          <button key={category} onClick={() => handleCategoryClick(category)} className="btn btn-secondary">
            {category}
          </button>
        ))}
      </div>

      <div className="search-container">
        <input type="text" placeholder="Search Item Name" value={searchTerm} onChange={handleSearch} />
        <input type="text" placeholder="Search Zip Code" value={searchZip} onChange={handleSearchZip} />
        <input type="text" placeholder="Search Business Name" value={searchBusinessName} onChange={handleSearchBusinessName} />
      </div>

      <div className="items-list">
        {filteredItems.map(item => (
          <div key={item.id} className="item-entry">
            <div>{item.name}</div>
            <div>{item.user.business_name}</div>
            <div>{item.user.zip}</div>
            <button onClick={() => showItemDetails(item)} className="btn btn-primary">
              Show Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ItemsMenu;
